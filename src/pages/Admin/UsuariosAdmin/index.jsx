import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Api from '../../../config/Api';

function UsuariosAdmin() {

    const[list, setList] = React.useState([]);
    const[text, setText] = React.useState('');
    const navigate = useNavigate();

    async function getData() {
        if(text === '') {
            const response = await Api.get("usuarios");
            setList(response.data);    
        } else {
            const response = await Api.get("usuarios?nome_like="+text);
            setList(response.data);
        }
    }

    function novoRegistro() {
        navigate('/admin/usuarios/novo');
    }

    async function excluirItem(id) {
        const check = confirm("Deseja deletar?");
        if(check) {
            await Api.delete('suarios/'+id);
            alert("Registro Deletado com Sucesso");
            getData();
        }   
    }

    async function editarItem(id) {
        // /admin/usuarios/edit/1
        navigate('/admin/usuarios/edit/'+id);
    }

    React.useEffect(() => {
        getData();
    }, []);

    React.useEffect(() => {
        getData();
    }, [text]);

    return (
        <>
            <button className='btn btn-success' onClick={novoRegistro}>Novo</button>
            <input 
                type='text' 
                name='pesquisa' 
                className='form-control' 
                onChange={(event) => {
                    setText(event.target.value);
                    console.log(event.target.value);
                }}
            />
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Login</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {list.length === 0 ? 'Nenhum registro...' : ''}
                    {list.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.email}</td>
                            <td>
                                <button className="btn btn-primary" onClick={() => editarItem(item.id)}>Editar</button>&nbsp;
                                <button className="btn btn-danger" onClick={() => excluirItem(item.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> 
        </>
    );
}

export default UsuariosAdmin;