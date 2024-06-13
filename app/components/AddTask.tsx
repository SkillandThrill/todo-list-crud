'use client';

import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Modal from './modal'
const AddTask = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <div>
      <button className='btn btn-primary w-full' onClick={() => setModalOpen(true)}>
        Add New Task <AiOutlinePlus  size={18} className='ml-2'/>
      </button>

      <Modal modalOpen={modalOpen} setModalOpen ={setModalOpen} />
    </div>

  )
}

export default AddTask
