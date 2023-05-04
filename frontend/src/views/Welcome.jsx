import React from "react";
import '../App.css';

function Welcome() {
    return (
        <body className="loginForm d-flex justify-content-center align-items-center height-100vh">
            <main className="container col-md-6 offset-md3 col-xl-4 offset-xl-4 h-screen flex items-center justify-center">
                <form className="card shadow-lg flex rounded w-1/2">
                    <div className="flex m-5">
                        <h1 className="text-3xl text-center">
                            Login VIPList
                        </h1>
                        <div className="">
                            <div className="text-justify px-5">
                                {/* Nome */}
                                <label className="py-2" htmlFor="name">
                                    Nome:
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
                        </div>
                    </div>
                </form>
            </main>
        </body>
    );
}

export default Welcome;
