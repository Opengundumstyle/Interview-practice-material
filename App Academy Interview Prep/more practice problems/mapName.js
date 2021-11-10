/*
Map By Name
Write a method map_by_name  that takes in an array of obj and 
returns a new array containing the names of each obj.

*/


function map_by_name(arr){
     let nameArr = [];
     for(let obj of arr){
        nameArr.push(obj.name)

     }
     return nameArr
}




pets = [
  {"type":"dog", "name":"Rolo"},
  {"type":"cat", "name":"Sunny"},
  {"type":"rat", "name":"Saki"},
  {"type":"dog", "name":"Finn"},
  {"type":"cat", "name":"Buffy"}
]
console.log(map_by_name(pets)) //#=> ["Rolo", "Sunny", "Saki", "Finn", "Buffy"]


countries = [
 {"name":"Japan", "continent":"Asia"},
 {"name":"Hungary", "continent":"Europe"},
 {"name":"Kenya", "continent":"Africa"},
]
console.log( map_by_name(countries)) //#=> ["Japan", "Hungary", "Kenya"]
