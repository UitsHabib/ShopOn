const express = require('express')
const route = express.Router();

// home page
route.get('/dashboard', function(req, res) {
    if(req.session.email){
        res.render('dashboard', {title: 'ShopOn-dashboard-for-sellers', success:true, email:true});
    }
    else {
        res.redirect('/sell');
    }
});

// login page for sellers
route.get('/sell', function(req, res){
    res.render('registration', {title: 'ShopOn-login', success: false, show: false, email: false});
});

route.get('/logout', function(req, res){ // log out for both customer and shop
    req.session.destroy(function(){
       console.log("user logged out.")
    });
    res.redirect('/');
});

route.post('/sell', (req,res)=>{
    var email = req.body.lemail;
    var password = req.body.lpassword;
    
    // for log in of shops
    if(email && password){
        var sql =  "SELECT *FROM shops WHERE email = '" + email + "' && password = '" + password + "'";
        
        // execute query
        db.query(sql, function(err, result){
            //console.log(result);
            if (!err && result.length > 0) {
                req.session.email = email;
                res.redirect('/dashboard');
            }
            else {
                console.log("error or not match");
                res.redirect('/sell');
            }
            
        });
    }
    else{ // for registration of shop
        var name = req.body.rname;
        var email = req.body.remail;
        var password = req.body.rpassword;
        var rpassword = req.body.rcpassword;

        if(password != rpassword){
            //console.log("demo");
            res.render('registration', {title: 'ShopOn-login', success: false});
        }
        /*
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(rpassword);
        */
        var sql =  "INSERT INTO shops(businessname, email, password) values('" + name + "','" + email + "','"+ password + "');";
        // execute query
        db.query(sql, function(err, result) {
            //console.log(err);
            if (!err) {
                req.session.email = email;
                res.redirect('/dashboard');
            }
            else {
                //console.log("Number of records inserted: " + result.affectedRows);
                //console.log("Insertion not created");
                res.redirect('/sell');
            }
        });
    }
});

route.get('/management', function(req,res){
    if(req.session.email){
        let info;
        var sql =  "SELECT *FROM shops WHERE email = '" + req.session.email + "'";
        // execute query
        db.query(sql, function(err, result){
            //console.log(result[0].businessname);
            
            if (!err && result.length > 0) {
                
                res.render('shopmanagement', {title: 'basic information', success:false, email:true, info: result[0]});
            }
            else {
                console.log("error or not match");
                res.redirect('/sell');
            }
            
        });
    }
    else {
        res.redirect('/sell');
    }
});

route.post('/management', function(req,res){
    if(req.session.email){
        var name = req.body.shopname;
        var email = req.body.email;
        var phone = req.body.phone;
        var password = req.body.pass;
        var web = req.body.website;
        var fb = req.body.facebook;
        var sql =  "UPDATE shops SET businessname = '"+ name + "', email = '" + email + "', phone = '"+ phone + "', password = '"+ password + "', website = '" + web +"', facebookpage = '" + fb + "' where email = '"+ req.session.email+ "';";

        db.query(sql, function(err,result){
            if(err){
                console.log(err);
            }
            else {
                res.redirect('/management');
            }
        });
    }
    else {
        res.redirect('/sell');
    }
});

route.get('/location', function(req,res){

});

route.post('/location', function(req,res){

});

route.get('/hotline', function(req,res){
    if(req.session.email){
        let info;
        var sql =  "SELECT *FROM shops WHERE email = '" + req.session.email + "'";
        // execute query
        db.query(sql, function(err, result){
            //console.log(result[0].businessname);
            
            if (!err && result.length > 0) {
                
                res.render('shopmanagement', {title: 'shop hotline', success:false, email:true, info: result[0]});
            }
            else {
                console.log("error or not match");
                res.redirect('/sell');
            }
            
        });
    }
    else {
        res.redirect('/sell');
    }
});

route.post('/hotline', function(req,res){
    if(req.session.email){
        var phone1 = req.body.phone1;
        var phone2 = req.body.phone2;
        var phone3 = req.body.phone3;
        var phone4 = req.body.phone4;

        console.log(phone1);

        var sql =  "UPDATE shops SET phone1 = '"+ phone1 + "', phone2 = '" + phone2 + "', phone3 = '"+ phone3 + "', phone4 = '"+ phone4 + "' where email = '"+ req.session.email+ "';";

        db.query(sql, function(err,result){
            if(err){
                console.log(err);
            }
            else {
                res.redirect('/hotline');
            }
        });
    }
    else {
        res.redirect('/sell');
    }
});

route.get('/billing', function(req,res){

});

route.post('/billing', (req,res)=>{

});

route.get('/addProducts', function(req,res){
    if(req.session.email){
        let categorie;
        var sql = "SELECT *FROM categories;";
        db.query(sql, function(err,result){
            if(err){
                console.log(err);
            }
            else{
                res.render('shopmanagement', {title: 'add products', success:false,
                 email:true, categorie: result});
            }
        });
        
    }
    else {
        res.redirect('/sell');
    }
});

route.post('/addProducts', function(req,res){
    if(req.session.email){
        var shop_name;
        var sql = "SELECT  *FROM shops WHERE email = '" + req.session.email + "';";

        db.query(sql, function(err, result){
            if(err){
                console.log(err);
            }
            else{
                
                shop_name = result[0].businessname;
                var categorie_name = req.body.select;
                var title= req.body.title;
                var brand = req.body.brand;
                var new_price = req.body.nprice;
                var old_price = req.body.oprice;
                var quantity = req.body.quantity;
                var details = req.body.details;
                console.log(categorie_name);

                if (Object.keys(req.files).length == 0) {
                    console.log("empty file")
                    res.redirect('/addProducts');
                    return;
                }
                var file = req.files.upload_img;
                console.log(file.name);
                var uploadPath =  "public/assets/images/upload_images/" + file.name;
                console.log(uploadPath);

                file.mv(uploadPath, function(err) {
                    if (err) {
                        console.log("error");
                        return res.status(500).send(err);
                    }

                    sql =  "INSERT INTO products(categorie_name, shop_name, title, brand, new_price, old_price, quantity, details, image) VALUES('" + categorie_name + "', '" + shop_name + "', '" + title + "','" + brand + "', '"+ new_price + "', '" + old_price + "', '" + quantity +"', '" + details +"', '"+ file.name+ "');";
      
                    db.query(sql, function(err,result){
                        if(err){
                            console.log(err);
                        }
                        else {
                            res.redirect('/addProducts');
                        }
                    });
                });

                /*
                if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){
                                 
                    file.mv('public/images/upload_images/'+file.name, function(err) {
                                   
                        if (err){
                          return res.status(500).send(err);
                        }
                        sql =  "INSERT INTO products(categorie_name, shop_name, title, brand, new_price, old_price, quantity, details, img) VALUES('" + categorie_name + "', '" + shop_name + "', '" + title + "','" + brand + "', '"+ new_price + "', '" + old_price + "', '" + quantity +"', '" + details +"', '"+ img_name+ "');";
      
                        db.query(sql, function(err,result){
                            if(err){
                                console.log(err);
                            }
                            else {
                                res.redirect('/addProducts');
                            }
                        });
                    });
                }
                */
                
            }
        });
    }
    else {
        res.redirect('/sell');
    }
});


route.get('/showProducts', function(req,res){

});

route.post('/showProducts', (req,res)=>{

});

module.exports = route;