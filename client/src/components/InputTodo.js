import React, {useState} from 'react'

 const  InputTodo =() =>{

  const [description, setDescription] = useState("");


  // handle form submission
  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      // send a request to the api
      const body = {description};
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        //stringify the data coming from the body
        body: JSON.stringify(body)
      });

      // redirect to the home page or refresh and show changes
     window.location = "/";
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <>
    <h1 className='text-center mt-5'>My Todo List</h1>
    <form className='d-flex mt-5' onSubmit={onSubmitForm}>
      {/* set and change the state value */}
      <input type="text" className='form-control' 
      value={description} 
      onChange={e => setDescription(e.target.value)}
      />
      <button className='btn btn-success'>Add</button>
    </form>
    </>
  )
}

export default  InputTodo;;
