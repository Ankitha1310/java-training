function ld(){
  //var data = ["doge", "cate", "birb", "doggo", "moon moon", "awkward seal"];
  var stu = [["JM","Jk","JH","NJ"],["22","21","23","24"],["b","g","s","s"]]
  // DRAW HTML TABLE
  var perrow =  3, // 3 items per row
      count = 0, // Flag for current cell
      table = document.createElement("table");
      row = table.insertRow();

  for (var i=0;i<stu.length;i++) {
    for(var j=0;j<stu[i].length;j++){
        var cell = row.insertCell();
        cell.innerHTML = stu[i][j];

}
      row = table.insertRow();
  }

  document.getElementById("x").appendChild(table);
};