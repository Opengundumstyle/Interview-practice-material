/***********************************************************************
Write a function favoriteWord(favoriteLetter, sentence) that takes in a
single letter and a sentence string. The function should return the word
in the sentence that contains `favoriteLetter` the most. If there are
ties, return the word that appears first in the sentence.

Examples

favoriteWord('p', 'sinful caesar sipped his snifter') // => 'sipped'
favoriteWord('a', 'sinful caesar sipped his snifter') //=> 'caesar'
favoriteWord('s', 'sinful caesar sipped his snifter') //=> 'sinful'
favoriteWord('x', 'sinful caesar sipped his snifter') //=> ''

game plan:
given two string as arg, favoriteletter and sentence;
create an var name count with value of 0 ;
create a string name chosenWord;
split sentence into array,
use for loop for array;
compare count with numbers of favouriteletter in current elemtent
use helperFunction to return the number of favword from given ele inside the arr
if current>count,set count=current, set chosenWord=current elemt
at the end of the loop return current ele;
***********************************************************************/

function favoriteWord(favoriteLetter, sentence) {
    let Favcount=0,
     ChosenWord= "",
     arrHolder=sentence.split(' ');
    for(let words of arrHolder ){
             if(CountFavWord(words,favoriteLetter)>Favcount){
                 ChosenWord=words;
                 Favcount=CountFavWord(words,favoriteLetter)
                 
             }
         }
         return ChosenWord;
        
    }

    function CountFavWord(words,favoriteLetter){
        let count=0;
        for(let word of words ){
            if(word===favoriteLetter){
                count++;
            }
        }
        return count;
    }
    




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = favoriteWord;
