const r = document.getElementById('radius');
const v = document.getElementById('volume');
function volumeSphere() {
    //Write your code here
	v.value = (r.value*r.value*r.value*Math.PI*4)/3;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
