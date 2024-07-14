export const hateos = (joyas) => {
  let stockTotal = 0
  const results = joyas.map((j) => {
    stockTotal += +j.stock
    return {
      name: j.nombre,
      href: `/joyas/${j.id}`
    }
  })

  return {
    totalJoyas: results.length,
    stockTotal,
    results
  }
}
