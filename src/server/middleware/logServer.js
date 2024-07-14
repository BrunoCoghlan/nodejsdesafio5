import fs from 'fs'

export const logServer = (req, res, next) => {
  const registro = () => {
    const log = JSON.parse(fs.readFileSync('src/server/registrosLog/registrosLog.json', 'utf-8'))
    log.push({
      time: Date(),
      url: req.path,
      method: req.method,
      body: req.body,
      params: req.params,
      query: req.query
    })
    fs.writeFileSync('src/server/registrosLog/registrosLog.json', JSON.stringify(log, null, 2))
  }
  console.info({
    url: req.path,
    method: req.method,
    body: req.body,
    params: req.params,
    query: req.query
  })
  registro()
  next()
}
