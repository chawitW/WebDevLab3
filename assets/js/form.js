const myForm = document.querySelector('#my-form');
const subjectInput= document.querySelector('#subject');
const nameInput =  document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const maleInput = document.querySelector('#male');
const femaleInput = document.querySelector('#female');
const msgInput = document.querySelector('#message');
const copyCheck = document.querySelector('#copy');
const humanCheck = document.querySelector('#human');
const userList = document.querySelector('#users');
const formJSON = JSON.stringify(myForm);

console.log(formJSON);

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '' || subjectInput.value === '' || phoneInput.value === '' ||msgInput.val === '' ){
        if (nameInput.value === ''){
            nameInput.classList.add('error');
            nameInput.value = 'Enter your name';
        }
        if(emailInput.value === ''){
            emailInput.classList.add('error');
            emailInput.value = 'Enter your email';
        }
        if(subjectInput.value === ''){
            subjectInput.classList.add('error');
            subjectInput.value = 'Enter your subject';
        }
        if(phoneInput.value === ''){
            phoneInput.classList.add('error');
            phoneInput.value = 'Enter your phone number';
        }
        if(msgInput.innerHTML === ''){
            msgInput.classList.add('error');
            msgInput.value = 'Enter your messages';
        }
        // if(humanCheck.value === 'on'){
        //     humanCheck.classList.add('error');
        //     alert('You are not human,arent you?');
        // }
    }else{
    const li = document.createElement('li');
    // const text = document.createTextNode(`Subject: ${subjectInput.value}, Name: ${nameInput.value} , Email:${emailInput.value},Phone: ${phoneInput.value}, Gender: ${maleInput.value}${femaleInput.value}, Message: ${msgInput.innerHTML} `);
    
    const text = document.createElement('tr');
    text.innerHTML = `
      <td> Subject: </td>
      <td>${subjectInput.value}</td>
      <td> //  Name: </td>
      <td>${nameInput.value}</td>
      <td> //  Email: </td>
      <td>${emailInput.value}</td>
      <td> //  Phone: </td>
      <td>${phoneInput.value}</td>
      <td> //  Gender: </td>
      <td>${maleInput.value}</td>
      <td> //  Message: </td>
      <td>${msgInput.value}</td>
      <td>===></td>
      <td><a href="#" class="btn btn-danger btn-sm delete"> DELETE </a></td>
    `;

    li.appendChild(text);
    userList.appendChild(li);

    subjectInput.value = '';
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    msgInput.value ='';
    // copyCheck.value = '';
    // humanCheck.value = '';
    }
}

// function remove(text){
//         // if element contains .delete class
//         if(text.classList.contains('delete')) {
//         // remove <a> -> <td> -> <tr>       
//           text.parentElement.parentElement.remove();
//         }
//       }
// }