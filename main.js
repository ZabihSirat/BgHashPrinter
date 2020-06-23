const body=document.querySelector('body');
const toChangeColorBTN=document.querySelector('.btnToChangeBgColor');
const Hex=document.querySelector('.hex');
const hexNumbers=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
toChangeColorBTN.addEventListener('click',getHex);

function getHex(){
	var hexCol="#";
	for(let i=0;i<6;i++){
	var random=Math.floor(Math.random()*hexNumbers.length);
	hexCol+=hexNumbers[random]; 
	}
	body.style.backgroundColor=hexCol;
	Hex.innerHTML=hexCol;
	
}