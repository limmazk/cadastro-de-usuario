import express from 'express'
import cors from 'cors'
import { PrismaClient } from './generated/prisma/index.js'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors()) //se for projeto importante, é preciso do endereço dentro do cors!!!


app.post('/usuarios', async (req, res) => {

    await prisma.user.create({
        data: {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }
    })


    res.status(201).json(req.body)
})

app.get('/usuarios', async (req, res) => {
    let users = []


    if(req.query) {
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                age: req.query.age
            }
    })
    } else {
        users = await prisma.user.findMany()
    }
    
    
    res.status(200).json(users)
})

app.put('/usuarios/:id', async (req, res) => {

    await prisma.user.uptade({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }
    })


    res.status(201).json(req.body)
})

app.delete('/usuarios/:id', async (req, res) => {
    try {
        console.log('ID recebido para deletar:', req.params.id)
        
        const deletedUser = await prisma.user.delete({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({message: 'Usuário deletado com sucesso'})
    } catch (error) {
        console.log('Erro ao deletar usuário:', error)
        res.status(404).json({error: 'Usuário não encontrado'})
    }
})

app.listen(3000)