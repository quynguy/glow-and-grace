const express = require('express');
const router = express.Router();

fetch('/cart', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        id: '1',
        name: 'Product 1',
        price: 10,
    }),
})
.then(response => response.json())
.then(data => {
    console.log(data.message);
    console.log(data.cart);   
})
.catch(error => {
    console.error('Error:', error);
});


module.exports = router;