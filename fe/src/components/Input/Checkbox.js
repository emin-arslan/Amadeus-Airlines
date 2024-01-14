import React from 'react'

const Checkbox = ({isOneWay, setIsOneWay}) => {
  return (
    <label  className='flex items-center justify-start w-fit h-fit select-none hover:cursor-pointer font-semibold'>
      <input name='onewayCheckbox' onChange={()=> {setIsOneWay(!isOneWay) }} checked = {isOneWay} type='checkbox' className='mr-2 h-4 w-4 active:bg-red-400 hover:cursor-pointer'></input>
      Tek yönlü uçuş
    </label>
  )
}

export default Checkbox
