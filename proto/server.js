const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')
const request = require('request')
const cheerio = require('cheerio')

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'fa17g03',
  password: 'itsnotdefault037',
  database: 'websites'
})

connection.connect()

app.use(bodyParser.json())

app.post('/search', (req, res) => {
  request(req.body.url, (err, resp, html) => {
    if (!err) {

      // fetches html from url input
      const $ = cheerio.load(html)
      
      // inserts html response into MySQL db 
      const post = { url: html }

      connection.query('INSERT INTO url SET ?', post, function (error, results, fields) {
        if (error) throw error
      })

      // serves html to client
      res.json(html)
    } else {
      res.json('Invalid URL!')
    }
  })
})

app.listen(process.env.PORT || 8080, function () {
  console.log("Server running on port", this.address().port)
})