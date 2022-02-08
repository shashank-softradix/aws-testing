require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('working healthy.');
})

app.listen(process.env.PORT, () => {
    console.log('server is running on port:', process.env.PORT);
})