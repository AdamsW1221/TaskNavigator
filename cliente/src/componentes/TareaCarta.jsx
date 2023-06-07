import { useNavigate } from 'react-router-dom'

function generarColorAleatorio() {
  const color = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + "0".repeat(6 - color.length) + color;
}
export function TareaCarta({tarea}) {

  const navegarRuta = useNavigate()

  return (
    <div className='bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer' style={{borderLeftColor: generarColorAleatorio(), borderLeftWidth: '4px', borderRadius: '0px 10px 10px 0px'}}
    
    onClick={() =>{
      navegarRuta(`/tareas/${tarea.id}`)
    }}
    > 
        <h1 className='font-bold uppercase'>{tarea.titulo}</h1>
        <p className='text-slate-400'>{tarea.descripcion}</p>
    </div>
  )
}
