const fs = require('fs');
const readline = require('readline');
const { generateRandomId } = require('./generateRandomId');
const { resolve } = require('path');
const { rejects } = require('assert');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const directory = './dataBase/todos.json';
if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
};

const checkFile = './dataBase/todos.json';
if (!fs.existsSync(checkFile)) {
    fs.writeFileSync(checkFile, '[]', 'utf-8');
};

const todoQuestion = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

const todos = () => {
    const fileTodos = fs.readFileSync(checkFile, 'utf-8');
    const data = JSON.parse(fileTodos);
    console.log(data);

    rl.addListener.close();
};

// Menambahkan data baru
const storeTodo = (title, description, status) => {
    const id = generateRandomId(10);
    const todo = { id, title, description, status };
    const file = fs.readFileSync(checkFile, 'utf-8');

    const dataTodos = JSON.parse(file);
    dataTodos.push(todo);
    fs.writeFileSync(checkFile, JSON.stringify(dataTodos));
    console.log('Tankyou for submit todos');

    rl.close();
};

const getById = (id) => {
    const file = fs.readFileSync(checkFile, 'utf-8');
    const data = JSON.parse(file);
    const findTodoId = data.find(todo => todo.id === id);

    if (findTodoId) {
        console.log(findTodoId);
    } else {
        console.log(`Todo dengan ID ${findTodoId} tidak ditemukan.`);
    }
    
    rl.close();
};

const updateById = (id, updateTodo) => {
    const file = fs.readFileSync(checkFile, 'utf-8');
    const data = JSON.parse(file);
    const index = data.find(todo => todo.id === id);

    if (index !== -1) {
        
    }
}

module.exports = {
    todoQuestion,
    todos,
    storeTodo,
    getById
};