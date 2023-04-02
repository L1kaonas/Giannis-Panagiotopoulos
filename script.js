const btn = document.querySelector('#telephone-btn');
const number = document.querySelector('#telephone-number');

  btn.addEventListener('click', function() {
    if (number.style.display === 'none') {
      number.style.display = 'block';
    } else if (number.style.display === 'block') {
      number.style.display = 'none';
    } else {
      number.style.display = 'block'
    }
  });

  const btn2 = document.querySelector('#email-btn');
  const email = document.querySelector('#email-number');

    btn2.addEventListener('click', function() {
      if (email.style.display === 'none') {
        email.style.display = 'block';
      } else if (email.style.display === 'block') {
        email.style.display = 'none';
      } else {
        email.style.display = 'block'
      }
    });

//   document.querySelector('#Submit').addEventListener('click', (e)=>{
//   e.preventDefault();
//   const contactForm = document.querySelector('#form');
//   const name = document.querySelector('[name="name"]');
//   const email = document.querySelector('[name="email"]');
//   const message = document.querySelector('[name="content"]');
//   // validation before sending the data
//   if(name.value.length===0 || name.value.length===0 || name.value.length===0){
//     alert('please fill the inputs')
//   }else{
//     let data = new FormData(contactForm);
//     fetch("pana.kolof@gmail.com", { method: "POST", body: data });
//     alert('Thank you. your form was submited');
//     contactForm.reset()
//   }
// })

const burger = document.querySelector('.btnburger');
const secretHead = document.querySelector('#secretHead');

burger.addEventListener('click', function() {
  if (secretHead.style.display === 'none') {
    secretHead.style.display === 'block';
  } else if (secretHead.style.display === 'block') {
    secretHead.style.display === 'none';
  } else {
    secretHead.style.display === 'block'
  }
});
