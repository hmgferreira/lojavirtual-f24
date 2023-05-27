import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ExibirProdutos() {

    const[list, setList] = React.useState([]);
    const[text, setText] = React.useState('');
    const navigate = useNavigate();

    async function getData() {
        if(text === '') {
            const response = await axios.get("http://localhost:3000/produtos");
            setList(response.data);    
        } else {
            const response = await axios.get("http://localhost:3000/produtos?nome_like="+text);
            setList(response.data);
        }
    }

    function novoRegistro() {
        navigate('/admin/produtos/Cadastraprodutos');
    }

    async function excluirItem(id) {
        const check = confirm("Deseja deletar?");
        if(check) {
            await axios.delete('http://localhost:3000/produtos/'+id);
            alert("Registro Deletado com Sucesso");
            getData();
        }   
    }

    async function editarItem(id) {
        // /admin/usuarios/edit/1
        navigate('/admin/produtos/edit/'+id);
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
                        <th>Imagem</th>
                        <th>Titulo</th>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Custo</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    {list.length === 0 ? 'Nenhum registro...' : ''}
                    {list.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td><img src={item.url} width={70} height={70}/></td>
                            <td>{item.titulo}</td>
                            <td>{item.descricao}</td>
                            <td>{item.valor}</td>
                            <td>{item.custo}</td>
                            <td>{item.quantidade}</td>
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

export default ExibirProdutos;