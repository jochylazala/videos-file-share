var socket;

function setup(){
	document.getElementById("videoFile").src

	socket = io.connect('http://localhost:5000');
	socket.on('sendFiles', newData);
}


function newData(datas){
	document.getElementById("videoFile").src = document.getElementById("videoFile").src = datas

}

function sendDatas(){
	fileselect = document.getElementById("fileup").files;
	if(fileselect.length > 0){
		var fileselect = fileselect[0];
		var fileReader = new FileReader();

		fileReader.onload = function(FileLoadEvent){
			var srcData = FileLoadEvent.target.result;
			document.getElementById("videoFile").src = srcData;

			var datas = srcData;
			socket.emit('sendFiles', datas)
		}
		fileReader.readAsDataURL(fileselect);
	}

}



var fileup = document.getElementById("fileup");

fileup.addEventListener("change", function(){
	sendDatas()
})