import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {TareaPagina} from './paginas/tareaPagina';
import {TareaFormPagina} from './paginas/tareaFormPagina';
import {Navegacion} from './componentes/navegacion';
import {Toaster} from 'react-hot-toast'
function App(){
  return (
    <BrowserRouter>
    <div className='container mx-auto'>
    <Navegacion />
    <Routes>
      <Route path='/' element={<Navigate to='/tareas' />} />
      <Route path='/tareas' element={<TareaPagina />} />
      <Route path='/tareas-crear' element={<TareaFormPagina />} />
      <Route path='/tareas/:id' element={<TareaFormPagina />} />
    </Routes>
    <Toaster/>
    </div>
    </BrowserRouter>
  );
}

export default App