import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Button1 = () => {
  return (
    
        <Link to="/demo"><button className="hidden lg:inline bg-white text-[#1233c1] text-sm hover:opacity-90 active:scale-95 transition-all w-40 md:h-11 rounded-md font-bold">
          Request a Demo
        </button>
    </Link> 
  )
}

export default Button1
