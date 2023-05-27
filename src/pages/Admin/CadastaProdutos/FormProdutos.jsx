import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

function FormProdutos(){

   function titulo(){
    const tituloProduto = getElementById('titulo').value;
   }

    return(
        <div className='container'>
            <div className="row m-3">
                <h2>Cadastrar novo produto</h2>
            </div>

            <div className="row m-3">
                <div className="col">
                    <form>

                        <div className="row mt-3">
                            <div className="col-10">
                                <input type='text' onChange='titulo()' className='form-control' id='img' placeholder='Digite a URL da imagem do'/>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-10">
                                <input type='text' onChange='titulo()' className='form-control' id='titulo' placeholder='Digite o titulo do produto'/>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-10">
                                <textarea className='form-control' id='descricao' placeholder='Digite a descrição do produto'></textarea>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-3">
                                <input className='form-control' type='text' id='preco' placeholder='Digite o valor'/>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-3">
                                <input className='form-control' type='text' id='custo' placeholder='Digite o custo'/>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-4">
                                <input className='form-control' type='text' id='quantidade' placeholder='Quantidade'/>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-3">
                                <button className='btn btn-primary'>Cadastrar</button>
                            </div>
                        </div>

                    </form>
                </div>
                <div className="col">
                    <div className="row d-flex justify-content-center">
                        <div className="col-5 text-center">
                            <img class='img-thumbnail' src='https://imgs.ponto.com.br/1532678346/1xg.jpg?imwidth=500' width='150' height='150'/>
                        </div>

                        <div className="row d-flex justify-content-center">
                            <div className="col-5 text-center">
                                <h6>Celular Samsung Galaxy A03 Vermelho 64GB</h6>
                            </div>
                        </div>

                        <div className="row d-flex justify-content-center">
                            <div className="col-5 text-center">
                                <h4>R$ 2.342,00</h4>
                            </div>
                        </div>

                        <div className="row d-flex justify-content-center">
                            <div className="col-5 text-center">
                                <button className='btn btn-success'>Comprar</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
              
            <div className="row">
                <hr/>
                <div className="row">
                    <div className="col-5">
                        <input className='form-control' type='text' id='busca'/>
                    </div>

                    <div className="col-2">
                        <button type="button" class="btn btn-info">Buscar</button>
                    </div>

                </div>

                <div className="row mt-3">
                    <table className='table table-striped table-bordered' width= '866'>
                        <tr>
                            <th width='70' rowspan='2' scope='col'><img src='https://imgs.ponto.com.br/1532678346/1xg.jpg?imwidth=500' width='100' height='100'/></th>
                            <th colspan='4' scope='col'>TITULO</th>
                        </tr>
                        <tr>
                            <td width='189'>VALOR</td>
                            <td width='207'>ESTOQUE</td>
                            <td width='201'>CUSTO</td>
                            <td width='165'>
                            <button type='button' class='btn btn-primary'>Alterar</button>
                            <button type="button" class="btn btn-danger">Excluir</button>
                            </td>
                        </tr>
                        <tr>
                            <td colspan='5'>DESCRIÇÃO</td>
                        </tr>
                    </table>
                </div>


            </div>

        </div>
    )
}

export default FormProdutos