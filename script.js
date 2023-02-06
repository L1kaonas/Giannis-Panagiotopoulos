const btn = document.querySelector('.telephone-btn');
const number = document.querySelector('.telephone-number');

  btn.addEventListener('click', function() {
    if (number.style.display === 'none') {
      number.style.display = 'block';
    } else {
      number.style.display = 'none';
    }
  });
