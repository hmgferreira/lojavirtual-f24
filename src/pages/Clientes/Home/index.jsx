import React from 'react';
import styles from './styles';

function Home() {

    const[valor, setValor] = React.useState('Maria');
    const[num, setNum] = React.useState(1);

    function teste() {
        setValor("Joao");
        setNum(num + 1);
    }

    // USE EFFECT
    // FUNCAO PARA EXECUTAR NO PRIMEIRO CARREGAMENTO DO COMPONENTE
    React.useEffect(() => {
        // alert("Seja bem vindo ao Componente Home");
    }, []);


    // FUNCAO PARA EXECUTAR QUANDO O STATE NUM ALTERAR
    React.useEffect(() => {
        console.log("Alterado para " + num);
    }, [num]);

    return (
        <div style={styles.section}>
            {valor} - {num}
            <br />
            <button onClick={teste} className="btn btn-primary">Botao Teste</button>
        </div>
    )
}

export default Home;