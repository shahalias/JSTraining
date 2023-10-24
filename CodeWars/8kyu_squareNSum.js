// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9

function squareSum(numbers){
    let sum=0;
    numbers.forEach(element => {
        sum += element*element ;
    });
    return sum;
}

/* 
//JS Array reduce()
function squareSum(numbers){
    return numbers.reduce(
        function(sum, n){
            return (n*n) + sum;
        },0)
}

function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}
*/