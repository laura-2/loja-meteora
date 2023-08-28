import React, {useContext}  from "react";
import "./login.css"
import {useNavigate} from 'react-router-dom'
import { UsuarioContext } from "../../Context/usuario";


export default function Login(){
    const navigate = useNavigate()
    const {nome, setNome, email, setEmail, confirmaEmail, setConfirmaEmail, senha, setSenha, confirmaSenha, setConfirmaSenha} = useContext(UsuarioContext)
    return (
            <div className="modal" >
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Cadastre-se</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <input type="text" className="form-control" placeholder="Digite seu nome completo" aria-label="Nome Completo" aria-describedby="addon-wrapping"
                value={nome} onChange={(event) => setNome(event.target.value)}/>
                <input type="email" className="form-control" placeholder="Digite seu e-mail" aria-label="E-mail" aria-describedby="addon-wrapping"
                value={email} onChange={(event) => setEmail(event.target.value)}/>
                <input type="email" className="form-control" placeholder="Digite seu e-mail" aria-label="Confirmar e-mail" aria-describedby="addon-wrapping"
                value={confirmaEmail} onChange={(event) => setConfirmaEmail(event.target.value)}/>
                <input type="password" className="form-control" placeholder="*********" aria-label="Senha" aria-describedby="addon-wrapping"
                value={senha} onChange={(event) => setSenha(event.target.value)}/>
                <input type="password" className="form-control" placeholder="*********" aria-label="Confirmar senha" aria-describedby="addon-wrapping"
                value={confirmaSenha} onChange={(event) => setConfirmaSenha(event.target.value)}/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" className="btn btn-primary" onClick={()=> navigate('/')}>Cadastrar</button>
                </div>
                </div>
            </div>
            </div>
    )
}