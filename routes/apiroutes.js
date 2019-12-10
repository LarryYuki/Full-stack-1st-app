const express = require('express')
const router = express.Router();

const Message = {
    text: "this was sent from our apps backend",
    sender: "fullstac developer"
}

router.get('/', (request, result) => {
    console.log('our server was hit');
    result.send(Message);
})

module.exports = router;