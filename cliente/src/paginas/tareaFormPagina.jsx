import {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {crearTarea, eliminarTarea, extraerTarea, actualizarTarea} from '../api/tareas.api'
import {useNavigate, useParams} from 'react-router-dom'
import {toast} from 'react-hot-toast'


export function TareaFormPagina(){

const {register, handleSubmit, formState:{errors}, setValue} = useForm();
const navegarRuta = useNavigate()
const extraerParametros = useParams()

    const onSubmit = handleSubmit(async datos => {
       if (extraerParametros.id){
        await actualizarTarea(extraerParametros.id, datos)
        toast.success('Tarea actualizada!', {
            position: 'bottom-right',
            style: {
                background: '#101010',
                color: '#fff'
            }
        })

       }else{
        await crearTarea(datos);
        toast.success('Tarea creada!', {
            position: 'bottom-right',
            style: {
                background: '#101010',
                color: '#fff'
            }
        })
       }
       navegarRuta('/tareas');
    }); 

    useEffect(() =>{
        async function cargarTareas(){
            if(extraerParametros.id){
                const respuesta = await extraerTarea(extraerParametros.id)
                setValue('titulo', respuesta.data.titulo);
                setValue('descripcion', respuesta.data.descripcion)
            }
        }
        cargarTareas();
    }, []);

    return( 
        <div className='max-w-xl mx-auto'>
            <form onSubmit={onSubmit}>
                <input type="text" 
                placeholder="titulo"
                {...register('titulo', {required: true})}
                className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                />
                {errors.titulo && <span>Este campo es requerido</span>}

                <textarea 
                rows="3" 
                placeholder="Descripcion"
                {...register('descripcion', {required: true})}
                className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                ></textarea>
                {errors.descripcion && <span>Este campo es requerido</span>}
                <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>
                    Guardar
                </button>
            </form>

            {extraerParametros.id && 
            <div className='flex justify-end'>
            <button 
            className='bg-red-500 p-3 rounded-lg w-48 mt-3'
            onClick={async () => {
                const aceptar = window.confirm('estas seguro?')
                if(aceptar){
                   await eliminarTarea(extraerParametros.id)
                   toast.success('Tarea eliminada!', {
                    position: 'bottom-right',
                    style: {
                        background: '#101010',
                        color: '#fff'
                    }
                })
                   navegarRuta('/tareas')
                }
            }}>Borrar</button>    
            </div>}
        </div>
    );
}