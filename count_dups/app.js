const array = [3,6,4,6,9,7,1,6,5,0,3,5,4,6,2,7,4,5,6]

function getWordCnt(arr){
    return arr.reduce(function(element,count){
        element[count] = (element[count] + 1) || 1;
        return element;
    },{});
}

console.log(getWordCnt(array))