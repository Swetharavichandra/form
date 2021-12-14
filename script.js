let a = document.createElement('Form');
let b = document.createElement('label');
b.setAttribute('for', 'fname');
b.innerText = "Firstname:";
let c = document.createElement('input');
c.setAttribute('type', 'text')
c.setAttribute('id', 'fname')
let br = document.createElement("br")


let b1 = document.createElement('label');
b1.setAttribute('for', 'mname');
b1.innerText = "MiddleName";
let b2 = document.createElement('input');
b2.setAttribute('type', 'text')
b2.setAttribute('id', 'mname')




let br1 = document.createElement("br")


let b3 = document.createElement('label');
b3.setAttribute('for', 'lname');
b3.innerText = "LastName:";
let b4 = document.createElement('input');
b4.setAttribute('type', 'text')
b4.setAttribute('id', 'lname')


let br2 = document.createElement("br")


let b5 = document.createElement('label');
b5.setAttribute('for', 'email');
b5.innerText = "Email:";
let b6 = document.createElement('input');
b6.setAttribute('type', 'email')
b6.setAttribute('id', 'email')



a.append(b, c, br, b1, b2, br1, b3, b4, br2, b5, b6);

document.body.append(a)

function foo() {
    let result = document.getElementById('fname').value
    let result1 = document.getElementById('mname').value
    let result2 = document.getElementById('lname').value
    let result3 = document.getElementById('email').value
    console.log(result, result1, result2, result3);
}