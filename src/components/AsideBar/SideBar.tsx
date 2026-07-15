import { useState } from 'react'
import Data from '../../data/sample-feeds.json'
import Dropdown from '../dropdown/Dropdown'
import { LiaNewspaper } from "react-icons/lia";
import { CiBookmark } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
const SideBar = () => {
  const categoriesData = Data.categories
  const [dropOpen,setDropOpen] = useState<number[]>([0,1])


  const toggleDropdown = (num:number) => {

    setDropOpen(prev => {

      
      if(prev.includes(num)) {
        return prev.filter(item => item != num)
      }

      if(prev.length < 2) {
        return [...prev,num]
      }

      return [prev[1], num]
    })

  }

  return (
    <div className='bg-bg-secondary border border-border w-68 h-[100vhd] py-4 '>
        <div className='flex flex-col p-4 gap-y-8 text-gray-500'>

          <div className='flex flex-row items-center justify-between px-2'> <div className='flex flex-row '><LiaNewspaper size={25} className='text-gray-500' /> <h2 className='px-4 font-semibold'>All Items</h2></div><p>47</p></div>
        <div className='flex flex-row items-center justify-between px-2'><div className='flex flex-row '><CiBookmark size={25} className='text-gray-500' /> <h2 className='px-4 font-semibold'>Saved</h2></div> <p>12</p></div>
        <div className='bg-gray-400 w-[93%] h-[1px] relative left-2 '></div>
              </div>
        
        <div className='scale-85  relative -top-6'>
          <h2 className='text-gray-400 mb-5 text-[1.2em] uppercase'>Categories</h2>

          {
          categoriesData.map((item, index) => (
            <Dropdown title={item.name} feed={item.feeds} index={index} 
            dropOpen={dropOpen} toggleDropdown={toggleDropdown} />
          ))
        }
        </div>
           <div className='bg-gray-400 w-[93%] h-[1px] relative left-2 '></div>
         <p className='flex flex-row items-center my-5 ml-4'><CiCircleCheck size={20} className='text-green-400 mr-4'/> All Feeds healthy</p>
    </div>
  )
}

export default SideBar