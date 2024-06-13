'use client';

import React, { FormEvent, FormEventHandler, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Modal from './Modal';


const AddTask = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = (e) =>{
    e.preventDefault();
  }

  return (
    <div>
      <button className='btn btn-primary w-full' onClick={() => setModalOpen(true)}>
        Add New Task <AiOutlinePlus  size={18} className='ml-2'/>
      </button>

      <Modal modalOpen={modalOpen} setModalOpen ={setModalOpen}> 
        <form  onSubmit={handleSubmitNewTodo}>
          <h3 className='font-bold text-lg'>Add new Task</h3>
          <div className='modal-action'>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-full" />
          </div>
          <button type='submit' className='btn '>Submit</button>
        </form>
      </Modal>`
    </div>

  )
}

export default AddTask
