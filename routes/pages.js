const express = require('express')
const route = express.Router();


// home page
route.get('/', function(req, res) {
    let categorie_set = new Set();
    var sql="SELECT * FROM products left join categories on categories.categorie_name=products.categorie_name";
    db.query(sql, function (err, result) {
        if (err) {
            throw err;
        } else {       
            
            for(var i=0; i<result.length; i++){
                categorie_set.add(result[i].categorie_name);
            }
            if(req.session.email){
                res.render('home.ejs', {title: 'ShopOn', success:true, products: result, prod_set: categorie_set, email:true});
            }            
            else {
                res.render('home.ejs', {title: 'ShopOn', success:true, products: result, prod_set: categorie_set, email:false});
            }
        }
    });
});


// about page
route.get('/about', function(req,res){
    if(req.session.email){
        res.render('about.ejs', {title: 'ShopOn-about', success:false, email: true});
    }
    else {
        res.render('about.ejs', {title: 'ShopOn-about', success:false, email: false});
    }
}); 


// contact page
route.get('/contact', function(req,res){
    if(req.session.email){
        res.render('contact.ejs', {title: 'ShopOn-contact', success:false, email: true});
    }
    else {
         res.render('contact.ejs', {title: 'ShopOn-contact', success:false, email: false});
    }
}); 


// shop page
route.get('/shop', function(req,res){
    if(req.session.email){
        res.render('shop.ejs', {title: 'ShopOn-shop', success:false, email: true});
    }
    else {
        res.render('shop.ejs', {title: 'ShopOn-shop', success:false, email: false});
    }
}); 

// cart page
route.get('/cart', function(req,res){
    if(req.session.email){
        res.render('cart.ejs', {title: 'ShopOn-cart', success:false, email: true});
    }
    else {
        res.redirect('/login');
    }
}); 

// login page
route.get('/login', function(req,res){
    res.render('signregister.ejs', {title: 'ShopOn-login', success: false, show: false,email: false});
}); 

// log out is in pageSell.js file

route.post('/login', function(req, res){
    var email = req.body.lemail;
    var password = req.body.lpassword;
    
    if(email && password){
        var sql =  "SELECT *FROM customers WHERE email = '" + email + "' && password = '" + password + "'";
        
        // execute query
        db.query(sql, function(err, result){
            //console.log(result);
            if(!err && result.length > 0){
                req.session.email = email;
                res.redirect('/');
            }
            else {
                console.log("Not match");
                res.redirect('/login');
            }
        });
    }
    else{
        var name = req.body.rname;
        var email = req.body.remail;
        var password = req.body.rpassword;
        var rpassword = req.body.rcpassword;

        if(password!=rpassword){
            //console.log("demo");
            res.render('signregister.ejs', {title: 'ShopOn-login', success: false});
        }
        /*
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(rpassword);
        */
        var sql =  "INSERT INTO customers(name, email, password) values('" + name + "','" + email + "','"+ password + "');";
        
        // execute query
        db.query(sql, function(err, result) {
            //console.log(err);
            if (!err) {
                res.session.email = email;
                res.redirect('/');
            }
            else {
                //console.log("Number of records inserted: " + result.affectedRows);
                //console.log("Insertion not created");
                res.redirect('/login');
            }
        });
        
    }
});


module.exports = route;