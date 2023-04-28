import React from 'react'

export default function InputTodo() {
  return (
    <>
    <h1 className='text-center mt-5'>My Todo List</h1>
    <form className='d-flex'>
      <input type="text" className='form-control'/>
      <button className='btn btn-success'>Add</button>
    </form>
    </>
  )
}
