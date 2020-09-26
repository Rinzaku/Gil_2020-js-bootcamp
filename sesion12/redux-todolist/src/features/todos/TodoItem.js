import React from 'react'

const TodoItem = ({ onClickItem, completed, text }) => {
  return(
    <>
      <li
        onClick={onClickItem}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }

        }
      >{text}</li>
    </>
  )
}

export default TodoItem