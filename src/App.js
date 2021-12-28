import React, { useState, useEffect } from 'react';
import data from './data';
import List from './List';
import Add from './Add';
function App() {
  const [isADD, setAdd] = useState(false);
  const [datas, setDatas] = useState(data)
  const [newperson, setNewperson] = useState({
    id: null,
    name: "",
    age: "",
    image: "",
  });
  const clear = () => {
    setDatas([])
  }
  const handleChange = (e) => {
    const prop =  e.target.name;
    const val = e.target.value;
    setNewperson({
      ...newperson, 
      [prop]: val 
    });
  }
  let sub = 0;
  const updatePerson = () => {
    if(datas.length===0){
      setNewperson({
        ...newperson, 
        id: 0
      });
    }else{
      setNewperson({
        ...newperson, 
        id: datas[datas.length-1].id+1
      });  
    }
    
  }
  const submit = (e) => {
    e.preventDefault();
    updatePerson();
    console.log(newperson);
  }
  useEffect(() => {
    if(newperson.id !== null){
      setDatas([...datas,newperson]);
      console.log("datas1")
    }
  },[newperson.id]);

  useEffect(() => {
    setNewperson({
        ...newperson,
        id: null, 
        name: "",
        age: "",
        image: "",
      });
    setAdd(false);
    console.log("datas2");
    console.log(datas)
  },[datas])
  const add = () => {
    setAdd(true);
  }
  const finish = (person) => {
    const tmp = datas.indexOf(person)
    const ret = datas.slice(0,tmp).concat(datas.slice(tmp+1,datas.length));
    setDatas(ret);
  }
  return(
    <>
      <main>
        <section className = "container">
        {!isADD?

                 <>
                  <h3>{datas.length} birthdays reminder</h3>
                  {datas.map((person, index) => {
                    return(<List key = {index} person = {person} finishh={finish}/>);
                  })}
                  <button onClick = {add}>
                    add a new birthday reminder
                  </button>
                  <button onClick = {clear}>
                    clear all
                  </button>
                  </>
              : <Add newperson ={newperson} handleChange = {handleChange} submit = {submit}/>
          } 
        </section> 
      </main>
    </>
  );
}

export default App;
