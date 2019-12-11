var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    var myData = JSON.parse( this.responseText );
    var jsonArrayLength = Object.keys(myData.Employees).length;
    alert(jsonArrayLength);
    if(jsonArrayLength > 0){
      var col =[];
      for(var i=0; i<=jsonArrayLength.length-1; i++){
        for(var key in myData.Employees[i]){
          if(col.indexOf(key) === -1){
            col.push(key);
          }
        }
      }
      /*var table = $("<table></table>").css({
        "class" : "table table-stripped",
        "border" : "1"
      });*/
      var table = $("<table></table>");

      /*var tHead = $("<thead></thead>").css({
        "class" : "border bg-primary text-white text-center"
      });*/
      var tHead = $("<thead></thead>");

      var hRow = $("<tr></tr>");

      for(var j=0; j<col.length; j++){
        var th = $("<th></th>");
        th.text(col[j]);
        hRow.appendChild(th);
        console.log(hRow);
      }
     //* tHead.appendChild(hRow);
     //* table.appendChild(tHead);
      console.log(tHead);
      var tBody = $("<tbody></tbody>");
      for(var k=0; k<jsonArrayLength; k++){
        var bRow = $("<tr></tr>");
        //console.log(bRow);
        for(var l=0; l<col.length; l++){
          var td = $("<td></td>");
          td.attr({
            "class" : "border border-primary"
          });
          td.text(myData.Employees[k][col[l]]);
          bRow.appendChild(td);
        }
        //*tBody.appendChild(bRow);
        tBody.append(bRow);
      }
      //*table.appendChild(tBody);
      table.append(tBody);
      console.log(tBody);
      var divTable = $("#employeesTable");
          divTable.text("");
         //* divTable.appendChild(table);
         divTable.append(table);
          alert(divTable);
    }
    var res = JSON.parse(this.responseText);
  }
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();
