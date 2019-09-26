const express = require ("express");
var cors = require('cors');
const app = express();
const sql = require('mysql');

const db = sql.createConnection({
  host:       "localhost",
  user:       "root",
  password:   "",
  database: "testing_users"
});

db.connect((err)=>{
  if(err) throw err;
  else{
    console.log("SQL Connected...")
  }
})





// Then use it before your routes are set up:
app.use(cors());


app.get('/user' , (req,res)=>{
  res.send([{
    name : "mohit",
    id   : 6
  },
  {
    name : "mohit",
    id   : 6
  },{
    name : "mohit",
    id   : 6
  },{
    name : "mohit",
    id   : 6
  }]);
res.end()
})

app.get('/createdb' , (req,res)=>{
    let createDB = "CREATE DATABASE testing_users5";
    db.query(createDB , (err,result)=>{
      if(err){
        console.log("error" , err)
      }
      else{
        console.log("database Created")
      }

    })

})


app.get('/users' , (req,res)=>{

  let sql = 'SELECT * FROM users';
  db.query(sql, (err,result)=>{
    if(err){
      throw err;
    }
    else{
      console.log(result);
      var x  = result;

    }
  })
  res.end();
})

app.listen(9000 , ()=>{
  console.log("server connected")
})
