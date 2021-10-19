/*******************************************************************************
Write a function highestScore(students) that takes in an array of student objects
as a parameter. It should return a string that corresponds to the student with
the highest score. The string should contain that student's initials
concatenated with their id. Assume the array contains at least 1 student object and
the student with the highest score is unique (there are no ties).
Example:

var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];

highestScore(students); //=> 'TD2'
game plan: recieve an array of objects;
var score=0;
create string name intialD=' ';
loop through array of object to see if the objec.score is greater than score
if true,set initialD=object.name + object.id
return initialD at the end;

need helper function to loop through a studentName and take the first letter of f ad l name

*******************************************************************************/

function highestScore(students) {//student obj
  let highScore=0;
  let initialD='';
  for(let student of students){//{name: 'Tommy Duek', id: 2, score: 99}
    if(student.score>highScore){//99>57   
      highScore=student.score;//99
      initialD=getInitial(student.name)+student.id;//   TD99
    }
  }
  return initialD;

}

function getInitial(name){ //Tommu
  let arrHolder=name.split(' ')//[tommy, duck]
  let intial="";
  for(let char of arrHolder){//duck
    intial+=char[0];//TD
  }
  return intial; //TD
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = highestScore;
