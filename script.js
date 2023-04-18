const r = document.getElementById('radius');
const v = document.getElementById('volume');
function volume_sphere() {
    //Write your code here
	v.value = r.value*r.value*Math.PI;
} 

//window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
