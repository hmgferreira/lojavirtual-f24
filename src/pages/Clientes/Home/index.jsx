import React from 'react';
import styles from './styles';
import Api from '../../../config/Api';

function Home() {

    const[valor, setValor] = React.useState('Maria');
    const[num, setNum] = React.useState(1);
    const[produtos, setProdutos] = React.useState([]);

    function teste() {
        setValor("Joao");
        setNum(num + 1);
    }


    async function listarProdutos() {
        const response = await Api.get('produtos');
        
        setProdutos(response.data);
        console.log(produtos);

    }

    // USE EFFECT
    // FUNCAO PARA EXECUTAR NO PRIMEIRO CARREGAMENTO DO COMPONENTE
    React.useEffect(() => {
        // alert("Seja bem vindo ao Componente Home");
        listarProdutos();
    }, []);


    // FUNCAO PARA EXECUTAR QUANDO O STATE NUM ALTERAR
    React.useEffect(() => {
        console.log("Alterado para " + num);
    }, [num]);

    return (
        <div style={styles.section}>
            <div className="row">
                {produtos.map((item) => (
                    <div className="col-3">
                        <div className="card">
                            <img src={item.url} className="card-img-top" alt="123" />
                            <div className="card-body">
                                <h5 className="card-title">{item.titulo}</h5>
                                <p className="card-text">{item.descricao}</p>
                                <a href="#" className="btn btn-primary">Adicionar</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;