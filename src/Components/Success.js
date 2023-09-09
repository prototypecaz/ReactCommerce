import React from 'react';

function Success(props) {


    fetch("http://www.guillaume.com/react-commerce/back-end/php/test.php?videPanier=true",{credentials: 'include'})
console.log('success')
    return (
        <div>
            Votre paiement a bien était pris en compte
        </div>
    );
}

export default React.memo(Success);