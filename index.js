let num = prompt("enter a value btw 1-1000");
for(let i=1;i<=1000||num;i++){
    let result= i%3==0||i%5==0;
    console.log(result.reduce((a,b)=>{a+b;}+,0));
    }
// explanation of nested for loop
for(let i=2 ;i<=10;i++){
  for(let j=2; j<i;j++){
    console.log(`${j} = ${i}`);
  }
}


//summation of prime
function primeSummation(n) {
  let isPrime = true;
  let sum = 0;
for(var i = 2;i < n;i++){
  for(var j = 2;j < i;j++){
    if(i % j == 0){
      isPrime=false;
      break;
    }
  }
  if(i>1 && isPrime === true){
      sum = sum + i;
    }
}
return sum;
}
console.log(primeSummation(10));
 

// largestPalindromeProduct
function isPalindrome(string){
  let revStr = string.split('').reverse().join('');
  if(string=== revStr){
  return true;
  }
  return false;
}
function largestPalindromeProduct(n) {
let largestProduct=0;
let startValueStr = '1';
for(let i=1;i<n;i++){
  startValueStr = startValueStr + '0';
}

let finishValueStr = (startValueStr) +'0';
let startValue = parseInt(startValueStr);
let finishValue =parseInt (finishValueStr)-1;
for(let i=startValue;i<=finishValue;i++){
  for(let j = i+1;j<=finishValue ;j++){
    let product = i*j;
    if(isPalindrome(product.toString()) && product > largestProduct){
      largestProduct=product;
    }
  }
}
  console.log (largestProduct);
}

largestPalindromeProduct(3);



//smallest multiple or lcm
function smallestMult(n) {
  // Good luck!
  let isFound = false;
  let currNumber = 0;

  while(!isFound) {
    // Add itself if it's not divisible
    currNumber += n;

    for(let i=n; i>=1; i--) {
      // if currNumber is not divisible by numbers in range, break out of forloop
      if(currNumber % i !== 0) {
        break;
      }
      // currNumber is divisible by all numbers down to 1!
      if(i===1)
        isFound = true;
    }
  }

  console.log (currNumber);
}
smallestMult(20);


//sumsquaredifference
function sumSquareDifference(n) {
let square = 0;
let sum = 0,Sqr,diff;
for(let i=1;i<=n;i++){
  square+=(Math.pow(i,2));
}
for(let j=1;j<=n;j++){
    sum+=j;
  }
Sqr=(Math.pow(sum,2));
diff =Sqr-square;
return diff;
}
sumSquareDifference(100);

// power digit sum (2^upto 69)
function powerDigitSum(exponent) {
let power = Math.pow(2,exponent).toString().split('').map((value)=>value*1);
console.log(power)
const reducer = (accumulator, curr) => accumulator + curr;
let sum = power.reduce(reducer);
  console.log(sum);
}
powerDigitSum(69);


//specialPythagoreanTriplet a^2+b^2=c^2,a+b+c=1000,abc=?
function specialPythagoreanTriplet(n) {
for(let a = 1; a < n-2;a++){
  for(let b = a + 1;b < n-2;b++){ 
    let cSqred = (Math.pow(a,2)+Math.pow(b,2));
    let c = Math.sqrt(cSqred);
    if(Number.isInteger(c) && (a + b + c) === n){
      let product;
      product = a * b * c;
      console.log("product",product);
      console.log(a)
      console.log(b)
      console.log(c)
      
    }
  }
}
}
specialPythagoreanTriplet(1000);



//largestproduct in series
function largestProductinaSeries(n) {
let thousandDigits = [7,3,1,6,7,1,7,6,5,3,1,3,3,0,6,2,4,9,1,9,2,2,5,1,1,9,6,7,4,4,2,6,5,7,4,7,4,2,3,5,5,3,4,9,1,9,4,9,3,4,9,6,9,8,3,5,2,0,3,1,2,7,7,4,5,0,6,3,2,6,2,3,9,5,7,8,3,1,8,0,1,6,9,8,4,8,0,1,8,6,9,4,7,8,8,5,1,8,4,3,8,5,8,6,1,5,6,0,7,8,9,1,1,2,9,4,9,4,9,5,4,5,9,5,0,1,7,3,7,9,5,8,3,3,1,9,5,2,8,5,3,2,0,8,8,0,5,5,1,1,1,2,5,4,0,6,9,8,7,4,7,1,5,8,5,2,3,8,6,3,0,5,0,7,1,5,6,9,3,2,9,0,9,6,3,2,9,5,2,2,7,4,4,3,0,4,3,5,5,7,6,6,8,9,6,6,4,8,9,5,0,4,4,5,2,4,4,5,2,3,1,6,1,7,3,1,8,5,6,4,0,3,0,9,8,7,1,1,1,2,1,7,2,2,3,8,3,1,1,3,6,2,2,2,9,8,9,3,4,2,3,3,8,0,3,0,8,1,3,5,3,3,6,2,7,6,6,1,4,2,8,2,8,0,6,4,4,4,4,8,6,6,4,5,2,3,8,7,4,9,3,0,3,5,8,9,0,7,2,9,6,2,9,0,4,9,1,5,6,0,4,4,0,7,7,2,3,9,0,7,1,3,8,1,0,5,1,5,8,5,9,3,0,7,9,6,0,8,6,6,7,0,1,7,2,4,2,7,1,2,1,8,8,3,9,9,8,7,9,7,9,0,8,7,9,2,2,7,4,9,2,1,9,0,1,6,9,9,7,2,0,8,8,8,0,9,3,7,7,6,6,5,7,2,7,3,3,3,0,0,1,0,5,3,3,6,7,8,8,1,2,2,0,2,3,5,4,2,1,8,0,9,7,5,1,2,5,4,5,4,0,5,9,4,7,5,2,2,4,3,5,2,5,8,4,9,0,7,7,1,1,6,7,0,5,5,6,0,1,3,6,0,4,8,3,9,5,8,6,4,4,6,7,0,6,3,2,4,4,1,5,7,2,2,1,5,5,3,9,7,5,3,6,9,7,8,1,7,9,7,7,8,4,6,1,7,4,0,6,4,9,5,5,1,4,9,2,9,0,8,6,2,5,6,9,3,2,1,9,7,8,4,6,8,6,2,2,4,8,2,8,3,9,7,2,2,4,1,3,7,5,6,5,7,0,5,6,0,5,7,4,9,0,2,6,1,4,0,7,9,7,2,9,6,8,6,5,2,4,1,4,5,3,5,1,0,0,4,7,4,8,2,1,6,6,3,7,0,4,8,4,4,0,3,1,9,9,8,9,0,0,0,8,8,9,5,2,4,3,4,5,0,6,5,8,5,4,1,2,2,7,5,8,8,6,6,6,8,8,1,1,6,4,2,7,1,7,1,4,7,9,9,2,4,4,4,2,9,2,8,2,3,0,8,6,3,4,6,5,6,7,4,8,1,3,9,1,9,1,2,3,1,6,2,8,2,4,5,8,6,1,7,8,6,6,4,5,8,3,5,9,1,2,4,5,6,6,5,2,9,4,7,6,5,4,5,6,8,2,8,4,8,9,1,2,8,8,3,1,4,2,6,0,7,6,9,0,0,4,2,2,4,2,1,9,0,2,2,6,7,1,0,5,5,6,2,6,3,2,1,1,1,1,1,0,9,3,7,0,5,4,4,2,1,7,5,0,6,9,4,1,6,5,8,9,6,0,4,0,8,0,7,1,9,8,4,0,3,8,5,0,9,6,2,4,5,5,4,4,4,3,6,2,9,8,1,2,3,0,9,8,7,8,7,9,9,2,7,2,4,4,2,8,4,9,0,9,1,8,8,8,4,5,8,0,1,5,6,1,6,6,0,9,7,9,1,9,1,3,3,8,7,5,4,9,9,2,0,0,5,2,4,0,6,3,6,8,9,9,1,2,5,6,0,7,1,7,6,0,6,0,5,8,8,6,1,1,6,4,6,7,1,0,9,4,0,5,0,7,7,5,4,1,0,0,2,2,5,6,9,8,3,1,5,5,2,0,0,0,5,5,9,3,5,7,2,9,7,2,5,7,1,6,3,6,2,6,9,5,6,1,8,8,2,6,7,0,4,2,8,2,5,2,4,8,3,6,0,0,8,2,3,2,5,7,5,3,0,4,2,0,7,5,2,9,6,3,4,5,0];
  let largest=0;
  for(let startIndex=0;startIndex<(1000-n);startIndex++){
    let product = thousandDigits[startIndex];
    for(let i = 1;i < n;i++){
      product = product * thousandDigits[startIndex + i];
    }
    if(product>largest){
      largest = product;
    }
  }
  console.log(largest);
}

largestProductinaSeries(13);


// function of tables
function table(n){
  for(let i = 1;i<=20;i++){
    let product= 0;
    product = n*i;
    console.log(`${n} * ${i} = ${product}`);
  }
}
table (13);