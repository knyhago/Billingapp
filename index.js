var express=require('express');
var app=express();
var port= process.env.PORT || 8081;

var mongo=require('mongodb');
const Mongoclient=mongo.MongoClient;
const mongoUrl='mongodb+srv://knyhago:kenny@cluster0.2kzve.mongodb.net/?retryWrites=true&w=majority';
var condition;


app.get('/',(req,res)=>{
    res.send("health ok")
});

app.get('/bills',(req,res)=>{
    var condition={};
    if(req.query.billno)
    {
        condition={"BILL NO":req.query.billno}
    }
    db.collection("Bills").find(condition).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
        console.log(req.params)
    })
});


    




Mongoclient.connect(mongoUrl,(err,connection)=>{
    if (err) throw err;
    db=connection.db("BillingDb");
    app.listen(port,(err)=>{
        if(err) throw err;
        console.log("connection successfull")
    })
})
