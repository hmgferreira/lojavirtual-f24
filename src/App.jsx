import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, RouterProvider, Navigate } from 'react-router-dom';
import Header from './layouts/Header';
import Body from './layouts/Body';
import Footer from './layouts/Footer';
import Menu from './layouts/Menu';


import Login from './pages/Login';
import Home from './pages/Clientes/Home';
import Produtos from './pages/Clientes/Produtos';
import Carrinho from './pages/Clientes/Carrinho';
import Contato from './pages/Clientes/Contato';
import UsuariosAdmin from './pages/Admin/UsuariosAdmin';
import FormUsuarios from './pages/Admin/UsuariosAdmin/FormUsuarios';

import ExibirProdutos from './pages/Admin/CadastaProdutos/Index';
import CadastraProduto from './pages/Admin/CadastaProdutos/CadastraProduto';
import AuthContext from './contexts/auth';
import { useEffect, useState } from 'react';

// import ComponenteClass from './estudos/ComponenteClass';

function App() {

  const[logado, setLogado] = useState(localStorage.getItem('token') != null ? true : false);
  const routes = [
    {
      path: '/',
      element: <Home />,
      hasLayout: true,
      isPrivate: false,
    },
    {
      path: '/produtos',
      element: <Produtos />,
      hasLayout: true,
      isPrivate: false,
    },
    {
      path: '/carrinho',
      element: <Carrinho />,
      hasLayout: true,
      isPrivate: false,
    },
    {
      path: '/contato',
      element: <Contato />,
      hasLayout: true,
      isPrivate: false,
    },
    {
      path: '/login',
      element: <Login />,
      hasLayout: false,
      isPrivate: false,
    },
    {
      path: '/admin/usuarios',
      element: <UsuariosAdmin />,
      hasLayout: false,
      isPrivate: true,
    },
    {
      path: '/admin/usuarios/novo',
      element: <FormUsuarios />,
      hasLayout: false,
      isPrivate: true,
    },
    {
      path: '/admin/usuarios/edit/:id',
      element: <FormUsuarios />,
      hasLayout: false,
      isPrivate: true,
    },
  ];

  function getLayout(item) {
    if(item.isPrivate && logado === false) {
      return <Navigate to="/login" />
    }

    
    if(item.hasLayout) {
      return (
        <>
          <Header />
          <Body>
            {item.element}
          </Body>
          <Footer />
        </>
      );
    } else {
      return (
        <>
          {item.element}
        </>
      );
    }
  }

  return (
    <AuthContext.Provider value={{ logado, setLogado }}>
      <BrowserRouter>
        <Routes>
          {routes.map((item, index) => (
            <Route path={item.path} element={getLayout(item)} />  
          ))}

        
          <Route path="/admin/produtos" element={<ExibirProdutos />} />
          <Route path="/admin/produtos/Cadastraprodutos" element={<CadastraProduto />} />
          <Route path="/admin/produtos/edit/:id" element={<CadastraProduto />} />

        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
