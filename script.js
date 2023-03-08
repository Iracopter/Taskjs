/*const number1=(prompt("Enter first number"));
const number2=(prompt("Enter second number"));

if(number1===null || number1==='' || number2===null || number2===''){
    alert("Ви не ввели число, спробуйте ще раз!");
}
else{
    let num1=Number(number1);
    let num2=Number(number2);
    if(num2!=0){
        if(num1<num2){
            if(confirm("Ви впевнені, що хочете продовжити операцію?")==true){
                alert(`${num1} + ${num2} = ${num1+num2}
${num1} - ${num2} = ${num1-num2} 
${num1} * ${num2} = ${num1*num2}
${num1} / ${num2} = ${num1/num2}`);
            }
        }
        else{
            alert(`${num1} + ${num2} = ${num1+num2}
${num1} - ${num2} = ${num1-num2} 
${num1} * ${num2} = ${num1*num2}
${num1} / ${num2} = ${num1/num2}`);
        }
    }
    else{
        alert(`${num1} + ${num2} = ${num1+num2}
${num1} - ${num2} = ${num1-num2} 
${num1} * ${num2} = ${num1*num2}
${num1} / ${num2} = На нуль ділити не можна`);  
    }
}
*/

function Sum(num1, num2){
    if(typeof(num1)=='number'&&typeof(num2)=='number'){
        return num1+num2;
    }
    else{
        return ("You should use numbers!")
    }
}

function Minus(num1, num2){
    if(typeof(num1)=='number'&&typeof(num2)=='number'){
        return num1-num2;
    }
    else{
        return ("You should use numbers!")
    }
}

function Dobutok(num1, num2){
    if(typeof(num1)=='number'&&typeof(num2)=='number'){
        return num1*num2;
    }
    else{
        return ("You should use numbers!")
    }
}

function Dillenia(num1, num2){
    if(typeof(num1)=='number'&&typeof(num2)=='number'){
        if(num2!=0)
        return num1/num2;
        else return ("Ділити на нуль не можна!");
    }
    else{
        return ("You should use numbers!")
    }
}

console.log(Sum("2",4));
console.log(Minus(2,4));
console.log(Dobutok(2,"nkfnfk"));
console.log(Dillenia(2,0));

function Max(numbers){
    let max=numbers[0];
    for(let i=1; i<numbers.length; i++){
        if(numbers[i]>max){
            max=numbers[i];
        }
    }
    return max;
}

function Min(numbers){
    let min=numbers[0];
    for(let i=1; i<numbers.length; i++){
        if(numbers[i]<min){
            min=numbers[i];
        }
    }
    return min;
}

let numbers=[1,4,7,8,9,4,3,-2,6,8,10,6,4];

console.log(Max(numbers));
console.log(Min(numbers));
