import db from '../database/db_connect.js'
import format from 'pg-format'

export const findAll = async ({ limit = 3, order_by = 'nombre_ASC', page = 1 }) => {
  const query = 'SELECT * FROM inventario'
  const [column, sort] = order_by.split('_')
  const offset = ((page >= 0 ? Math.floor(page) - 1 : 0) * limit)
  const formatQuery = format(`${query} ORDER BY %s %s LIMIT %s OFFSET %s`, column, sort, limit, offset)
  return {
    result: await db(formatQuery),
    nextPage: `/joyas?limit=${limit}&order_by=${column}_${sort}&page=${(+page + 1)}`
  }
}

export const findBy = async ({ precio_min, precio_max, categoria, metal }) => {
  let query = 'SELECT * FROM inventario'
  const values = []
  const filtros = []
  // agrega filtros y valores
  if (precio_min) {
    values.push(precio_min)
    filtros.push(`precio >= $${values.length}`)
  }
  if (precio_max) {
    values.push(precio_max)
    filtros.push(`precio <= $${values.length}`)
  }
  if (categoria) {
    values.push(categoria)
    filtros.push(`categoria = $${values.length}`)
  }
  if (metal) {
    values.push(metal)
    filtros.push(`metal = $${values.length}`)
  }
  // parametrizado de consulta
  if (filtros.length > 0) {
    query += ` WHERE ${filtros.join(' AND ')}`
  }
  return await db(query, values)
}

export const findById = async ({ id }) => {
  const query = 'SELECT * FROM inventario WHERE id = $1'
  console.log(id)
  return await db(query, [id])
}
