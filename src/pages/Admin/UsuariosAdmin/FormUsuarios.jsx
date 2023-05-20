import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

function FormUsuarios() {

    const navigate = useNavigate();
    const params = useParams();
    
    const[nome, setNome] = useState('');
    const[login, setLogin] = useState('');
    const[senha, setSenha] = useState('');

    async function salvar(){
        const dados = {
            nome: nome,
            login: login,
            senha: senha,
        }
        if(params.id) {
            await axios.put('http://localhost:3000/usuarios/'+params.id, dados);
            alert("Usuario Atualizado com Sucesso");
            navigate('/admin/usuarios');
        } else {
            await axios.post('http://localhost:3000/usuarios', dados);
            alert("Usuario Cadsatrado com Sucesso");
            navigate('/admin/usuarios');
        }
    }

    async function getData(){
        const response = await axios.get('http://localhost:3000/usuarios/'+params.id);
        const data = response.data;
        setNome(data.nome);
        setLogin(data.login);
        setSenha(data.senha);
    }

    function handleChange(evento) {
        
        if(evento.target.name === 'nome') {
            setNome(evento.target.value);
        }
        if(evento.target.name === 'login') {
            setLogin(evento.target.value);
        }
        if(evento.target.name === 'senha') {
            setSenha(evento.target.value);
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
                <input type="text" name="nome" value={nome} onChange={handleChange} />
                <input type="text" name="login" value={login}  onChange={handleChange} />
                <input type="password" name="senha" onChange={handleChange} />
                <button type="button" onClick={salvar}>Salvar</button>
            </form>
        </>
    )
}

export default FormUsuarios;