import { chooseColor } from "./util/chooseColor";
import { sliceLetters } from "./util/sliceLetters";

interface feedType  {
          title: string;
          feedUrl: string;
          siteUrl: string;
          description: string;
          format: string
}

type DropType = {title:string, feed: feedType[],
  index:number, toggleDropdown: (num:number) => void,
  dropOpen: number[]
}

const Dropdown = ({title,feed,index, toggleDropdown, dropOpen}:DropType) => {

  const unic = feed.filter((item,index,arr) => {
    return index === arr.findIndex(obj => obj.title === item.title)
  })


  const titleCount = feed.reduce((acc, item) => {
  acc[item.title] = (acc[item.title] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

  return (
    <div className="flex flex-col w-65">
        <div onClick={() => toggleDropdown(index)} className='flex flex-row items-center justify-between w-59 cursor-pointer'>
        <div  className='flex flex-row items-center '>
          <div className={` w-[10px] h-[10px] rounded-full ${chooseColor(sliceLetters(title,2))} mr-2`}></div>
        <h3 className='font-semibold text-gray-500'>{title}</h3>
        </div>
        <div><p className='text-gray-500'>{feed.length}</p></div>
        </div>
       <ul className={`${dropOpen[0] == index || dropOpen[1] == index ? 'flex flex-col': 'hidden'} p-2`}>
          {
            unic.map((item, index) => (
              <li key={index} className='flex flex-row items-center  my-2 cursor-pointer'>
                 <div className={` text-center w-[27px] h-[22px] rounded-sm ${chooseColor(sliceLetters(item.title,1))} mr-2`}><p className='relative bottom-[.1em] text-gray-200'>{sliceLetters(item.title,1)}</p></div>
                 <div className='flex flex-row justify-between w-60'>
                  <h3 className='text-gray-500'>{item.title}</h3> <p className='text-gray-400'>{titleCount[item.title]}</p>
                 </div>
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default Dropdown