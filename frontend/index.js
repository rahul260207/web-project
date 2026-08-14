const users = [
 {
   "name" : "Jonn Doe",
   "gender" : "Male",
   "image" : "john.png"
 },
   {
   "name" : "Jane Doe",
   "gender" : "Feale",
   "image" : "jane.png"
 }
]


var curIndex = 0;


function toggle(){
 if(curIndex == 0)
   curIndex = 1;
 else
   curIndex = 0;


 document.getElementById("card-image").src = users[curIndex].image
 document.getElementById("card-name").innerText =users[curIndex].name
 document.getElementById("card-gender").innerText=users[curIndex].gender
}

function random() {
  fetch("https://randomuser.me/api")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      document.getElementById("card-image").src = data.results[0].picture.large;
      var full_name=data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last;
      document.getElementById("card-name").innerText = full_name;
      document.getElementById("card-gender").innerText = data.results[0].gender;
    });
}
