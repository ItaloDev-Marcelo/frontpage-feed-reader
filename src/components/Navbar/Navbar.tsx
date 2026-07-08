import Logo from '../../assets/logo.png'
import OptionBtn from './btn/OptionBtn'
import { CiSearch } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className='p-5 xl:p-4 flex gap-4 xl:gap-0 justify-center flex-col xl:flex-row items-center xl:justify-between bg-bg-secondary border-b-1 border-border font-sans'>
        <div className='flex flex-row items-center justify-between xl:justify-baseline gap-2 w-full xl:w-auto '>
           <div className='flex flex-row gap-2 '>
          <a href='index.html'>
          <div className='bg-[#2E64D6] rounded-sm w-6.25 h-6.25'>
              <img src={Logo} alt='frontpage' />
          </div>
        </a>
        <p className='text-black'><strong>Frontpage</strong></p>
        </div>
          <OptionBtn/>
        </div>



        <div className='flex flex-row items-center justify-between gap-x-4  w-full xl:w-auto relative'>


           <div className='flex flex-row w-min-20 w-max-60 h-10  px-1.5 py-1 rounded-md  bg-bg-tertiary items-center justify-between border-1 border-border'>

              <div className='flex flex-row items-center gap-2'>
              <div className='text-gray-400'>
                <CiSearch size={20} />
              </div>
              <input type='search' className='w-30 text-gray-700 text-[0.95em]' placeholder='Search article...'/></div>
              <button className='bg-[#f8f9fa] btn scale-70'>
                <div><p className='text-[1.4em]'><strong>/</strong></p></div>
              </button>
           </div>


           <button className='btn rounded-md w-10 h-10 relative -left-6 xl:left-0 '><div> <FiPlus size={15}/></div></button>


           <div className='text-center bg-[#6769C9] w-10 p-2 rounded-full text-white'>
            <p className='font-bold'>MS</p>
           </div>

        </div>
    </div>
  )
}

export default Navbar