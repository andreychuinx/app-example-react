import React, { useState } from 'react'

export default function TodoList() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    setItems(prevData => {
      return [input, ...prevData]
    });
    setInput("")
  }
  function onRemoveItem(id) {
    setItems(prevData => {
      return prevData.filter((item, idx) => {
        return idx !== id
      })
    })
  }
  console.log(items)
  return (
    <div className="todolist">
      <div className="heading">
        <h1 className="title">To-Do List</h1>
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => {setInput(e.target.value)}}
      />
      <button
        onClick={addItem}
      >
        Add
      </button>
      <div className="items">
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>
              <span style={{float: 'left'}}>{item}</span>
              <span
              style={{float: 'right'}}
              onClick={() => {onRemoveItem(idx)}}
              >x</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}