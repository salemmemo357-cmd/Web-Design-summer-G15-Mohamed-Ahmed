var degree = prompt("Enter Your Degree");
if (degree > 100 || degree == "" || degree == "null") {
  alert("Invalid");
} else if (degree >= 90) {
  alert("Excellent");
} else if (degree >= 80) {
  alert("Very Good");
} else if (degree >= 70) {
  alert("Good");
} else if (degree < 70) {
  alert("Failed");
} else {
  alert("Invalid");
}
