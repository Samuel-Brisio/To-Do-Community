/* eslint-disable no-unused-vars */
import React from "react";
import '../App.css';
import {Tab, Tabs } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from "../Services/api";

function Welcome(){
    const history=useNavigate('');
    const [userName, setUserName] = useState('');
    const [senha, setSenha] = useState('');
    const [msg, setMsg] = useState('Preencha os seus dados para fazer login:');

    function handleUserNameChange(event){
        setUserName(event.target.value)
    }
    function handleSenhaChange(event){
        setSenha(event.target.value)
    }
    function handleSubmit(event){
        console.log('Handle Submit OK!');
        
        api.get("/users", {userName, password:senha})
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log("erro: ", err);
            })
    }

    return (
        <div className="loginForm d-flex justify-content-center align-items-center height-100vh">
            <div className="container col-md-6 offset-md3 col-xl-4 offset-xl-4 h-screen flex items-center justify-center">
            <form className="card shadow-lg flex rounded w-1/2">
                <Tabs defaultActiveKey="Login" variant="pills" fill>
                    <Tab eventKey="Login" title="Login" method="post" className="p-5">
                        <h1 className="text-3xl text-center">
                            Login VIPList
                        </h1>
                        <div className="text-justify px-5">
                            {/* Nome */}
                            <label className="py-2" htmlFor="userName">
                                Nome de Usuário:
                            </label>
                            <input required onChange={handleUserNameChange} value={userName} className="form-control" type="text" name="userName" placeholder="Digite seu e-mail"/>
                            <label className="py-2" htmlFor="name">
                                Senha:
                            </label>
                            <input required onChange={handleSenhaChange} value={senha} className="form-control" type="password" name="senha" placeholder="Digite sua senha"/>
                            <div className="pt-3 text-center">
                                <button className="btn btn-primary" onClick={handleSubmit}>Entrar</button>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="Cadastro" title="Cadastro" className="p-5">
                        <h1 className="text-3xl text-center">
                            Cadastre-se no VIPList
                        </h1>
                        <div className="text-justify px-5">
                            {/* Nome */}
                            <label className="py-2" htmlFor="userName">
                                Nome de Usuário:
                            </label>
                            <input className="form-control" type="text" name="userName" placeholder="Digite seu Nome de Usuáro"/>
                            <label className="py-2" htmlFor="name">
                                Senha:
                            </label>
                            <input className="form-control" type="password" name="senha" placeholder="Digite sua senha"/>
                            <div className="pt-3 text-center">
                                <button className="btn btn-primary">Cadastrar</button>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
                </form>
            </div>    
        </div>
    );
}

export default Welcome;