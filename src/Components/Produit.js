import React from 'react';
import { Link } from 'react-router-dom';

function Produit({id,titre,image,description,prix,panier,setPanier,priceID}) {

    
    const handleAddPanier = (id)=>{
        
        const produitExist = panier.find(produit =>  produit.id == id && produit.amout++)

       if(produitExist){
      
        const panierCopy = [...panier]
        let index = panierCopy.indexOf(produitExist)
        panierCopy.splice(index,1,produitExist)
        setPanier(panierCopy)
       
        //setPanier([panierCopy])
            //console.log(produitExist)
            /*const filtre = panier.filter(x => x.id != id)
            setPanier([...filtre,{id,titre,prix,amout:produitExist.amout+1}])*/
        }else{
           
            setPanier([...panier,{id,titre,prix,amout:1,priceID}])
        }
        
    }


    return (
        <div style={{border:'2px solid black',width:'14em',padding:'10px'}}>
          
            <img src={require(`../assets/imagesProduits/${image}`)} style={{width:'80%',display:'block',margin:'0 auto'}}/>
  
           <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                <span>{titre}</span>
                <p>{description}</p>
                <span>{prix}e</span>
                <Link to={`/productDetail/${id}`} style={{color:'blue'}}>Voir produit</Link>
                <button onClick={()=>handleAddPanier(id,titre,prix,priceID)}>Ajouter au panier</button>
           </div>
           
        </div>
    );
}

export default React.memo(Produit);


