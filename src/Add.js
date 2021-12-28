import React from 'react';



const Add = (props) => {
	return(
		<>
		<h3>Add new a birthday reminder</h3>
        <form onSubmit = {props.submit}>
          <div className = 'addform' >
          <label>
           Name:
          </label>
          <input type="text" value = {props.newperson.name} className='add' name = 'name' onChange = {(e) => props.handleChange(e)}/>
          <label>
           Age:       
          </label>
          <input type="text" value = {props.newperson.age} className='add' name = 'age' onChange = {(e) => props.handleChange(e)}/>
          <label>
           Image:
          </label>
          <input type="text" value = {props.newperson.image} className='add' name = 'image' onChange = {(e) => props.handleChange(e)}/>
          </div>
          <button type ="submit">Submit</button>
        </form>
        </>
	);
}

export default Add;