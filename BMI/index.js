function bmiCalculator(){
  let weight = document.getElementById("weightVal").value;
  let height = document.getElementById("heightVal").value;

console.log(weight);
console.log(height);
  let bmiValue = weight / (height * height);


alert("Your BMI value is " + bmiValue);
}
