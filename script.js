function volume_sphere() {
	let ra = document.getElementById("radius").value;
	let volumeField = document.getElementById("volume");
	let r = parseFloat(ra);


	if (isNaN(r) || r < 0) {
		volumeField.value = "NaN";
	} else {
		let volume = (4 / 3) * Math.PI * Math.pow(r, 3);
		volumeField.value = volume.toFixed(4); 
	}

	return false; 
}

window.onload = function () {
	document.getElementById('MyForm').onsubmit = volume_sphere;
};
