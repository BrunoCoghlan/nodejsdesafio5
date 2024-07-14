import * as psql from '../models/m.joya.js'
import { hateos } from '../../utils/hateos.js'

export const findAll = (req, res) => {
  // controlador de resultado ver /models/m.joya.js
  psql.findAll(req.query)
    .then((result) => res.status(200).json({
      status: true,
      code: 200,
      nextPage: result.nextPage,
      // ver /utils/hateos.js
      message: hateos(result.result.rows)
    }))
    .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))
}

export const findBy = (req, res) => {
  // controlador de resultado filtrado ver models/m.joya.js
  psql.findBy(req.query)
    .then((result) => res.status(200).json({
      status: true,
      code: 200,
      manejoDeFiltros: {
        categorias: 'aros - collar - anillo',
        metales: 'plata - oro',
        precioMin: 'valor minimo',
        precioMax: 'valor maximo',
        example: '/joyas/filtros?precio_min=2000&precio_max=40000&categoria=aros&metal=oro'
      },
      result: result.rows
    }))
    .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))
}
