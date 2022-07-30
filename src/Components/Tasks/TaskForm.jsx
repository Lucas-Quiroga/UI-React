import React, {useState} from 'react'

export default function TaskForm({addTask}) {

    const [userInput, setUserInput] = useState('')

    const handleOnChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(userInput.trim() !== ''){
            addTask(userInput)
            setUserInput('')
        }
    }

  return (
    <div style={{margin: 20}}>
      <form onSubmit = {handleSubmit} >
        <input type="text" value={userInput} onChange={handleOnChange} />
        <button style={{float: 'right'}}>Add task</button>
      </form>
    </div>
  )
}
