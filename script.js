let r = document.getElementById('radius');
function volume_sphere() {
    //Write your code here
	return r*r*Math.PI;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
