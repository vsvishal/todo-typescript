import React from 'react'
import "./style.css";

interface Props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>
}

const InputField = ({todo, setTodo}: Props) => {
  return (
    <form className="input">
        <input type="text" placeholder='Enter a task' className='input__box'
          onChange={(e) => e.target.value}
        />
        <button className='input_submit' type='submit'>
          Go
        </button>
    </form>
  )
}

export default InputField