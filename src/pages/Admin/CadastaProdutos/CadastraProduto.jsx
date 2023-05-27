import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

function CadastraProduto() {

    const navigate = useNavigate();
    const params = useParams();
    
    const[url, setUrl] = useState('');
    const[titulo, setTitulo] = useState('');
    const[valor, setValor] = useState('');
    const[custo, setCusto] = useState('');
    const[quantidade, setQuantidade] = useState('');
    const[descricao, setDescricao] = useState('');

    async function salvar(){
        const dados = {
            url: url,
            titulo: titulo,
            descricao: descricao,
            valor: valor,
            custo: custo,
            quantidade: quantidade,
        }
        if(params.id) {
            await axios.put('http://localhost:3000/produtos/'+params.id, dados);
            alert("Produto Atualizado com Sucesso");
            navigate('/admin/Produtos');
        } else {
            await axios.post('http://localhost:3000/produtos', dados);
            alert("Produto cadastrado com Sucesso");
            navigate('/admin/Produtos');
        }
    }

    async function getData(){
        const response = await axios.get('http://localhost:3000/produtos/'+params.id);
        const data = response.data;

        setUrl(data.url);
        setTitulo(data.titulo);
        setValor(data.valor);
        setCusto(data.custo);
        setQuantidade(data.quantidade);
        setQuantidade(data.descricao);
    }

    function handleChange(evento) {
        
        if(evento.target.name === 'url') {
            setUrl(evento.target.value);
        }
        if(evento.target.name === 'titulo') {
            setTitulo(evento.target.value);
        }
        if(evento.target.name === 'valor') {
            setValor(evento.target.value);
        }
        if(evento.target.name === 'custo') {
            setCusto(evento.target.value);
        }
        if(evento.target.name === 'quantidade') {
            setQuantidade(evento.target.value);
        }
        if(evento.target.name === 'descricao') {
            setDescricao(evento.target.value);
        }
    }

    useEffect(() => {
        if(params.id) {
            getData();
        }
    }, []);

    return (
        <>
            <form>
                <input type="text" name="url" placeholder='Digite a URL da imagem' value={url} onChange={handleChange} />
                <br/>
                <br/>
                <input type="text" name="titulo" placeholder='Digite o titulo' value={titulo}  onChange={handleChange} />
                <br/>
                <br/>
                <input type="textarea" name="descricao" placeholder='Digite a descrição' value={descricao} onChange={handleChange} />
                <br/>
                <br/>
                <input type="text" name="valor" placeholder='Digite o valor do produto' value={valor} onChange={handleChange} />
                <br/>
                <br/>
                <input type="text" name="custo" placeholder='Digite o valor do custo' value={custo} onChange={handleChange} />
                <br/>
                <br/>
                <input type="text" name="quantidade" placeholder='Digite a quantidade' value={quantidade} onChange={handleChange} />
                <br/>
                <br/>
                <button type="button" onClick={salvar}>Salvar</button>
            </form>
        </>
    )
}

export default CadastraProduto