const button = document.querySelectorAll('section h2');
const arrowButton = document.querySelectorAll('section h2 i');
const list = document.querySelectorAll('section ul')

function handleClick() {
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
    list[i].classList.toggle('active');
    
    if(arrowButton[i].classList.contains('bx-book-alt')) {
      arrowButton[i].classList.remove('bx-book-alt');
      arrowButton[i].classList.add('bx-book-open');
    } else {
      arrowButton[i].classList.remove('bx-book-open');
      arrowButton[i].classList.add('bx-book-alt');
    }
    
    })
  }
}

handleClick();