const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')
const Veiculo = require('./models/Veiculos')
const Situacao = require('./models/Situacao')

const app  = express()


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

conn.sync({force:false}).then(async ()=>{
    app.listen(3000, () => {
        console.log('http://localhost:3000')
    })
})

app.get('/', (req, res)=>{

    res.render('home')
})

app.get('/veiculos/create', async (req, res) =>{
    const situacoes = await Situacao.findAll({raw:true})
    res.render('veiculosform', {situacoes})
})