const express = require ('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const morgan = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 5000

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use("/auth", authRouter)

app.get('/', (req, res, next) => {
    res.send('Hello from EXPRESS SERVER');
})

const start = async () => {
    try {
        await mongoose.connect ('mongodb+srv://yerkow:f3rn3n777@cluster0.blupecf.mongodb.net/auth_roles?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()