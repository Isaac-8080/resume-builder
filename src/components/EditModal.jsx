import { useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg'
import EditResumeForm from './EditResumeForm'

const EditModal = ({template, handleEditForm}) => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const openModal = () => setIsModalOpen(true)

  const closeModal = () => setIsModalOpen(false)

  return (
    <>

      <button onClick={openModal} className="flex items-center justify-center gap-1 bg-darkBg py-3 px-5 w-full md:w-fit">
        
        <BiPlus className='text-whiteText text-xl' />

        <span className='text-whiteText'>Edit</span>

      </button>

      {
      isModalOpen && (
        <dialog open id="my_modal_5" className="modal modal-middle">

          <div className='h-screen w-full bg-white absolute opacity-90'></div>

          <div className="modal-box">

            <div className='flex items-center justify-between'>

              <h3 className="font-bold text-2xl">Update Infomations</h3>

              <CgClose onClick={closeModal} className='text-lg cursor-pointer' />

            </div>

            <div className="modal-action">

              <EditResumeForm handleEditForm={handleEditForm} template={template} closeModal={closeModal} />

            </div>

          </div>

        </dialog>
      )
      }

    </>
  )
}

export default EditModal
