
function dobValidate() {

var date= new Date();

var year=date.getFullYear()-18;
var month=date.getMonth()+1;
var dd=date.getDate()-1;

if(month<10)
{
month='0'+month;
}
if(dd<10)
{
dd=0+""+dd;
}
document.getElementById('dob').max=(year)+"-"+month+"-"+dd;
}