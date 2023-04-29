import React, {useEffect, useState} from 'react'
// use effect helps make a fetch request to our restful APIs when this component is rendered
const ListTodos = () => {

  const [todos, setTodos] = useState([]);
const getTodos =async() => {
  try {
    // by default "fetch" makes a GET request so no need to specify unless otherwise e.g POST
    const response = await fetch("http://localhost:5000/todos")
    const jsonData = await response.json()
    
    // set the state to the json data coming from the fetch/DB
    setTodos(jsonData);
  } catch (err) {
    console.error(err.message)
  }
}


  useEffect(() => {
    getTodos();
  }, []); //empty array "[]" to stop it from infinite re-rendering

  console.log(todos)
  return (
    <>
    <table className="table mt-5 text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>

      
      {/* <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr> */}
      {todos.map(todo => (
        <tr key={todo.todo_id}>
          <td>{todo.description}</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr>
      ))}
    </tbody>
  </table>
    </>
  )
}

export default ListTodos;