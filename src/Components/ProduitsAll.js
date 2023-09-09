import React, { useEffect, useState } from 'react';
import Produit from './Produit';

function ProduitsAll({produitsAll,panier,setPanier}) {

    
    return (
        <div style={{width:'70%'}}>
            <div style={{display:'flex',gap:'2em',justifyContent:'center',flexWrap:'wrap',padding:'30px'}} >
            {produitsAll.map(produit => {
                
                    return <Produit panier={panier} 
                    setPanier={setPanier} 
                    key={produit.id} 
                    id={produit.id} 
                    titre={produit.titre} 
                    image={produit.image}
                    description={produit.description} 
                    priceID={produit.priceID}
                    prix={produit.prix}/>
                })}
            </div>
               
        </div>
    );
}

export default ProduitsAll;