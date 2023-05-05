import React from "react";
import '../App.css';
import {Tab, Tabs } from "react-bootstrap";

function Welcome() {
    return (
        <div className="loginForm d-flex justify-content-center align-items-center height-100vh">
            <div className="container col-md-6 offset-md3 col-xl-4 offset-xl-4 h-screen flex items-center justify-center">
            <form className="card shadow-lg flex rounded w-1/2">
                <Tabs defaultActiveKey="Login" variant="pills" fill>
                    <Tab eventKey="Login" title="Login" className="p-5">
                        <h1 className="text-3xl text-center">
                            Login VIPList
                        </h1>
                        <div className="text-justify px-5">
                            {/* Nome */}
                            <label className="py-2" htmlFor="e-mail">
                                E-mail:
                            </label>
                            <input className="form-control" type="text" name="name" placeholder="Digite seu e-mail"/>
                            <label className="py-2" htmlFor="name">
                                Senha:
                            </label>
                            <input className="form-control" type="password" name="senha" placeholder="Digite sua senha"/>
                            <div className="pt-3 text-center">
                                <button className="btn customButton">Entrar</button>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="Cadastro" title="Cadastro" className="p-5">
                        <h1 className="text-3xl text-center">
                            Cadastre-se no VIPList
                        </h1>
                        <div className="text-justify px-5">
                            {/* Nome */}
                            <label className="py-2" htmlFor="nome">
                                Nome:
                            </label>
                            <input className="form-control" type="text" name="name" placeholder="Digite seu Nome"/>
                            <label className="py-2" htmlFor="email">
                                E-mail:
                            </label>
                            <input className="form-control" type="text" name="email" placeholder="Digite seu e-mail"/>
                            <label className="py-2" htmlFor="name">
                                Senha:
                            </label>
                            <input className="form-control" type="password" name="senha" placeholder="Digite sua senha"/>
                            <div className="pt-3 text-center">
                                <button className="btn customButton">Cadastrar</button>
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
