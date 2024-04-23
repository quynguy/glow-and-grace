const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

router.post("/cart/add", (req, res) => {
    const { id, name, price } = req.body;
    const quantity = 1;
    const item = { id, name, price, quantity };
    cart.push(item);
    res.json({ message: 'Product added to cart', cart });
});

module.exports = router; 