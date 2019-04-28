// 'fram' is id of iframe
var result=0,move=0;
var q=['ml_q_0.html','ml_q_1.html','ml_q_2.html','ml_q_3.html','ml_q_4.html','ml_q_5.html','ml_q_6.html','ml_q_7.html','ml_q_8.html','ml_q_9.html','ml_q_10.html'];
var a=['ml_a_0.html','ml_a_1.html','ml_a_2.html','ml_a_3.html','ml_a_4.html','ml_a_5.html','ml_a_6.html','ml_a_7.html','ml_a_8.html','ml_a_9.html','ml_a_10.html'];
//for visited bage and had been submited
var vid=[]

function inVid(el){
	let l=vid.length;
	for(let temp=0;temp<l;temp++){
		if(vid[temp]==el){console.log(true);return true}
	console.log(false)
	}
	console.log(el+'not here')
	return false
}

function saveChange() {
	if(document.getElementById('fram').contentWindow.document.getElementsByTagName('link')[0].href=document.getElementById('style').href){console.log('done')}
}

function show() {
	document.getElementById('show').innerHTML='<h3>'+result+','+(move+1)+'</h3>';

}

function next(){
	if(move<q.length-1){
		document.getElementById('fram').src=q[++move];
		show();
		document.getElementById('answer').innerHTML='Answer';
		saveChange()
	}
	else{
		alert('You get'+((result/(q.length-4))*100)+'%')
	}
}

function previous(){
	if(move>0){
		document.getElementById('fram').src=q[--move];
		show()
		document.getElementById('answer').innerHTML='Answer';
		saveChange()
	}
}

function answer(){
	thiss=document.getElementById('answer');
	if(thiss.innerHTML=='Answer'){
		document.getElementById('fram').src=a[move];
		thiss.innerHTML='&nbsp;&nbsp;&nbsp;Back&nbsp;&nbsp;&nbsp;';
	}
	else if(thiss.innerHTML=='&nbsp;&nbsp;&nbsp;Back&nbsp;&nbsp;&nbsp;'){
		document.getElementById('fram').src=q[move];
		thiss.innerHTML='Answer';
	}
	saveChange()
}



function switchStyle() {
	if (document.getElementById('style').getAttribute('href')=='style1.css'){
		document.getElementById('style').href='style2.css';
		document.getElementById('fram').contentWindow.document.getElementsByTagName('link')[0].href='style2.css'
	}
	else{
		document.getElementById('style').href='style1.css';
		document.getElementById('fram').contentWindow.document.getElementsByTagName('link')[0].href='style1.css'
	}
}


function submit(){
	let r=document.getElementById('fram').contentWindow.document;
	switch(move){
		case 0:
		case 2:
		case 4:
		case 5:
			alert('No question to get answer');
			break;
		case 1:
			if(r.getElementsByTagName('input')[0].checked && !inVid(1)){
				result++;
				show();
				vid.push(1);
				next()
			}else{
				document.getElementById('wrong').play();
				alert("Wrong answer");
			}
			break;
		case 3:
			if(r.getElementsByTagName('input')[1].checked && !inVid(3)){
				result++;
				show();
				vid.push(3);
				next()
			}else{
				document.getElementById('wrong').play();
				alert("Wrong answer");
			}
			break;
		case 6:
			if(r.getElementsByTagName('input')[1].checked && !inVid(6)){
				result++;
				show();
				vid.push(6);
				next()
			}else{
				document.getElementById('wrong').play();
				alert("Wrong answer");
			}
			break;
		case 7:
			if(((r.getElementsByTagName('input')[0].checked)||(r.getElementsByTagName('input')[0].checked && r.getElementsByTagName('input')[2].checked)) && !inVid(7)){
				result++;
				show();
				vid.push(7);
				next()
			}else{
				document.getElementById('wrong').play();
				alert("Wrong answer");
			}
			break;
		case 8:
			if(r.getElementsByTagName('input')[0].value.toLowerCase()=='regression' && !inVid(8)){
				result++;
				show();
				vid.push(8);
				next()
			}else{
				document.getElementById('wrong').play();
				alert("Wrong answer");
			}
			break;	
		case 9:
			if(r.getElementById('re').value==7 && !inVid(9)){
				result++;
				show();
				vid.push(9);
				next()
			}else{
				document.getElementById('wrong').play();
				alert("Wrong answer");
			}
			break;
		case 10:
			if(r.getElementById('py').innerHTML=="Python" && !inVid(10)){
			result++;
				show();
				vid.push(10);
				next()	
			}else{
				document.getElementById('wrong').play();
				alert("Wrong answer");
			}
	}	
}




