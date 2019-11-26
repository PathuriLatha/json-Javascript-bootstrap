var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    for(var j=0; j<=5; j++){
      var tableRow = "<td class='border border-primary'>"+myObj.Employees[j].empId+"</td>";
          tableRow += "<td class='border border-primary'>"+myObj.Employees[j].empName+"</td>";
          tableRow += "<td class='border border-primary'>"+myObj.Employees[j].jobType+"</td>";
          tableRow += "<td class='border border-primary'>"+myObj.Employees[j].dateOfBirth+"</td>";
          tableRow += "<td class='border border-primary'>"+myObj.Employees[j].jobExperience+"</td>";
          tableRow += "<td class='border border-primary'>"+myObj.Employees[j].dateOFJoining+"</td>";
      document.getElementById(j).innerHTML = tableRow;
    }
    var res = JSON.parse(this.responseText);
  }
};
xmlhttp.open("GET", "employees.json", true);
xmlhttp.send();

function getEmployees(element){
  var value = document.getElementById(element.id).innerText;
  /*value  = value.split(" ");
    var getdisplay = "<table align='center'>";
        getdisplay += "<tr><td>Id : </td><td id='id'>"+value[0]+"</td></tr>";
        getdisplay += "<tr><td>Name : </td><td id='name'>"+value[1]+"</tr>";
        getdisplay += "<tr><td>Type : </td><td id='type'>"+value[2]+"</td></tr>";
        getdisplay += "<tr><td>DOB : </td><td id='dob'>"+value[3]+"</td></tr>";
        getdisplay += "<tr><td>Experience : </td><td id='exp'>"+value[4]+"</td></tr>";
        getdisplay += "<tr><td>DOJ : </td><td id='doj'>"+value[5]+"</td></tr>";
        getdisplay += "</table>";
      */
      var getdisplay = "<table align='center'>";
              getdisplay += "<tr><td>Id : </td><td id='id'></td></tr>";
              getdisplay += "<tr><td>Name : </td><td id='name'></td></tr>";
              getdisplay += "<tr><td>Type : </td><td id='type'></td></tr>";
              getdisplay += "<tr><td>DOB : </td><td id='dob'></td></tr>";
              getdisplay += "<tr><td>Experience : </td><td id='exp'></td></tr>";
              getdisplay += "<tr><td>DOJ : </td><td id='doj'></td></tr>";
              getdisplay += "</table>";
     /* var table = document.getElementById("table"), rIndex;
        for(var k=1; k<table.rows.length; k++){
          table.rows[k].onclick = function(){
            rIndex = this.rowIndex;
            // console.log(rIndex);
            //alert(rIndex);
            document.getElementById('id').value = this.cell[0].innerHTML;
            document.getElementById('name').value = this.cell[1].innerHTML;
            document.getElementById('type').value = this.cell[2].innerHTML;
            document.getElementById('dob').value = this.cell[3].innerHTML;
            document.getElementById('exp').value = this.cell[4].innerHTML;
            document.getElementById('doj').value = this.cell[5].innerHTML;
          };
        } */
    document.getElementById("sampleDiv").innerText = value;
    document.getElementById("divId").innerHTML = getdisplay;
}

