import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function ProduitDetail({produitsAll}) {


    let { id } = useParams();
    const produitDetail = produitsAll.find(produit =>  produit.id == id)

    return (
        <div>
            <span>{produitDetail.titre}</span>
            <p>{produitDetail.description}</p>
            <span>{produitDetail.prix}</span>

        </div>
    );
}

export default ProduitDetail;