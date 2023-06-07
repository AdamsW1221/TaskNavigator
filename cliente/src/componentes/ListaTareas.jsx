import { useEffect, useState } from "react";
import {traerTodasTareas} from '../api/tareas.api';
import { TareaCarta } from './TareaCarta';


export function ListaTareas() {
    const [tareas, colocarTareas] = useState([])

    useEffect(()=> {
        
       async function cargarTareas(){
            const respuesta = await traerTodasTareas()
        colocarTareas(respuesta.data)

        }
        cargarTareas();
    }, []); 

    return(
        <div className="grid grid-cols-4 gap-3" >
        {tareas.map(tarea => (
            <TareaCarta key= {tarea.id} tarea={tarea}  />
        ))}
    </div>);
}
