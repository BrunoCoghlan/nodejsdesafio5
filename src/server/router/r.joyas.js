import { Router } from 'express'
import { findAll, findBy } from '../controllers/c.joyas.js'

const joyas = (Router())
// ver ruta controllers/c.joyas.js
joyas.get('/', findAll)
joyas.get('/filtros', findBy)
export default joyas
