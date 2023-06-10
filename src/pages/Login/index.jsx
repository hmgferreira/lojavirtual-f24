import React, { useContext } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/auth';
import Api from '../../config/Api';
import Message from '../../config/Message';

function Login() {

    const navigate = useNavigate();
    const { setLogado } = useContext(AuthContext);
    const validacao = Yup.object().shape({
        login: Yup.string().email("Email invalido").required("Campo obrigatorio"),
        senha: Yup.string().required("Campo obrigatorio"),
    });

    async function submit(values) {
        const resp = await Api.get('usuarios?login='+values.login)
        if(resp.data.length > 0) {
            const data = resp.data;
            if(data[0].senha == values.senha) {
                Message.success("Login realizado com sucesso.");
                const textoToken = JSON.stringify(data[0])
                localStorage.setItem('token', textoToken);
                setLogado(true);
                navigate('/admin/usuarios');
            } else {
                Message.error("Login ou senha incorreto.");
            }
        } else {
            Message.error("Login ou senha incorreto.");
        }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 offset-md-4 mt-5">
                        <Formik
                            initialValues={{
                                login: '',
                                senha: ''
                            }}
                            validationSchema={validacao}
                            onSubmit={async (values) => {
                               submit(values);
                            }}
                        >
                            {({handleChange, values, handleSubmit}) => (
                            <form>
                                <div className='mb-2'>
                                    <label htmlFor="">Login</label>
                                    <input type="text" name='login' onChange={handleChange} className='form-control' />
                                    <ErrorMessage name='login' />
                                </div>
                                <div className='mb-2'>
                                    <label htmlFor="">Senha</label>
                                    <input type="text" name='senha' onChange={handleChange}  className='form-control'  />
                                    <ErrorMessage name='senha' />
                                </div>
                                <div className='mb-2'>
                                    <button type="button" onClick={handleSubmit} className='btn btn-primary'>Acessar</button>
                                </div>
                            </form>  
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Login;