import React, { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import Panier from './Panier';
import ProduitDetail from './ProduitDetail';
import ProduitsAll from './ProduitsAll';
import Success from './Success';



function Main({produitsAll}) {
    
    const [panier, setPanier] = useState([])
    const [resultStripe,setResultStripe] = useState(false)



    useEffect(()=>{



            fetch("http://www.guillaume.com/react-commerce/back-end/php/test.php?videPanier=false",{
                credentials: 'include'
            }) 
            .then(function(response) {
                response.json().then( 
                    function(themes) {
              
                            setPanier(themes)
                        })
                });
        
       
       

    },[])


    useEffect(() =>{

        fetch("http://www.guillaume.com/react-commerce/back-end/php/panier.php?panier="+JSON.stringify(panier),{
            method: 'GET',
            credentials: 'include'
          }) 
     
},[panier])



 console.log(resultStripe)

    return (
        <main style={{ display:'flex',flexGrow: 1}}>

            <Panier panier={panier} setPanier={setPanier} setResultStripe={setResultStripe}/>
            <Routes>
                
                    <Route path="/" exact element={<ProduitsAll panier={panier} setPanier={setPanier} produitsAll={produitsAll}/>}></Route> 
                    <Route path="/productDetail/:id"   element={<ProduitDetail produitsAll={produitsAll}/>}></Route>
                    {
                      resultStripe &&  <Route path="/success"   element={<Success/>}></Route>
                    }
                   
                    
                  
            </Routes>
            
        </main>
    );
}

export default React.memo(Main);