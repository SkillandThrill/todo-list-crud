import { Rethink_Sans } from "next/font/google";
import { ITask } from "./types/tasks";
import { todo } from "node:test";

const  baseUrl = 'http://localhost:3001';

export const getAllTodos = async (): Promise<ITask[]> =>{
    const res = await fetch(`${baseUrl}/task`)
    const todos = await res.json()
return todos;
} 