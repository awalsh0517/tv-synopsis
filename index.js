const express = require('express')
const showdata = require('./showdata')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.render('index', { showdata })
})

app.get('/seasonspage/:number', (request, response) => {
  const season = showdata.seasons.find((seasonInfo) => seasonInfo.number === parseInt(request.params.number))

  return response.render('seasonspage', { season })
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1991, () => {
  console.log('Listening on port 1991...') // eslint-disable-line no-console
})

