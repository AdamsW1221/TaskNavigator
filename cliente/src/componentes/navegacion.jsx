import {Link} from 'react-router-dom'

export function Navegacion() {
  return (
    <div className='flex justify-between py-3'>
        <Link to='/tareas'>
        <h1 className='font-bold text-3x1 mb-5' style={{fontSize:'30px'}}>TaskNavigator</h1>
        </Link>
        <button className='bg-indigo-500 px-5 py-2 rounded-lg'>
        <Link to='/tareas-crear'>Crear Tarea</Link>
        </button>
    </div>
  )
}
