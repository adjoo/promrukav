"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (app) => {
    const taskController = require('../controllers/taskController');
    const authController = require('../controllers/authController');
    const authMiddleware = require('../middleware/authMiddleware');
    app.get('/api/tasks', taskController.getTasks);
    app.post('/api/tasks/add', authMiddleware, taskController.add);
    app.post('/api/auth', authController.signIn);
    app.get('/api/auth', authController.me);
};
