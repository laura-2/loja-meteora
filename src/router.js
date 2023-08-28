import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import React from 'react'
import Login from './Pages/Login'
import Carrinho from './Pages/Carrinho'
import Favoritos from './Pages/Favoritos'
import { UsuarioProvider as UP} from './Context/usuario'
import { CarrinhoProvider as CP } from './Context/Carrinho'
import { PagamentoProvider as PP} from './Context/Pagamento'

function Router(){
    return(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<UP><PP><Home/></PP></UP>}/>
            <Route path="/perfil" element={<UP><Login/></UP>}/>
            <Route path="/carrinho" element={<CP><PP><Carrinho/></PP></CP>}/>
            <Route path="/favoritos" element={<Favoritos/>}/>
        </Routes>
    </BrowserRouter>
    )
}
export default Router