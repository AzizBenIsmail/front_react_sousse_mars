import React from 'react'
import './Test.css';
export default function Test() {
    //logic
    //1 Constante
    const name = "fawzi";
    const age = 30;
    const element = <h5>hello {name}, your age is {age}</h5>

    //2 Objet
     const user = {
        name : "mohamed",
        age : 30,
        email : "mohamed@example.com",
     }

    const inlineStyle = {
    color: "#2ecc71", //vert
    fontSize: "26px", //size
    };  

     //function
     function greet(name){
        return "hello " + name;
     }

    function calculateAge(birthYear){
        const currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    }

    function getUserInfo(user){ //user est un objet
        return "Name: " + user.name + ", Age: " + user.age + ", Email: " + user.email;
    }

    //tableau
    const numbers = [1, 2, 3, 4, 5]; //tableau de nombre
    const fruits = ["apple", "banana", "orange"]; //tableau de string
    const mixed = [1, "hello", true, {name: "fawzi"}, [1, 2, 3]]; //tableau mixte

    //liste objet
    const usersList = [
        {name : "mohamed", age : 30, email : "mohamed@example.com"},
        {name : "fawzi", age : 25, email : "fawzi@example.com"},
        {name : "ahmed", age : 35, email : "ahmed@example.com"},
        {name : "sara", age : 28}
    ];


  return (
    <div>
      {/* vue */}

    {/* 1 */}  
    <h2 style={{"color" : "red"}}>Test Component</h2>       {/* style => injection css */}   
     hello <br/>
    {name}
    {age > 18 ? " you age is " + age + " and you are an adult" : "you age is " + age + " and you are a minor"}
    {element}

    {/* 2 */}
    <h2 className='bleu' >User Information</h2> {/* style => normal */}   
    <p>Name: {user.name}</p>
    <p>Age: {user.age}</p>
    <p>Email: {user.email}</p>

    {/* 3 */}
    <h2 style={inlineStyle}>Functions</h2>
    <h5>Greet Function</h5>
    <p>{greet("fawzi")}</p>

    <h5>Calculate Age Function</h5>
    <p>Your age is: {calculateAge(1990)}</p>

    <h5>User Info Function</h5>
    <p>{getUserInfo(user)}</p>

    {/* 4 */}
    <h2 style={{"color" : "red"}}>Numbers</h2>
    <ul>
        {numbers.map((number, index) => (
            <li key={index}>{number}</li>
        ))}
    </ul>
    
    <h2 style={{"color" : "red"}}>Fruits</h2>
    <ul>
        {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
        ))}
    </ul>

    <h2 style={{"color" : "red"}}>Mixed</h2>
    <ul>    
        {mixed.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li>
        ))}
    </ul>

    {/* 5 */}
    <h2 style={{"color" : "red"}}>Users List</h2>
    <ul>
        {usersList.map((user, index) => (
            <li key={index}>{user.name} - {user.age} - {user.email ? user.email : "email not provided"}</li>
        ))}
    </ul>


    </div>
  )
}
