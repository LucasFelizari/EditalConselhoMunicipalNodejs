import { Router } from "express";
const mysql = require("mysql");
const usuarioRoutes = Router();

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "conselhoCultural"
})

usuarioRoutes.post('/registrar', (request, response) => {
    const {nome} = request.body;
    const {email} = request.body;
    const {endereco} = request.body;
    const {cidade} = request.body;
    const {telefone} = request.body;
    const {cpf} = request.body;
    const {senha} = request.body;

//    const existeCadastro = validarSeExiste(email); 
//    console.log(existeCadastro);
    let  sql = "INSERT INTO usuario (nome, email, endereco, cidade, telefone, cpf, senha) VALUES (?, ?, ?, ?, ?, ?, ?)";
  
    db.query(sql, [nome, email, endereco, cidade, telefone, cpf, senha])

         return response.json('aaaa')      
})

export {usuarioRoutes};