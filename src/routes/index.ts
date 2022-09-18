import express from "express";

module.exports = (app: express.Application) => {

    const taskController = require('../controllers/taskController')
    const authController = require('../controllers/authController')

    const authMiddleware = require('../middleware/authMiddleware')



    app.get('/api/tasks', taskController.getTasks)
    app.post('/api/tasks/add',authMiddleware, taskController.add)

    app.post('/api/auth', authController.signIn)
    app.delete('/api/auth', authController.signOut)
    app.get('/api/auth', authController.getMe)

    app.get('/cook',authMiddleware, (req,res)=>{
        res.cookie('test','complete',{httpOnly:true, maxAge: 15*1000})
        res.send('ok')
    })

}