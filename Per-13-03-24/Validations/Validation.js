const validateTodoData = (title, description) => {
    const errors = {};

    if (!title) {
        errors.title = 'Title is required.';
    }

    if (!description) {
        errors.description = 'Description is required.';
    }

    const isValid = Object.keys(errors).length === 0;

    return { isValid, errors };
}

const validateTodoId = (id) => {
    if (!Number.isInteger(parseInt(id)) || parseInt(id) <= 0) {
        return false;
    }
    return true;
}

const validateShowTodoId = (id) => {
    if (!validateTodoId(id)) {
        return false;
    }
    return true;
}

module.exports = { validateTodoData, validateTodoId, validateShowTodoId };
