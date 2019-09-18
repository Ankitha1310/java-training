var type = ['Animals','Trees','Cars'];
var data = [['Select','Cat','Dog','Pig'],['Select','A','V','S'],['Select','J','JK','NJ']];

function fillDD(){
	var TypeDD = document.getElementById('type');
	for(i=0;i<type.length;i++)
	{
		var ele = document.createElement('option');
		ele.text = type[i] ;
		TypeDD.add(ele,i+1);
	}
}

function fillTD(){
	var TypeDD = document.getElementById('type');
	var selectedIdx = TypeDD.selectedIndex;
	var DataDD = document.getElementById('data');

	DataDD.innerText = null;

	for(i=0;i<data[selectedIdx-1].length;i++)
	{
		var ele = document.createElement('option');
		ele.text = data[selectedIdx-1][i];
		DataDD.add(ele,i+1);
	}

}
