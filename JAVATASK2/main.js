function looping(startNum, endNum, breakNum, contNum) {
  if (
    startNum === undefined ||
    endNum === undefined ||
    breakNum === undefined ||
    contNum === undefined ||
    startNum === null ||
    endNum === null ||
    breakNum === null ||
    contNum === null ||
    startNum === "" ||
    endNum === "" ||
    breakNum === "" ||
    contNum === ""
  ) {
    alert("Please provide all 4 numbers");
    return;
  }

  startNum = Number(startNum);
  endNum = Number(endNum);
  breakNum = Number(breakNum);
  contNum = Number(contNum);

  for (var i = startNum; i <= endNum; i++) {
    if (i === contNum) {
      continue;
    }
    if (i === breakNum) {
      console.log(i);
      break;
    }
    console.log(i);
  }
}

var start = prompt("Enter Start Number");
var end = prompt("Enter End Number");
var cont = prompt("Enter Continue Number");
var brk = prompt("Enter Break Number");
looping(start, end, brk, cont);
