const database = require('../db/connection.js');
const response = require('../helpers/response.js');
const { validateTodoData, validateTodoId, validateShowTodoId } = require('../Validations/Validation.js');

// membuat getTodo = localhost:6000/api/todos

const getAllTodo = (req, res) => {
    const querySql = 'SELECT * FROM todo';
    database.query(querySql, (err, result) => {
        if (err) throw err;
        response(res, 200, { message: 'Success get todos', data: result })
    });
}

const storeTodo = (req, res) => {
    const { title, description } = req.body;

    if (!title && !description) {
        return response(res, 400, { message: 'Error Validation', data: {
            title: 'title wajib diisi',
            description: 'Deskripsi wajib diisi'
        } });
    }
    
    if (!title) {
        return response(res, 400, { message: 'Error Validation', data: {
            title: 'title wajib diisi'
        } });
    }
    
    if (!description) {
        return response(res, 400, { message: 'Error Validation', data: {
            description: 'Deskripsi wajib diisi'
        } });
    }
    
    database.query('INSERT INTO TODO (title, description) VALUES(?, ?)', [title, description], (err, result) => {
        if (err) {
            throw err;
        }
        response(res, 201, { message: 'Success created todos' });
    });
}

const updateTodo = (req, res) => {
    const { title, description } = req.body;
    const id = req.params.id;

    // Validasi ID todo
    if (!validateTodoId(id)) {
        response(res, 400, { message: 'Invalid todo ID. Please provide a valid positive integer ID.' });
        return;
    }

    // Periksa keberadaan ID dalam database
    database.query('SELECT * FROM todo WHERE id = ?', [id], (err, result) => {
        if (err) {
            throw err;
        } else {
            if (result.length === 0) {
                response(res, 404, { message: `Todo ${id} not found` });
            } else {
                // Jika ID ada, kirim data yang akan diubah sebagai respons
                const todoToUpdate = result[0];
                response(res, 200, { message: 'Todo found. Update the data.', data: todoToUpdate });
            }
        }
    });
}

const deleteTodo = (req, res) => {
    const id = req.params.id;

    database.query('DELETE FROM todo WHERE id = ?', [id], (err, result) => {
        if (err) {
            response(res, 500, 'Failed to delete todo.', null);
            return;
        }

        if (result.affectedRows === 0) {
            response(res, 404, { message: `Todo ${id} not found` })
        } else {
            response(res, 200, { message: `Todo ${id} deleted successfully` }, null)
        }
    });
}

const showTodo = (req, res) => {
    const id = req.params.id;

    if (!validateShowTodoId(id)) {
        response(res, 400, { message: 'Invalid todo ID. Please provide a valid positive integer ID.' });
        return;
    }

    database.query('SELECT * FROM todo WHERE id = ?', [id], (err, result) => {
        if (err) {
            throw err;
        }

        if (result.length === 0) {
            response(res, 404, { message: `Todo ${id} not found` });
        } else {
            response(res, 200, { message: `Success get todo ${id}`, data: result[0] });
        }
    });
}

module.exports = { getAllTodo, storeTodo, updateTodo, deleteTodo, showTodo };