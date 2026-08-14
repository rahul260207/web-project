const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const users=[
	{"id":1,
	"name":"Juan Price",
	 "gender":"male",
	"image":"https://randomuser.me/api/portraits/men/59.jpg"},
	{"id":2,
	"name":"Dileep Holla",
	 "gender":"male",
	"image":"https://randomuser.me/api/portraits/men/60.jpg"},
	{"id":3,
	"name":"Harcourt Olivier",
	 "gender":"male",
	"image":"https://randomuser.me/api/portraits/men/61.jpg"}
]

app.get("/api/users", function(req, res){
 res.status(200).json(users);
})

function getUserById(uid){
 for(var i=0; i<users.length; i++)
 {
   if(uid == users[i].id)
     return i;
 }
 return -1;
}



// get user by id
app.get("/api/users/:id", function(req, res)
{
 var uid = req.params.id;
 var userid = getUserById(uid);


 if(userid == -1)
 {
   res.status(404).json({"message" : "user not found"})
 }
 res.status(200).json(users[userid])
})


// get user by id
app.get("/api/users/:id", function(req, res)
{
 var uid = req.params.id;
 var userid = getUserById(uid);

 if(userid == -1)
 {
   res.status(404).json({"message" : "user not found"})
 }
 res.status(200).json(users[userid])
})
app.get("/api/randomuser", function(req, res)
{
	var n= users.length;
	var randomid = Math.floor(Math.random() * n);
	res.status(200).json(users[randomid])
})
app.post("/api/users", function(req, res)
{
	let user = req.body;
	user.id=newuserid;
	newuserid++;
	users.push(user);
	res.status(201).json({"message" : "user created successfully"})
})





app.use(express.static('frontend'))
app.listen(port, function(){
	console.log("my app is running at http://localhost:" + port)
})
