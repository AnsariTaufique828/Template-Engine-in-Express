const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "ejs")

app.get('/', (req, res) => {
  let siteName = "Addidas"
  let searchText = "Search Now"
  res.render("index", {siteName: siteName, searchText: searchText})
})


app.get('/blog/:slug', (req, res) => {
  let BlogTitle = "Addidas why and when?"
  let blogContent = "It's very good brand"
  res.render("index", {BlogTitle: BlogTitle, blogContent: blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})