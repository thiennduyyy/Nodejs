const express = require('express')
const path = require('path')
const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const bodyParser = require("body-parser")
const app = express()
// const expressHbs = require('express-handlebars')

// app.engine('handlebars', expressHbs())

app.set('view engine', 'pug')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use("/admin", adminData.routes)
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).render('404.pug', { pageTitle: 'Page not found'})
})
// const routes = require("./routes")

app.listen(3000)