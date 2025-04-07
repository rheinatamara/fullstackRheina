import React from 'react'
import { Icon } from './Icon';
import Heart from './canvas/icons/HeartIcon';
function Footer() {
  return (
    <div className=' text-center text-white/60 pb-14'>
      <p>Coded with <Icon component={Heart} className=" mb-1.5 "></Icon> by <a href="https://www.instagram.com/frontendrheina" target="_blank" className='underline underline-offset-2'>@frontendrheina</a></p> 
    </div>
  )
}

export default Footer