import React,{useState} from 'react'
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa6";

const Input = ({value, onChange, placeholder, label, type}) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }
  return (
    <div>
        <label className='text-[13px] text-slate-800'>{label}</label>
        <div className="input-box">
            <input
            type={type == "password" ? showPassword ? "text" : "password" : type}
            placeholder={placeholder}
            className='w-full bg-transparent outline-none'
            value={value}
            onChange={(e) => onChange(e)}
             />
        </div>
    </div>
  )
}

export default Input