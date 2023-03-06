const number1=(prompt("Enter first number"));
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
