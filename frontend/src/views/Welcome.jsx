import React from "react";
import '../App.css';
import {Tab, Tabs } from "react-bootstrap";

function Welcome() {
    return (
        <div className="loginForm d-flex justify-content-center align-items-center height-100vh">
            <div className="container col-md-6 offset-md3 col-xl-4 offset-xl-4 h-screen flex items-center justify-center">
                <Tabs defaultActiveKey="Login" className="" justify>
                    <Tab eventKey="Login" title="Login">
                        <form className="card shadow-lg flex rounded w-1/2 p-5">
                            <h1 className="text-3xl text-center">
                                Login VIPList
                            </h1>
                            <div className="text-justify px-5">
                                {/* Nome */}
                                <label className="py-2" htmlFor="e-mail">
                                    E-mail:
                                </label>
                                <input className="form-control" type="text" name="name" placeholder="Digite seu nome"/>
                                <label className="py-2" htmlFor="name">
                                    Senha:
                                </label>
                                <input className="form-control" type="password" name="senha" placeholder="Digite sua senha"/>
                                <div className="pt-3 text-center">
                                    <button className="btn btn-primary">Entrar</button>
                                </div>
                            </div>
                        </form>
                    </Tab>
                    <Tab eventKey="Cadastro" title="Cadastro"></Tab>
                </Tabs>
            </div>    
        </div>
    );
}

export default Welcome;
