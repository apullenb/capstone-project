const router = require('express').Router();
const authorization = require('../../utils/authorization');
const service = require('../Users/userService')


router
.get('/', authorization, async (req, res) => { 

    try {
        const user = await service.getUserDash(req.app.get('db'), req.user)
       
       res.json(user)
       console.log(user)

    } catch (err) {
        console.error(err.message);
        res.status(500).json('server error');
        
    }
})
module.exports = router;