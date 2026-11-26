import React, { useRef, useState } from 'react'
import '../assets/css/todoEditor.css'

const TodoEditor = ({onCreate}) => {

  const [content, setContent] = useState('');
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  const onKeyDonw = (e) => {
    if(e.keyCode == 13) {
      onSubmit()
    }
  }

  const onSubmit = () => {
    if(content === '') {
      inputRef.current.focus()
      return
    }
    onCreate(content)
    setContent('')
  }

  return (
    <div className='todo-editor'>
      <input 
      type="text" 
      ref={inputRef}
      value={content}
      onKeyDown={onKeyDonw}
      onChange={onChangeContent}
      placeholder='새로운 Todo...'
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default TodoEditor