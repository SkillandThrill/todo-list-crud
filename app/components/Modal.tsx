import React from 'react'

interface ModalProps{
    modalOpen : boolean
    setModalOpen: (open :boolean) => boolean;
}


//  className={`modal ${modalOpen ? "modal-open" : ""}`}
// onClick={() => setModalOpen(false)}
const Modal : React.FC<ModalProps> = ({modalOpen, setModalOpen}) => {
  return (
    <div className='modal modal-open'>
        <div className='modal-box relative'>
            <label className=''>
            ✕
            </label>
            <h3>
                Congratulation random internet user
            </h3>
            <p className='py-4'> 
                You have been selected for a chance
            </p>
        </div>
    </div>
  )
}

export default Modal
