import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import _ from 'lodash'

const PORT = 7000
const app = express()

const user = {
    'login': 'admin',
    "password": 'root'
}

app.use(cors())
app.use(express.json())
app.use('/login', async (req, res) => {
    const {login, password} = req.body
    const candidate = {'login': login, "password": password}
    res.send(_.isEqual(candidate, user) ? candidate : false)
});

const startApp = async () => {
    try {
        app.listen(PORT,() => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
startApp()
