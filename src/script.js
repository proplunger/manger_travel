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
  var  showrequest="";
  showrequest+="";
  for(var i=0;i<request.length;i++){
    showrequest+=`<li><div>
    <h3>${request[i].Name}</h3>
    <p>${request[i].email}</p>
    <p>${request[i].Expense}</p>
    <p>${request[i].Location}</p></li>
    <div style="display:flex;gap:10px";>
    <button type="button" class="btn btn-primary" onclick="acceptform(${request[i].id})"> Accept <i class="bi bi-check-circle-fill" style="color:green;fill:green"></i></button>
    <button type="button" class="btn btn-primary" onclick="rejectform(${request[i].id})"> Reject <i class="bi bi-x-circle-fill" style="color:red;fill:red"></i></button>
    <button type="button" class="btn btn-primary" onclick="returnform(${request[i].id})"> Return <i class="bi bi-arrow-return-left" style="color:green;fill:green"></i></button>
    </div>
    </div>`
  }
  document.getElementById("pending").innerHTML=showrequest;
}


const getacceptInfobyId=(x)=>{
    for(var i=0;i<request.length;i++){
        if(x == request[i].id){
            console.log(request[i])
            return request[i];
        }
    }
}

function acceptform(acceptId){
    console.log(acceptId);
    var acceptObj= getacceptInfobyId(acceptId);
    console.log(acceptObj)
    console.log("post method");
    fetch("http://localhost:3000/Accepted",
       {
        method:'POST',
        body:JSON.stringify(acceptObj),
        headers:{'Content-type':'application/json'}
})
.then(response=>response.json())
.then(data=>{console.log(data)})
}

