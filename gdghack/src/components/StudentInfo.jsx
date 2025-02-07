import { RiPhoneFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { FaBuilding } from "react-icons/fa6";
function StudentInfo() {
  return (
    <div className='flex flex-col gap-4 ' >
      <h1 className='text-xl font-semibold '>Bachferrag Bouchra</h1>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2  items-center">
          <RiPhoneFill/>
          <h3 className='font-semibold text-sm'> 07777777 </h3>
        </div>
        <div className="flex gap-2  items-center">
          <IoMdMail/>
          <h3 className='font-semibold text-sm'> mb_bachfferrag@esi.dz </h3>
        </div>
        <div className="flex gap-2  items-center">
          <FaBuilding/>
          <h3 className='font-semibold text-sm'> Ecole nationale sup </h3>
        </div>
      </div>
    </div>
  )
}

export default StudentInfo