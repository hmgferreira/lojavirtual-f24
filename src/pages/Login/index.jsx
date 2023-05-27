import React, { useContext } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/auth';

function Login() {

    const navigate = useNavigate();
    const { setLogado } = useContext(AuthContext);
    const validacao = Yup.object().shape({
        login: Yup.string().email("Email invalido").required("Campo obrigatorio"),
        senha: Yup.string().required("Campo obrigatorio"),
    });
    return (
        <>
            <Formik
                initialValues={{
                    login: '',
                    senha: ''
                }}
                validationSchema={validacao}
                onSubmit={async (values) => {
                    const resp = await axios.get('http://localhost:3000/usuarios?login='+values.login);
                    if(resp.data.length > 0) {
                        const data = resp.data;
                        if(data[0].senha == values.senha) {
                            alert("Login Correto")
                            setLogado(true);
                            navigate('/admin/usuarios');
                        } else {
                            alert("Login incorreto");
                        }
                    }
                }}
            >
                {({handleChange, values, handleSubmit}) => (
                  <form>
                    <input type="text" name='login' onChange={handleChange} />
                    <ErrorMessage name='login' />
                    <br />
                    <input type="text" name='senha' onChange={handleChange} />
                    <ErrorMessage name='senha' />
                    <br />
                    <button type="button" onClick={handleSubmit}>Acessar</button>
                  </form>  
                )}
            </Formik>
        </>
    );

}

export default Login;