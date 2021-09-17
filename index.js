const express = require('express')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
    console.log(req.ip)
    res.send('OK')
})

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))