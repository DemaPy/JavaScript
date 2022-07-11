const express = require('express')
const app = express()
const path = require('path')
const {v4} = require('uuid')



let CONTACTS =[
    {id: 1, name: 'Dema', value: '+48728708675', marked: false}
]

app.use(express.json())


//GET
app.get('/api/contacts', (req, res) => {
    setTimeout(() => {
        res.status(200).json(CONTACTS)
    },2000)
})

//POST
app.post('/api/contacts', (req, res) => {
    const contact = {...req.body, id: v4(), marked: false}
    CONTACTS.push(contact)
    res.status(201).json(contact)
})

//DELETE
app.delete('/api/contacts/:id', (req, res) => {
    CONTACTS = CONTACTS.filter(c => c.id !== req.params.id)
    res.status(200).json({message: 'Contacts has been updated.'})
})

//PUT
app.put('/api/contacts/:id', (req, res) => {
    const idx = CONTACTS.findIndex(c => c.id == req.params.id)
    CONTACTS[idx] = req.body
    res.json(CONTACTS[idx])
})


app.use(express.static(path.resolve(__dirname, 'client')))
app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})
app.listen(3000, () => console.log('Server has been started...'))
