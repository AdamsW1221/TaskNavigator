import axios from 'axios'


const URL =
  process.env.NODE_ENV === "production"
    ? import.meta.env.VITE_BACKEND_URL
    : "http://localhost:8000";

console.log(URL);
const tareaApi = axios.create({
  baseURL: `${URL}/tareas/api/v1/tareas`,
});

export const traerTodasTareas = () => tareaApi.get('/');
export const extraerTarea = (id) => tareaApi.get(`${id}/`)
export const crearTarea = (tarea) => tareaApi.post('/', tarea);
export const eliminarTarea = (id) => tareaApi.delete(`/${id}`);
export const actualizarTarea = (id, tarea) => tareaApi.put(`/${id}/`, tarea);
