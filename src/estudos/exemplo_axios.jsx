import axios from 'axios';

function ExemploAxios(){

    function utilizandoAxios() {
        // CONSULTAR
        const response = axios.get("http://localhost:3000/usuarios");
        console.log(response);

        // GRAVAR UM NOVO DADO
        axios.post("http://localhost:3000/usuarios", {
            name: "Admin",
            login: "admin@admin.com",
            senha: "123"
        });

        // ATUALIZAR UM DADO
        axios.put("http://localhost:3000/usuarios/1", {
            name: "Admin",
            login: "admin@admin.com",
            senha: "123"
        });

        // DELETAR UM DADO
        axios.delete("http://localhost:3000/usuarios/1");
        
    }

    return (
        <>
        </>
    )

}

export default ExemploAxios;