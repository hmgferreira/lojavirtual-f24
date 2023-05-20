import React from 'react';

class ComponenteClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            nome: '',
            login: '',
        }
    }

    // EXECUTA NA CONTRUCAO DO COMPONENTE
    componentDidMount(){
        alert("Ola")
    }

    // EXECUTA QUANDO QUALQUER STATE MUDA
    componentDidUpdate(){
        
    }

    render() {
        return (
            <>
                HTML
            </>
        );
    }
    
}
export default ComponenteClass;