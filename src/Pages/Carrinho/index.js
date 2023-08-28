import React from "react";
import { useCarrinhoContext } from "../../Context/Carrinho";
import CardPrice from "../../components/CardPrice"
import {usePagamentoContext } from "../../Context/Pagamento";
export default function Carrinho({id}){
    const {removerProduto, carrinho, valorTotalCarrinho, efetuarCompra} = useCarrinhoContext()
    const {mudarFormaPagamento, tiposPagamento } = usePagamentoContext()
       return (
            <div className="modal" >
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Carrinho de Compras</h5>
                    {carrinho.map(produto => (
                        <CardPrice {...produto} key={produto.id}/>
                    ))}
                    <button onClick={()=> removerProduto(id)}>Remover do carrinho</button>
                    <h4>Total: {valorTotalCarrinho.toFixed(2)}</h4>
                    <h4>Formas de pagamento: </h4>
                    <select value={tiposPagamento.id} onChange={(event)=> mudarFormaPagamento(event.target.value)}>
                            {tiposPagamento.map(pagamento =>(
                                <option value={pagamento.id} key={pagamento.id}>{pagamento.nome}</option>
                            ))}

                    </select>
                    <button disabled={carrinho.length === 0} onClick={()=> efetuarCompra()}>Comprar</button>
                </div>
                </div>
            </div>
            </div>
    )
}