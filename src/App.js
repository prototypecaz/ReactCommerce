
import { useEffect, useState } from 'react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Success from './Components/Success';

function App() {

  const [produitsAll,setProduitsAll] = useState({})
  const [produitsAllCopy,setProduitsAllCopy] = useState({})
  const [loading,setLoading] = useState(true)



  useEffect(()=>{
    fetch("http://www.guillaume.com/react-commerce/back-end/php/loginUsers.php")
    .then(function(response) {
        response.json().then( // Renvoie un tableau associatif manipulable par javascript (format json)
            function(themes) {
            
                  setProduitsAll(themes)
                  setProduitsAllCopy(themes)
                  setLoading(false)

                  
            })});
},[])


return(
  !loading && 
  <>
    <Header produitsAll={produitsAll} setProduitsAllCopy={setProduitsAllCopy}/>
    <Main produitsAll={produitsAllCopy}/>
  </>


)

}
export default React.memo(App);





  /*const handleSubmit = (e)=>{
    e.preventDefault();
    fetch("http://localhost:8000/php/loginUsers.php")
        .then(function(response) {
            response.text().then( // Renvoie un tableau associatif manipulable par javascript (format json)
                function(themes) {
                   
                      console.log(themes)
                })});
  }

  return (
     <div className="App">
            <form action="http://localhost:8000/php/loginUsers.php" method="post" onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name"/>
                <br />
                <button type="submit" >Submit</button>
            </form>
        </div>
  );
}*/