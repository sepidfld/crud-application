const axios = require('axios');


exports.homeroutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function(response){  
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}
exports.update_user = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

//خب این صفحه برای ریکوئست هایی هست که علاوه بر ریکوئست به ای پی ای ، نیاز داری اطلاعات دریافتیت از ریکوئست به ای پی ای تو یه صفحه دیگه بیاد
//پس همزمان هم یه صفحه دیگه رو از دیرکتوری ویو برات رندر میکنه هم اطلاعات دریافتی از دیتا بیست رو تو یه صفحه دیگه نشون میده