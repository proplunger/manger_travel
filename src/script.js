request=[];
accepted=[];
rejected=[];

fetch("http://localhost:3000/Requests")
.then(response=>response.json())
.then(data=>{console.log(data)
  request=data;
  getrequesteddata();

})

function getrequesteddata(){
  var  showrequest=[];
  showrequest+="";
  for(var i=0;i<request.length;i++){
    showrequest+=`<li><div>
    <h3>${request[i].Name}</h3>
    <p>${request[i].email}</p>
    <p>${request[i].Expense}</p>
    <p>${request[i].Location}</p></li>
    </div>`
  }
  document.getElementById("pending").innerHTML=showrequest;
}