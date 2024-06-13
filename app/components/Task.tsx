'use client'

import { ITask } from '@/types/tasks'
import React, { FormEventHandler, useState } from 'react'
import { FiEdit } from "react-icons/fi";
import { FaTrash } from 'react-icons/fa';
import Modal from './Modal';
import { useRouter } from 'next/navigation';
import { deleteTodo, editTodo } from '@/api';

interface TaskProps{
    task: ITask
}
const Task: React.FC <TaskProps>  = ({task}) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false)
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false)

  const [taskToEdit, setTaskToEdit] = useState<string>(task.text)


  const handleSubmitEditTodo : FormEventHandler<HTMLFormElement> =async (e) =>{
    e.preventDefault();
    await editTodo({
      id:task.id,
      text: taskToEdit,
    });
    setTaskToEdit("");
    setOpenModalEdit(false);
    router.refresh();
  }

  const handleDeleteTask = async (id :string) => {
    await deleteTodo(id);
    setOpenModalDelete(false)
    router.refresh()
  }


  return (
    (
            
        <tr key={task.id}>
        <td className='w-full'>{task.text}</td>
        <td className='flex gap-6'>
          <FiEdit 
            onClick={() =>setOpenModalEdit(true)}
            size={23}
            className='text-blue-500 cursor-pointer'
          />

            <Modal modalOpen={openModalEdit} setModalOpen ={setOpenModalEdit}> 
              <form  onSubmit={handleSubmitEditTodo}>
                <h3 className='font-bold text-lg'>Edit Task</h3>
                <div className='modal-action'>
                <input 
                  value={taskToEdit}
                  onChange={e =>setTaskToEdit(e.target.value)} 
                  type="text"
                  placeholder="Type here" 
                  className="input input-bordered w-full " 
                />
                </div>
              <button type='submit' className='btn m-2'>Submit</button>
              </form>
            </Modal>

          <FaTrash 
            onClick={() => setOpenModalDelete(true)}
            size={23}
            className='text-red-500 cursor-pointer'
          />

            <Modal modalOpen={openModalDelete} setModalOpen ={setOpenModalDelete}> 
              <h3 className='text-lg'>Are you sure, you want to delete this Task?</h3>
              <div className='modal-action'>
                <button 
                  onClick={() => handleDeleteTask(task.id)}
                  className='btn'
                >
                  Yes
                </button>
                
              </div>
            </Modal>

        </td>
      </tr>
        )
  )
}

export default Task
