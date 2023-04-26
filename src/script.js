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
    <div style="display:flex;gap:10px";>
    <button type="button" class="btn btn-primary" onclick="acceptform(${request[i].employee_id})"> Accept <i class="bi bi-check-circle-fill" style="color:green;fill:green"></i></button>
    <button type="button" class="btn btn-primary" onclick="rejectform(${request[i].employee_id})"> Reject <i class="bi bi-x-circle-fill" style="color:red;fill:red"></i></button>
    <button type="button" class="btn btn-primary" onclick="returnform(${request[i].employee_id})"> Return <i class="bi bi-arrow-return-left" style="color:green;fill:green"></i></button>
    </div>
    </div>`
  }
  document.getElementById("pending").innerHTML=showrequest;
}

function acceptform(acceptId){
    console.log(acceptId);
    
}