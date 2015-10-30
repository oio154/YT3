/**
 * @author jacek
 */


function loadXMLDoc(windowfilename, ob) {
	// alert(windowfilename);
	var xmlhttp;
	var ret;
	///////////////////////////////////////////
	if (ob.tagName == "DIV" || ob.tagName == "SECTION") {
		ob.innerHTML = '<canvas id="mc" width="100" height="16">Proszę czekać ...</canvas>';
		var canvas = document.getElementById('mc');
		var context = canvas.getContext("2d");
		waitRect(context, 0, true);
	}
	///////////////////////////////////////////
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			ob.innerHTML = xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET", windowfilename, true);
	xmlhttp.send();
}

//////////////////////////////////////////////////////////////////////////////////////////////////

function dataPOST(th,data,filename,ob){
	//th - this - element wykonujący akcję
	//data - dane do przesłania
	//filename - plik obsługujący dane
	//ob - element aktywny na stronie inicjującej (wyniki)
	
	var xmlhttp;
	var ret;
	
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			//ob.innerHTML = xmlhttp.responseText;
			if(/\S/.test(xmlhttp.responseText)) window.alert(xmlhttp.responseText);
			//document.getElementById('id3').value=xmlhttp.responseText; //tylko na potrzeby duckdocka normalnie podmienić z poprzednią linią
			if(!data['chat'])document.getElementById('save').style.display="none"; //wyłącza dyskietkę zapisywania
			if(data['chat']==1)document.getElementById('chat').style.display="none";
		}
	}
	
	
	xmlhttp.open("POST",filename,true);
	xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	str=JSON.stringify(data);
	/*escstr=str.replace(/\\n/g, "\\n")
              .replace(/\\'/g, "\\'")
              .replace(/\\"/g, '\\"')
              .replace(/\\&/g, "z")
              .replace(/\\r/g, "\\r")
              .replace(/\\t/g, "\\t")
              .replace(/\\b/g, "\\b")
              .replace(/\\f/g, "\\f");*/
    escstr=str.replace(/&/g,'{ampersand_symbol}')
              .replace(/\+/g,'{plus_symbol}')           //po przesłaniu plik php podmienia to z powrotem (np. inc/text_add_save.php)
              .replace(/\\/g,'{backslash_symbol}');
	xmlhttp.send("data="+escstr);
	
}

//////////////////////////////////////////////////////////////////////////////////////////////////
function waitRect(context, no, color){
			
			
			if(color)context.fillStyle="#559"; else context.fillStyle="#fcfcfc";
			context.fillRect(((no*18) +4),8,16,8);
			
			color=!color;
			no++; if(no>4) no=0;
			setTimeout(function(){waitRect(context,no,color)},45)
}