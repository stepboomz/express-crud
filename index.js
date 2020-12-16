const express = require ('express');
const app = express();
const PORT = process.env.PORT || 5000;
const logger = require('./Middleware/logger');
const exphbs = require('express-handlebars');
const users = require('./users');
//start port 
app.listen(PORT); 

//hanedle middleware 
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//homepang route
app.get ('/', (req,res) =>{
    res.render('index', {
        users
    });
})

//body parse middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//router api 
app.use('/api/users', require('./roues/api/users'));

// init middleware 
app.use(logger);



