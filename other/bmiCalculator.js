const name = document.querySelector("#btn");

function calculateBMI() {

	let height = parseInt(document
			.querySelector("#height").value);

	let weight = parseFloat(document
			.querySelector("#weight").value);

	let result = document.querySelector("#result");

	if (height === "" || isNaN(height))
		result.innerHTML = "Provide a valid Height!";

	else if (weight === "" || isNaN(weight))
		result.innerHTML = "Provide a valid Weight!";

	else {
		let bmi = (weight / ((height * height)
							/ 10000)).toFixed(2);
		if (bmi < 18.6) result.innerHTML =
			`Under Weight : ${bmi}`;

		else if (bmi >= 18.6 && bmi < 24.9)
			result.innerHTML =
				`Normal :  ${bmi}`;

		else result.innerHTML =
			`Over Weight :  ${bmi}`;
	}
}
