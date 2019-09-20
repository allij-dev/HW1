
var doggodatabase =[];

function doggodetail(){

var breeddog = document.getElementById('breed').value;
document.getElementById('breedoutput').innerText ='we love '+breeddog+'s!!!!';

var colordog = document.getElementById('color').value;
var namedog = document.getElementById('name').value;

var dog = [breeddog, colordog, namedog];
doggodatabase.push(dog);

console.log(doggodatabase);                                                                                 

}