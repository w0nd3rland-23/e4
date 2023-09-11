//let firstSection = document.getElementById("keyterms");
console.log(firstSection);

function changeSectionBG(red){
    firstSection.style.backgroundColor ="red";
    firstSection.style.color ="green"

}
function changeSectionBG(blue){
    firstSection.style.backgroundColor =blue;
    firstSection.style.color ="green"

}
//changeSectionBG();

let multipleThree = document.getElementById("demo6");
console.log(myCalculator);

function myCalculator(a, b) {
    let sum = a * b;
    document.getElementById('demo6').innerHTML = sum;
  }