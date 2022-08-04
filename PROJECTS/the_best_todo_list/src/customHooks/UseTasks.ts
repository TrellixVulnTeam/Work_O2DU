import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { ITask } from "../Models";



export function UseTasks(){
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError]= useState('');
async function fetchTasks() {
  try {
    setError('')
    setLoading(true)
    const response = await axios.get<ITask[]>('https://fakestoreapi.com/products?limit=5')
    setTasks(response.data)
    setLoading(false)
  
  }catch (e:unknown) {
    const error = e as AxiosError
    setLoading(false)
    setError(error.message)
  }}
  
useEffect(()=>{
  fetchTasks()
},[])
return {tasks, loading, error}
}