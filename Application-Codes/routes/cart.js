// Product page route
const express = require('express');
const router = express.Router();

router.get("/cart/:id", (req, res) => {
    try {
        const isAuthenticated = req.session.checkID ? true : false;
        const username = isAuthenticated ? req.session.checkID.username : null;
        res.render('cart', { isAuthenticated: isAuthenticated, username: username });
    } catch (error) {
        console.error('Error rendering product page:', error);
        res.status(500).send('Error rendering product page. Please try again later.');
    }
});




module.exports = router;