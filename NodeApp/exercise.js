// an example function to run
// first parameter is string to output
// second parameter is number of times to output it 
function echo(string, num){
    for(var i = 0; i < num; i++){
        console.log(string);
    }
}

echo('echo!!!', 3);

// takes array of numbers and averages them out
function average(scores){
    var total = 0;
    for(var i = 0; i < scores.length; i++) {
        // add numbers to eachother
        total += scores[i];
    }
    // divide total by number of numbers in array
    var avg = total/scores.length;

    // round average
    return Math.round(avg); 
} 

var scores = [90, 88, 80, 75, 78, 100];
console.log(average(scores));