function dismissModal() {
  let modal = document.querySelector('.modal');
  modal.style.display = 'none'; // hides the 'try again' error
}

function validateLogin() {
  let username = document.getElementById('uname').value;
  let password = document.getElementById('pwd').value;
  let modal = document.querySelector('.modal');
  

  if (username === 'admin' && password === '1234'){
    window.location.href = 'index.html';
  } else {
    modal.style.display = 'block'; // 'shows the 'try again' error if user didn't input the correct login details
  }
}

function toggleNav() {
  let toggle = document.querySelector('.nav-sidebar');

  if (toggle.style.display === 'none') {
    toggle.style.display = 'block';
  } else {
    toggle.style.display = 'none';
  }
}
