// Este archivo va a controlar las rutas de usuarios para tener solo eso, rutas

const { response, request } = require('express')

const usuariosGet = (req = request, res) => {

    const {q=1,nombre,apikey} = req.query

    res.json({
        msg: "get api",
        q,
        nombre,
        apikey
    });
}

const usuariosPut = (req, res) => {

    const id = req.params.id;


    res.json({
        msg: "put api",
        id
    });
}

const usuariosPost = (req, res) => {

    const {nombre,edad} = req.body;

    res.json({
        msg: "post api",
        nombre,
        edad
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: "delete api"
    });
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: "patch api"
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}