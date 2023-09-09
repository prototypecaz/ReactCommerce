import React, { useEffect, useMemo, useState } from 'react';
import getStripe from '../stripe/getStripe';
import '../App.css';


const Panier = ({panier,setPanier}) => {
   

  console.log(panier)

    const [panierCopy,setPanierCopy] = useState([...panier])

  

    const total = panier.reduce(
        (accumulator, currentValue) => accumulator + (parseInt(currentValue.prix)*parseInt(currentValue.amout)),
       0
      )

    useEffect(()=>{
        setPanierCopy([...panier])
    },[panier])
    
    const handleDelete = (id)=>{

        const newPanier = panierCopy.filter(x => x.id != id)
        setPanier(newPanier)
        
    }

   

    const handleChangeQuantity = (e,id)=>{

        var result = [...panierCopy]
        result = result.map((x) => { //<- use map on result to find element to update using id
            if (x.id === id) x.amout = parseInt(e.target.value);
            return x;
        });

        setPanierCopy(result); 
        setPanier(result)

    }

    async function handleCheckout() {


        const items = panier.map(x => {

            let obj = {}
            obj['price'] = x.priceID
            obj['quantity'] = x.amout
               
            return obj
            
        })

        

       
        const stripe = await getStripe();
       
        const { error } = await stripe.redirectToCheckout({
            lineItems: items,
          mode: 'payment',
          successUrl: `http://localhost:3000/success`,
          cancelUrl: `http://localhost:3000/error`,
          customerEmail: 'customer@email.com',
          
        });
        console.warn(error.message);
          
      }

    

    return (

    
        <div style={{backgroundColor:'#9ee37d',width:'30%',padding:'0 15px'}}>
          
            {panier.length > 0 && 
            <>
            <table style={{width:'100%'}}>
                <thead>
                <tr>
                    <th colSpan={1}></th>
                    <th colSpan={2} style={{textAlign:'left'}}>Produit</th>
                    <th colSpan={1}>Prix</th>
                    <th colSpan={1}>Quantité</th>
                </tr>
                </thead>
                <tbody>
    
               
           {panierCopy.map(x => {
            {
                return  <tr key={x.id} style={{padding:'200px 100px'}}>
                <td> 
                    <button style={{fontSize:'1em',backgroundColor:'#9ee37d',border:'none',fontWeight:'bold',cursor:'pointer'}} onClick={() => {handleDelete(x.id)}}>X</button>
                </td>
                <td colSpan={2} >
                    {x.titre}
                </td>
                <td style={{textAlign:'center'}}> 
                    {x.prix}e
                </td>
                <td style={{textAlign:'center'}}>
                <select value={x.amout} onChange={(e)=>{handleChangeQuantity(e,x.id)}}>
                        <option value={x.amout}>{x.amout}</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                    </select>
                </td>
               
            </tr>
            
            }
           })}

                <tr>
                <td  colSpan={4}></td>
                    <td  style={{textAlign:'center',fontWeight:'bold'}}>Total: {total}</td>
                </tr>
                </tbody>
            </table>

<button onClick={handleCheckout} style={{marginTop:'20px',fontSize:'1em',cursor:'pointer',padding:'3px 20px',backgroundColor:'#00b4d8',border:'1px solid white'}}>Payer</button></>

             
            }
        </div>
    );
}

export default React.memo(Panier);