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
  /*console.log(value);
  console.log(typeof value);
  var arr = value.split(' ');
  console.log(arr);
  console.log(typeof arr);*/
 /* var rowValue = String(value);
  //alert(typeof rowValue);
  rowValue = rowValue.split(" ");
  alert(rowValue);
    var getdisplay = "<table align='center'>";
        getdisplay += "<tr><td>Id : </td><td id='id'>"+rowValue[0]+"</td></tr>";
        getdisplay += "<tr><td>Name : </td><td id='name'>"+rowValue[1]+"</tr>";
        getdisplay += "<tr><td>Type : </td><td id='type'>"+rowValue[2]+"</td></tr>";
        getdisplay += "<tr><td>DOB : </td><td id='dob'>"+rowValue[3]+"</td></tr>";
        getdisplay += "<tr><td>Experience : </td><td id='exp'>"+rowValue[4]+"</td></tr>";
        getdisplay += "<tr><td>DOJ : </td><td id='doj'>"+rowValue[5]+"</td></tr>";
        getdisplay += "</table>";
    */
     var getdisplay = "<table align='center'>";
              getdisplay += "<tr><td>Id : </td><td id=''id''></td></tr>";
              getdisplay += "<tr><td>Name : </td><td id='name'></td></tr>";
              getdisplay += "<tr><td>Type : </td><td id='type'></td></tr>";
              getdisplay += "<tr><td>DOB : </td><td id='dob'></td></tr>";
              getdisplay += "<tr><td>Experience : </td><td id='exp'></td></tr>";
              getdisplay += "<tr><td>DOJ : </td><td id='doj'></td></tr>";
              getdisplay += "</table>";
      /*
      var getdisplay = "<table align='center'>";
          getdisplay += "<tr><td>Id : </td><td id='cellId0'></td></tr>";
          getdisplay += "<tr><td>Name : </td><td id='cellId1'></td></tr>";
          getdisplay += "<tr><td>Type : </td><td id='cellId2'></td></tr>";
          getdisplay += "<tr><td>DOB : </td><td id='cellId3'></td></tr>";
          getdisplay += "<tr><td>Experience : </td><td id='cellId4'></td></tr>";
          getdisplay += "<tr><td>DOJ : </td><td id='cellId5'></td></tr>";
          getdisplay += "</table>";
      */
       /*var table = document.getElementById("table"), rIndex;
        //for(var k=1; k<table.rows.length; k++){
          table.rows[element.id].onclick = function(){
            // console.log(rIndex);
            //alert(rIndex);
            document.getElementById('id').value = this.cell[0].innerHTML;
            document.getElementById('name').value = this.cell[1].innerHTML;
            document.getElementById('type').value = this.cell[2].innerHTML;
            document.getElementById('dob').value = this.cell[3].innerHTML;
            document.getElementById('exp').value = this.cell[4].innerHTML;
            document.getElementById('doj').value = this.cell[5].innerHTML;
          };*/

         /* for(var l=0; l<table.rows[element.id].cells.length; l++){
            var getCellData = document.getElementById('table').rows[element.id].cells.item(l).innerText;
           //alert(getCellData);
           document.getElementById('cellId'+l).innerHTML = getCellData
          }*/
         /* var table = document.getElementById("table");
          var cells = table.rows[element.id.rowIndex].getElementsByTagName("td");
              console.log(cells);
              alert(typeof cells);
              for (var i = 0; i < cells.length; i++) {
                var data = table.rows[element.id].cells[i].innerHTML;
                //alert(data);
              //  document.getElementById('cellId'+i).value = data;
              }
        //}*/
    document.getElementById("sampleDiv").innerText = value;
    document.getElementById("divId").innerHTML = getdisplay;
}

