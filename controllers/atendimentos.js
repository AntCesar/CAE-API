module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('[GET] - Você está acessando a rota /atendimentos!'))

    app.post('/atendimentos', (req, res) => {

        console.log(req.body)
        res.send('[POST] - Você está acessando a rota /atendimentos!')
    } )
}