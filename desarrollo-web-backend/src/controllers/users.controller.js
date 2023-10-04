const { param } = require('../routers');

require('express')
let users = [];
class UsersController {
    /**
     * 
     * @param {import('express').Request} req 
     * @param {import('express').Response} res 
     */
    createUser(req, res) {

        users.push(req.body)
        res.status(201).json({
            ok: true,
            message: "",
            info: req.body
        })
    }

    /**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
    updateUser(req, res) {

        let index = users.findIndex((value) => {
            value.Id === param.id
        })
        users[index] = req.body
        res.status(200).json({
            ok: true,
            message: "",
            info: req.body
        })

    }
    /**
     * 
     * @param {import('express').Request} req 
     * @param {import('express').Response} res 
     */
    getUser(req, res) {
        let user = users.find((value) => value.Id === req.params.id)
        res.status(200).json({
            ok: true,
            message: "",
            info: user
        })
    }

    /**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
    getUsers(req, res) {
        res.status(200).json({
            ok: true,
            message: "",
            info: users
        })
    }

    /**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
    deleteUser(req, res) {
        users = users.filter((value) => {
            return value.Id != req.params.id;
        });
        res.status(200).json({
            ok: true,
            message: "",
            info: "Eliminado con exito"
        })
    }
}

module.exports = UsersController