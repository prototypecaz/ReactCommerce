import React, { useState } from 'react';
import logostarbuck from "../assets/images/logostarbuck.png"


function Header({produitsAll,setProduitsAllCopy}) {


 const [recherche,setRecherche] = useState('')
   


const handleChange = (e)=>{

    let produitRecherche = produitsAll.filter(x => (x.titre.toLowerCase().includes(e.target.value)))
    
    if(produitRecherche){
        setProduitsAllCopy(produitRecherche)
    }
}



    return (
        <header style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'10px 20px',backgroundColor:'lightgrey',flexWrap:'wrap'}}>
           
            <div style={{flexBasis:'25%'}}>
                <img src={logostarbuck} style={{padding:'10px',width:'19%'}}/>
            </div>

            <div style={{flexBasis:'45%'}}>
                <nav style={{display:'flex',gap:'30px',fontSize:'1.4em',justifyContent:'center'}}>
                    <a href="" style={{color:'black'}}>Accueil</a>
                    <a href="" style={{color:'black'}}>Produits</a>
                    <a href="" style={{color:'black'}}>A propos</a>
                    <a href="" style={{color:'black'}}>Contact</a>
                </nav>
            </div>

            <div style={{flexBasis:'25%',textAlign:'center'}}>
                <input placeholder='Recherchez' onChange={handleChange} style={{width:'70%',border:'none',borderBottom:'2px solid black',backgroundColor:'lightgrey',fontSize:'1.2em',color:'black',outline:'none'}}/>
            </div>

        </header>
    );
}

export default Header;