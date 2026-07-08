
const OptionBtn = () => {
  return (
    <div className="flex flex-row   gap-1 xl:gap-2 scale-80 xl:scale-100">
        <button className='btn h-[35px] btn-soft font-bold '>Feed</button>
        <button className='btn h-[35px] text-gray-400  btn-ghost '>Digest</button>
        <button className='btn h-[35px]  text-gray-400 btn-ghost '>Discover</button>
    </div>
  )
}

export default OptionBtn