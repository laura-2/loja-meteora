import {createContext, useState} from 'react'

export const UsuarioContext = createContext();
UsuarioContext.displayName = "Usuário"

export const UsuarioProvider= ({children})=>{
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [confirmaEmail, setConfirmaEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmaSenha, setConfirmaSenha] = useState("")
    return (
        <UsuarioContext.Provider value={{nome, setNome,email, setEmail,confirmaEmail, setConfirmaEmail, senha, setSenha, 
            confirmaSenha, setConfirmaSenha}}>
                {children}
        </UsuarioContext.Provider>

    )
};