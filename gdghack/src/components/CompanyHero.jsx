import coverpic from '../assets/coverpic.jpg'
import userpic from '../assets/userpic.jpg'

function CompanyHero() {
    return (
        <div className='relative flex justify-center items-center'>
            <img src={coverpic} alt="cover picture" className='object-cover w-[98%] h-40 rounded-md ' />
            <div className='absolute -bottom-20 left-20 flex flex-col gap-3 items-center justify-center'>
            <div className='relative'>
                <img src={userpic} alt="picture" className='w-36 h-36 rounded-full border-4  border-white' />
                <div className='absolute bottom-0 right-4 w-3 h-3 bg-green-400 rounded-full'></div>
            </div>
            </div>
        </div>
    )
}

export default CompanyHero