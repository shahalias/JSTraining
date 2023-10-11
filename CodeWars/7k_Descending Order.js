// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits 
// in descending order. Essentially, rearrange the digits to create the highest possible number.

// Input: 42145 Output: 54421


function descendingOrder(n) {
    let convertNum = n.toString();
    let newArr = convertNum.split('');
    let sortArr = newArr.sort();
    let revArr = sortArr.reverse();
    let joinArr = sortArr.join('');
    let retNum = Number(joinArr);
    return retNum ;
  }