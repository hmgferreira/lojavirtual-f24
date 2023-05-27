import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Menu from './layouts/Menu';

import Home from './pages/Clientes/Home';
import Produtos from './pages/Clientes/Produtos';
import Carrinho from './pages/Clientes/Carrinho';
import Contato from './pages/Clientes/Contato';
import UsuariosAdmin from './pages/Admin/UsuariosAdmin';
import FormUsuarios from './pages/Admin/UsuariosAdmin/FormUsuarios';

import ExibirProdutos from './pages/Admin/CadastaProdutos/Index';
import CadastraProduto from './pages/Admin/CadastaProdutos/CadastraProduto';
// import ComponenteClass from './estudos/ComponenteClass';

function App() {

 

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/contato" element={<Contato />} />

          <Route path="/admin/usuarios" element={<UsuariosAdmin />} />
          <Route path="/admin/usuarios/novo" element={<FormUsuarios />} />
          <Route path="/admin/usuarios/edit/:id" element={<FormUsuarios />} />

          <Route path="/admin/produtos" element={<ExibirProdutos />} />
          <Route path="/admin/produtos/Cadastraprodutos" element={<CadastraProduto />} />
          <Route path="/admin/produtos/edit/:id" element={<CadastraProduto />} />

        </Routes>
        <Footer /> 
      </BrowserRouter>
    </>
  )
}

export default App
