//line394
let id;
paths=["/Carpenters","/Painters", "/Plumbers", "/Electricians", "/Saloon"];
const express=require('express');
const mysql=require('mysql');
const bodyParser = require('body-parser')
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:"my_db",
    multipleStatements: true
});
i1={}
const app=express();
db.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        app.listen(3000);
        console.log('connected to database, listening to port 3000');
    }
});
paths.forEach(element => {
    app.get(element, (req,res)=>{
        res.redirect('/');
    })
});
app.get('/', (req,res)=>{
    let a=1;
    let proarr=[];
    myfunc3(proarr).then((proarr)=>{
        res.render('home',{ i: JSON.stringify(proarr[0])})
    })
})
app.get('/createdb',(req,res)=>{
    let sql='CREATE DATABASE my_db';
    db.query(sql,(err,result)=>{
        if(err) throw err;
        //console.log(result);
        //console.log('db created');
    })
    
});
app.get('/usedb',(req,res)=>
{
    db.query('use my_db',(err,result)=>{
        if(err) throw err;
        //console.log(result);
        //console.log('db in use');
    })
})
function myfunc11(proarr, num)
{
        return new Promise((resolve, reject)=>{
            const error=false;
            let p=proarr;
            // //console.log(result);
            sql2="select* from reviews where FromNumber="+num;
    db.query(sql2,(err,result)=>{
        if(!error)
        {
        result=JSON.parse(JSON.stringify(result));
        proarr.push(result);
        //console.log("hi",proarr[2]);
        resolve();}
        else
        {
            reject();
        }
    })
        }
)}
let rest;
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/sqlquery',(req,res)=>{
    res.render('sql',{i1:JSON.stringify(rest)});
})
app.post('/sqlquery',(req,res)=>{
    //console.log(req.body.search);
    sql1=req.body.search;
    db.query(sql1,(err,result)=>{
        if(err) throw err;
        //console.log(result);
        result=JSON.parse(JSON.stringify(result))
        rest=result;
    res.redirect('/sqlquery');
})
})
app.get('/dropdb',(req,res)=>{
    let sql='DROP DATABASE my_db';
    db.query(sql,(err,result)=>{
        if(err) throw err;
        //console.log(result);
        //console.log('db dropped');
    })
});
app.get('/addpro', (req, res) => {
    let post = {Name:"Bhargav", Password:"bmv", MobileNumber:"9146556565",City:"Bluru" , Pincode:"560010", Address:"433/S2,Balaji Adithi, 20th main, 1st block Rajajinagar, Bluru", Profession:"Carpenter", jobs:20, rating:4};
    let sql = 'INSERT INTO pros SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        //console.log(result);
        res.send('Post 1 added...');
    });
});
app.get('/addpro0', (req, res) => {
    let post = {Name:"Bhargav", Password:"bmv",Age:29, MobileNumber:"9148171643",City:"Bluru" , Pincode:"560010", Address:"433/S2,Balaji Adithi, 20th main, 1st block Rajajinagar, Bluru", Profession:"Painter", jobs:20, rating:2};
    let sql = 'INSERT INTO pros SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        //console.log(result);
        res.send('Post 1 added...');
    });
});
app.get('/addpro1', (req, res) => {
    let post = {Name:"Bhargav", Password:"bmv",Age:20, MobileNumber:"9132456789",City:"Bluru" , Pincode:"560010", Address:"433/S2,Balaji Adithi, 20th main, 1st block Rajajinagar, Bluru", Profession:"Plumber", jobs:20, rating:3};
    let sql = 'INSERT INTO pros SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        //console.log(result);
        res.send('Post 1 added...');
    });
});
app.get('/addpro2', (req, res) => {
    let post = {Name:"Bhargav", Password:"bmv",Age:21, MobileNumber:"9143256789",City:"Bluru" , Pincode:"560010", Address:"433/S2,Balaji Adithi, 20th main, 1st block Rajajinagar, Bluru", Profession:"Electrician", jobs:20, rating:3};
    let sql = 'INSERT INTO pros SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        //console.log(result);
        res.send('Post 1 added...');
    });
});
app.get('/addpro3', (req, res) => {
    let post = {Name:"Bhargav", Password:"bmv",Age:13, MobileNumber:"9123456789",City:"Bluru" , Pincode:"560010", Address:"433/S2,Balaji Adithi, 20th main, 1st block Rajajinagar, Bluru", Profession:"Salon", jobs:20, rating:3};
    let sql = 'INSERT INTO pros SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        //console.log(result);
        res.send('Post 1 added...');
    });
});
app.get('/addpro4', (req, res) => {
    let post = {Name:"Mahesh", Password:"bmv",Age:22, MobileNumber:"9223344556",City:"Bluru" , Pincode:"560010", Address:"433/S2,Balaji Adithi, 20th main, 1st block Rajajinagar, Bluru", Profession:"Carpenter", jobs:20, rating:3};
    let sql = 'INSERT INTO pros SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        //console.log(result);
        res.send('Post 1 added...');
    });
});
app.get('/addpro5', (req, res) => {
    let post = {Name:"Likbhai", Password:"bmv",Age:23, MobileNumber:"9123344556",City:"Bluru" , Pincode:"560010", Address:"433/S2,Balaji Adithi, 20th main, 1st block Rajajinagar, Bluru", Profession:"Carpenter", jobs:20, rating:3};
    let sql = 'INSERT INTO pros SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        //console.log(result);
        res.send('Post 1 added...');
    });
});
app.get('/addord', (req, res) => {
    let post = {FromNumber:"9980741316", ToNumber:"9148171643", Problem:"make me a table"};
    let sql = 'INSERT INTO orders SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        //console.log(result);
        res.send('Post 1 added...');
    });
});
app.get('/addrev', (req, res) => {
    let post = {FromNumber:"9980741316", ToNumber:"9148171643", Review:"he is good bad"};
    let sql = 'INSERT INTO reviews SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        //console.log(result);
        res.send('Post 1 added...');
    });
});
app.get('/ProfileUser/:id/:jd/order',(req,res)=>{
    let proarr;
    myfunc4(proarr).then((proarr)=>{
    for(var i=0;i<proarr.length;i++)
    {
        if(proarr[i].MobileNumber==req.params.id)
    res.render('orders', {i1:JSON.stringify(proarr[i].MobileNumber), j : JSON.stringify(req.params.jd), k:JSON.stringify(req.params.id)})};
})
})
app.post('/ProfileUser/:id/:jd/order',(req,res)=>{
    //console.log(req.body)
    //console.log(req.params.id, req.params.jd)
   myfunc5({FromNumber:req.params.id,ToNumber:req.params.jd, Problem:req.body.Problem}).then(()=>
    {
        res.redirect("/ProfileUser/"+req.params.id);
    }
    )})
app.get('/ProfileUser/:id/:jd/review',(req,res)=>{
    let proarr;
    myfunc4(proarr).then((proarr)=>{
    for(var i=0;i<proarr.length;i++)
    {
        if(proarr[i].MobileNumber==req.params.id)
    res.render('reviews', {i1:JSON.stringify(proarr[i].MobileNumber), j : JSON.stringify(req.params.jd), k:JSON.stringify(req.params.id)})};
})
})
app.get('/ProfileUser/editrev/:id/:jd',(req,res)=>{
    let proarr;
    // console.log("hi")
    myfunc4(proarr).then((proarr)=>{
    for(var i=0;i<proarr.length;i++)
    {
        if(proarr[i].MobileNumber==req.params.id)
    res.render('editreviews', {i1:JSON.stringify(proarr[i].MobileNumber), j : JSON.stringify(req.params.jd), k:JSON.stringify(req.params.id)})};
})
})
app.get('/ProfileUser/editord/:id/:jd',(req,res)=>{
    let proarr;
    // console.log("hi")
    myfunc4(proarr).then((proarr)=>{
    for(var i=0;i<proarr.length;i++)
    {
        if(proarr[i].MobileNumber==req.params.id)
    res.render('editorders', {i1:JSON.stringify(proarr[i].MobileNumber), j : JSON.stringify(req.params.jd), k:JSON.stringify(req.params.id)})};
})
})
app.post('/ProfileUser/:id/:jd/review',(req,res)=>{
    console.log(req.body)
    //console.log(req.params.id, req.params.jd)
   myfunc16({FromNumber:req.params.id,ToNumber:req.params.jd, Review:req.body.Review, stars:parseInt(req.body.stars)}).then(()=>
    {
        res.redirect("/ProfileUser/"+req.params.id);
    })
    .catch((error)=>{
        // //console.log("hi",error)
        // return res.send(error.message);
    })
})
app.post('/ProfileUser/editrev/:id/:jd',(req,res)=>{
    // console.log(req.body)
    // console.log("hi")
    // console.log(req.params.id, req.params.jd)
   myfunc14({FromNumber:req.params.id,ToNumber:req.params.jd, Review:req.body.Review, stars:req.body.stars}).then(()=>
    {
        res.redirect("/ProfileUser/"+req.params.id);
    })
    .catch((error)=>{
        //console.log("hi.hey,booooo",error)
        return res.send(error.message);
    })
})
app.post('/ProfileUser/editord/:id/:jd',(req,res)=>{
    console.log(req.body)
    // console.log("hi")
    // console.log(req.params.id, req.params.jd)
   myfunc15({FromNumber:req.params.id,ToNumber:req.params.jd, Problem:req.body.Problem}).then(()=>
    {
        res.redirect("/ProfileUser/"+req.params.id);
    })
    .catch((error)=>{
        //console.log("hi.hey,booooo",error)
        return res.send(error.message);
    })
})
app.get('/crtabs',(req,res)=>{
    let sql1='create table users(Name varchar(255), Password varchar(255),Age int, MobileNumber char(10),City varchar(255), Pincode char(6), Address varchar(300), primary key(MobileNumber))';
    let sql2='create table pros(Name varchar(255), Password varchar(255),Age int, MobileNumber char(10),City varchar(255), Pincode char(6), Address varchar(300), Profession varchar(20),jobs int default 0,rating int default 0,primary key(MobileNumber))';
    let sql3='create table orders(FromNumber char(10), ToNumber char(10), Problem varchar(300),orderDate datetime DEFAULT CURRENT_TIMESTAMP,price int default 0, primary key(FromNumber, ToNumber,Problem),foreign key(FromNumber) references users(MobileNumber),foreign key(ToNumber) references pros(MobileNumber))';
    let sql4="create table reviews(FromNumber char(10), ToNumber char(10), Review varchar(300),reviewDate datetime DEFAULT CURRENT_TIMESTAMP,stars int default 0, primary key(FromNumber, ToNumber,Review),foreign key(FromNumber) references users(MobileNumber),foreign key(ToNumber) references pros(MobileNumber))";
    db.query(sql1,(err,result)=>{
        if(err) throw err;
        //console.log(result);
        //console.log('tab1 created');
    })
    db.query(sql2,(err,result)=>{
        if(err) throw err;
        //console.log(result);
        //console.log('tab2 created');
    })
    db.query(sql3,(err,result)=>{
        if(err) throw err;
        //console.log(result);
        //console.log('tab3 created');
    })
    db.query(sql4,(err,result)=>{
        if(err) throw err;
        //console.log(result);
        //console.log('tab4 created');
    })
});
app.get('/drptabs',(req,res)=>{
    let sql1='drop table users';
    let sql2='drop table pros';
    let sql3='drop table orders';
    let sql4='drop table reviews';
    db.query(sql1,(err,result)=>{
        if(err) throw err;
        //console.log(result);
        //console.log('tab1 drpd');
    })
    db.query(sql2,(err,result)=>{
        if(err) throw err;
        //console.log(result);
        //console.log('tab2 drp');
    })
    db.query(sql3,(err,result)=>{
        if(err) throw err;
        //console.log(result);
        //console.log('tab3 drp');
    })
    db.query(sql4,(err,result)=>{
        if(err) throw err;
        //console.log(result);
        //console.log('tab4 drp');
    })
});
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public/'));
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.get('/login', (req,res)=>{
    //console.log("user landed on login");
    res.render('login', {i:0})
})
app.get('/signup', (req,res)=>{
    res.render('signup')
})
app.post('/signup',(req,res)=>{
    if(req.body.Role=='User')
{
    let sql = 'INSERT INTO users SET ?';
    delete req.body.Role;
    //console.log("hi");
    let query = db.query(sql, req.body, (err, result) => {
        if(err) throw err;
        //console.log(result);
        //console.log('user', req.body.Name, "added");
})
    myfunc(req, false).then(()=>{
    res.redirect('/ProfileUser/'+ id);})
}
else
{
    let sql = 'INSERT INTO pros SET ?';
    delete req.body.Role;
    //console.log("hi");
    console.log(req.body)
    let query = db.query(sql, req.body, (err, result) => {
        if(err) throw err;
        //console.log(result);
        //console.log('pro', req.body.Name, "added", 'doing', req.body.Profession);
})
    myfunc2(req, false).then(()=>{
    res.redirect('/ProfilePro/'+ id);})
}
}
);
app.get("/ProfileUser/delete/:id/:jd",(req,res)=>{
    sql1="DELETE FROM orders WHERE FromNumber="+req.params.id+" and ToNumber="+req.params.jd+";"
    let query = db.query(sql1, req.body, (err, result) => {
        if(err) throw err;
        //console.log(result);
        res.redirect('/ProfileUser/'+ req.params.id);})

})
app.get("/ProfileUser/deleterev/:id/:jd",(req,res)=>{
    sql1="DELETE FROM reviews WHERE FromNumber="+req.params.id+" and ToNumber="+req.params.jd+";"
    let query = db.query(sql1, req.body, (err, result) => {
        if(err) throw err;
        //console.log(result);
        res.redirect('/ProfileUser/'+ req.params.id);})

})
app.get('/ProfileUser/:id',(req,res)=>{
    let proarr, proarr1;
    //console.log(req.params.id);
    myfunc6(proarr1,proarr, req.params.id).then((proarr1, proarr)=>{
    myfunc3(proarr1,proarr).then((proarr2)=>
    {
    //console.log('\n\n',proarr2[0][0], proarr2[1]);//proarr2[1]==orders proarr2[0]==both pros and users
    myfunc11(proarr2,req.params.id).then(()=>{
    res.render('profileuser', {i:JSON.stringify(proarr2[0][0]), j:JSON.stringify(req.params.id), k:JSON.stringify(proarr2[1]), l:JSON.stringify(proarr2[2])})})
    }
)})})

app.get('/ProfilePro/:id',(req,res)=>{
    let proarr, proarr2;
    myfunc7(req.params.id).then((proarr)=>
    {
        myfunc900(req.params.id).then((proarr2)=>
        {
            console.log(proarr, proarr2);
        res.render('profilepro', {o:JSON.stringify(proarr), r:JSON.stringify(proarr2)})
    })
    })
})
function myfunc900(num)
{
    return new Promise((resolve, reject)=>{
    const erro=false;
    let sql1="select* from reviews where ToNumber="+num;
    db.query(sql1,(err, result)=>{
        if(err) res.send(err);
        else
        {
            result=JSON.parse(JSON.stringify(result));
            if(!erro)
            resolve(result)
            else
            reject();
        }
    })
})
}
app.get('/ProfilePro/addprice/:id/:jd',(req,res)=>{
    console.log(req.params.id, req.params.jd)
    res.render("addprice", {i:JSON.stringify(req.params.id), j:JSON.stringify(req.params.jd)})
})
app.post('/ProfilePro/addprice/:id/:jd',(req,res)=>{
    console.log(req.params.id, req.params.jd)
    console.log(req.body);
    let sql1="UPDATE orders set price = "+ req.body.Price +" where FromNumber="+req.params.jd +" and ToNumber="+ req.params.id;
    db.query(sql1,(err,result)=>{
        if(err)
        res.send(err)
        else
        console.log(result)
    })
    res.redirect("/ProfilePro/"+ req.params.id)
})
var i=0;
app.post('/login',(req,res)=>{
    if(req.body.Role=='User')
    {
    myfunc(req, true).then(()=>{
    //console.log(i);
        if(i==1)
        {
        res.redirect('/ProfileUser/'+ id);}
        else
        {
            res.render('login', {i:1})
        }})
    }
    else if(req.body.Role=='Professional')
    {
        myfunc2(req, true).then(()=>{
        //console.log(i);
            if(i==1)
            {
            res.redirect('/ProfilePro/'+ id);
        }
            else
            {
                res.render('login', {i:1})
            }})
        }
})
app.post('/',(req,res)=>{
    //console.log(req.body.search);
    res.redirect('/search/'+req.body.search)
})
app.get('/search/:id',(req,res)=>{
    //console.log(req.params.id);
    let proarr=[];
    myfunc3(proarr).then((proarr)=>
    {
        res.render('searchpage',{ i: JSON.stringify(proarr[0][0]),j:JSON.stringify(req.params.id)})
    }
)
})
app.post('/search',(req,res)=>{
    //console.log(req.body.search);
    res.redirect('/search/'+req.body.search)
})
app.use((req,res)=>{
    res.status(404).render('404');
})
function myfunc(req,flag){
    return new Promise((resolve, reject)=>{
            let a=req.body.MobileNumber;
            //console.log(req.body);
            //console.log(a);
            const error=false;
            let sql1="select * from users where MobileNumber="+a;
            db.query(sql1,(err,result)=>{
                result=JSON.parse(JSON.stringify(result));
                p=result;
                if(p.length==0)
                {
                if(!error) {
                    if(!err){
                i=0;
                resolve();
            }
                else{throw err;}
            }
                else reject();
            }
        else{
            id=result[0].MobileNumber
            if(flag)
            {
                if(result[0].Password==req.body.Password)
                {
                    i=1;
                    //console.log(i);
                    if(!error)
                    {
                        resolve();
                    }
                    else
                    {
                        reject();
                    }
                }
                else
                {
                    i=0;
                    //console.log(i);
                    if(!error)
                    {
                        resolve();
                    }
                    else reject();
                }
            }
            else
            {
                if(!error)
                {
                    resolve();
                }
                else reject();
            }
        }
        }
        )
    })
}
function myfunc3(proarr1,proarr){
    return new Promise((resolve, reject)=>{
        const error=false;
        let p=proarr;
    let sql1='select * from pros;select * from users';
    db.query(sql1,(err,result)=>{
        result=JSON.parse(JSON.stringify(result));
        p=result;
        if(!error) {
            if(!err){
        //console.log(result);
        proarr=p
        let proarr2=[proarr,proarr1]
        //console.log('done', proarr2);//proarr[0]=pros, proarr[1]=users as output
        resolve(proarr2);}
        else{throw err;}
    }
        else reject();
    })
})
}
function myfunc2(req,flag){
    return new Promise((resolve, reject)=>{
            let a=req.body.MobileNumber;
            //console.log(req.body);
            //console.log(a);
            const error=false;
            let sql1="select * from pros where MobileNumber="+a;
            db.query(sql1,(err,result)=>{
                result=JSON.parse(JSON.stringify(result));
                //console.log(result)
                p=result;
                //console.log(p)
                if(p.length==0)
                {
                //console.log("hi")
                if(!error) {
                    if(!err){
                i=0;
                //console.log("hi")
                resolve();
            }
                else{throw err;}
            }
                else reject();
            }
        else{
            id=result[0].MobileNumber
            if(flag)
            {
                if(result[0].Password==req.body.Password)
                {
                    i=1;
                    // //console.log(i);
                    if(!error)
                    {
                        resolve();
                    }
                    else
                    {
                        reject();
                    }
                }
                else
                {
                    i=0;
                    //console.log(i);
                    if(!error)
                    {
                        resolve();
                    }
                    else reject();
                }
            }
            else
            {
                if(!error)
                {
                    resolve();
                }
                else reject();
            }
        }
        }
        )
    })
}
function myfunc4(proarr){
    return new Promise((resolve, reject)=>{
        const error=false;
        let p=proarr;
        let sql1='select * from users';
    db.query(sql1,(err,result)=>
        {
            result=JSON.parse(JSON.stringify(result));
            p=result
            if(!error)
            {
                proarr=p;
                resolve(p);
            }
            else reject();  
       }
        )
    })
}
function myfunc5(p){
    return new Promise((resolve, reject)=>
    {
        const error=false;
        let sql = 'INSERT INTO orders SET ?';
        let query = db.query(sql,p, (err, result) => {
        if(err) reject();
        // //console.log(result, "added baby");
        // res.send('Post 1 added...');
        if(!error)
        {
        resolve();}
        else
        {
            reject();
        }
    });
    }
)}
function myfunc16(p){
    return new Promise((resolve, reject)=>
    {
        const error=false;
        console.log("this is the tuple to be entered ",p);
        // p=JSON.parse(p);
        let sql = 'INSERT INTO reviews SET ?';
        let query = db.query(sql,p, (err, result) => {
        if(err) reject();
    //     sql2="select* from reviews";
    // db.query(sql2,(err,result)=>{
    //     if(!error)
    //     {
    //     result=JSON.parse(JSON.stringify(result));
    //     //console.log(result, "added baby");
    // }})
    //     resolve();
    // });
    // console.log(result);
    if(!error)
        {
        resolve();}
        else
        {
            reject();
        }
    })}
)}
function myfunc14(p){
    return new Promise((resolve, reject)=>
    {
        const error=false;
        // console.log("this is the tuple to be entered ",p);
        // p=JSON.parse(p);
        let sqq="DELETE FROM reviews WHERE FromNumber="+p.FromNumber+" and ToNumber="+p.ToNumber+";"
        let query = db.query( sqq,p, (err, result) => {
            //console.log("hello how are you  ",result);
            if(err) reject();
        if(!error)
            {
            resolve();
        }
            else
            {
                console.log("hi");
                reject();
            }
        })
        
        let sql = "INSERT INTO reviews SET ?";
        query = db.query(sql,p, (err, result) => {
        if(err) reject();
    if(!error)
        {
        resolve();}
        else
        {
            reject();
        }
    })
}
)}
function myfunc15(p){
    // console.log(p);
    return new Promise((resolve, reject)=>
    {
        const error=false;
        // console.log("this is the tuple to be entered ",p);
        // p=JSON.parse(p);
        console.log(p)
        let sqq="DELETE FROM orders WHERE FromNumber="+p.FromNumber+" and ToNumber="+p.ToNumber+";"
        let query = db.query( sqq,p, (err, result) => {
            //console.log("hello how are you  ",result);
            if(err) reject();
        if(!error)
            {
            resolve();
        }
            else
            {
                console.log("hi");
                reject();
            }
        })
        
        let sql = "INSERT INTO orders SET ?";
        query = db.query(sql,p, (err, result) => {
        if(err) reject();
    if(!error)
        {
        resolve();}
        else
        {
            reject();
        }
    })
}
)}
function myfunc6(proarr,proarr1, id)
{
        return new Promise((resolve, reject)=>{
            const error=false;
            let p=proarr;
            // //console.log(result);
            let sq1="select * from orders where FromNumber="+id;
            let query = db.query(sq1, (err, result) =>
            {
                result=JSON.parse(JSON.stringify(result));
                p=result;
                // //console.log(data)
                if(!error)
                { 
                    proarr=p;
                    resolve(p, proarr1);
                }
                else reject();  
           }
        )
    })
}
  function myfunc7(id){
            return new Promise((resolve, reject)=>{
                const error=false;
                let p;
                let sq1="select * from orders where ToNumber="+id;
                let query = db.query(sq1, (err, result) =>
            {
                if(err) throw err;
                console.log(result);
                result=JSON.parse(JSON.stringify(result));
                p=result;
                //console.log(id,result)
                // //console.log(data)
                if(!error)
                { 
                    resolve(p);
                }
                else reject();  
           }
           )
        })
        }
