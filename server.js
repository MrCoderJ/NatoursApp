const dotenv = require('dotenv')
const app = require('./app')

console.log(process.env)

const port = process.env.PORT || 3001

app.listen(port, ()=>{
    console.log(`Server started at ${port}`)
})