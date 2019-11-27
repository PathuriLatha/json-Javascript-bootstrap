var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    var jsonArrayLength = Object.keys(myObj.Employees).length;
    //alert(jsonArrayLength);
    for(var j=0; j<jsonArrayLength; j++){
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
  var tableData = document.getElementById("table");
  for(var m = 0; m < tableData.rows.length; m++){
    tableData.rows[m].onclick = function(){
      var id = this.cells[0].innerHTML;
      var name = this.cells[1].innerHTML;
      var type = this.cells[2].innerHTML;
      var dob = this.cells[3].innerHTML;
      var exp = this.cells[4].innerHTML;
      var doj = this.cells[5].innerHTML;

      var getDisplay = "<table class='text-success' align='center'>";
          getDisplay += "<tr><td>Id : </td><td id='id'>"+id+"</td></tr>";
          getDisplay += "<tr><td>Name : </td><td id='name'>"+name+"</td></tr>";
          getDisplay += "<tr><td>Type : </td><td id='type'>"+type+"</td></tr>";
          getDisplay += "<tr><td>DOB : </td><td id='dob'>"+dob+"</td></tr>";
          getDisplay += "<tr><td>Experience : </td><td id='exp'>"+exp+"</td></tr>";
          getDisplay += "<tr><td>DOJ : </td><td id='doj'>"+doj+"</td></tr>";
          getDisplay += "</table>";
      //document.getElementById("sampleDiv").innerHTML = value;
      document.getElementById("divId").innerHTML = getDisplay;
    };
  }
}

