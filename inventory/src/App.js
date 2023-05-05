import React from "react";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Info/>
      <AddItem/>
      <ButtonState/>
      
    
 
      
   
    </div>
  );
  }
  function AddItem(props){
    const value=props.text
      
      
      return(
        <form>
          <label for="text-form">Name:</label>
          <input type="text" value={value} id="text-form"/>
          <label for="age-form">Age:</label>
          <input type="age" id="age-form"/>
          <label for="email-form">Email:</label>
          <input type="email" id="email-form"/>
          <label for="password-form">Password:</label>
          <input type="password" id="password-form"/>
          <p>{props.number}</p>
          <button>Submit</button>
    
        </form>
      );
    }
    AddItem.defaultProps={
      number:3,
    }
    function Info(){
      const title="This is my title.";
      
      return(
        <div>
          <h0>{title}</h0>
          <h1>Inventory System</h1>
          <p>Manage your stuff</p>
        </div>
      );
    }
    function ButtonState(){
      const[title,setTitle]=useState("");
      const[count,setCount]=useState(0);
      const updateTitleClicked=()=>{
        setTitle("We now have a title!");
      }
      const updateCounterClicked=()=>{
        setCount(count +1);
      }
      return (
       
    
        <div>
          <Data/>
          <p>Title:{title}</p>
          <p>Counter:{count}</p>
          <button onClick={updateTitleClicked}>Update Title</button>
          <button onClick={updateCounterClicked}>Update Counter</button>
        </div>
      )
    }
    function Data(props){
      return(
        <div>
          <p>Title:{props.title}</p>
          <p>Count:{props.count}</p>
        </div>
      )
    }

export default App;
