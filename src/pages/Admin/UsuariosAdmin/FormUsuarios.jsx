import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function FormUsuarios() {

    const navigate = useNavigate();
    const params = useParams();
    
    const[formData, setFormData] = useState({
        nome: '',
        login: '',
        senha: '',
    });

    const validacaoForm = Yup.object().shape({
        nome: Yup.string().required("Campo obrigatório").min(3, 'Minimo de caracteres nao permitido'),
        login: Yup.string().required("Campo obrigatório").email("Email inválido")
    });


    async function salvar(values){
        if(params.id) {
            await axios.put('http://localhost:3000/usuarios/'+params.id, values);
            alert("Usuario Atualizado com Sucesso");
            navigate('/admin/usuarios');
        } else {
            await axios.post('http://localhost:3000/usuarios', values);
            alert("Usuario Cadsatrado com Sucesso");
            navigate('/admin/usuarios');
        }
    }

    async function getData(){
        const response = await axios.get('http://localhost:3000/usuarios/'+params.id);
        const data = response.data;
        data.senha = '';
        setFormData(data);
    }

    useEffect(() => {
        if(params.id) {
            getData();
        }
    }, []);

    return (
        <>

            <Formik
                initialValues={formData}
                enableReinitialize
                onSubmit={(values) => {
                    salvar(values);
                }}
                validationSchema={validacaoForm}
            >
                {({values, handleChange, handleSubmit}) => (
                    <form>
                        <div>
                            <input type="text" name="nome" value={values.nome} onChange={handleChange} className='form-control' />
                            <span className='error'>
                                <ErrorMessage name='nome' />
                            </span>
                        </div>
                        <div>
                            <input type="text" name="login" value={values.login} onChange={handleChange} className='form-control' />
                            <span className='error'>
                                <ErrorMessage name='login' />
                            </span>
                            
                        </div>
                        <div>
                            <input type="password" name="senha" value={values.senha} onChange={handleChange} className='form-control'/>
                            <span className='error'>
                                <ErrorMessage name='senha' />    
                            </span>
                        </div>
                        <button type="button" className='btn btn-success' onClick={handleSubmit}>Salvar</button>
                    </form>
                )}
            </Formik>
        </>
    )
}

export default FormUsuarios;