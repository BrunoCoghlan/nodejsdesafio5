import { Router } from 'express'
import { findAll, findBy, findById } from '../controllers/c.joyas.js'

const joyas = (Router())
// ver ruta controllers/c.joyas.js
joyas.get('/', findAll)
joyas.get('/filtros', findBy)
joyas.get('/:id', findById)
export default joyas
