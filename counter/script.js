let counter = 0;

const value = document.querySelector('.value');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
      --counter;
    } else if (styles.contains('increase')) {
      ++counter;
    } else {
      counter = 0;
    }
    if (counter < 0) {
      value.style.color = 'red';
    }
    if (counter === 0) {
      value.style.color = 'yellow';
    }
    if (counter > 0) {
      value.style.color = 'green';
    }
    value.textContent = counter;
  });
});

btns.forEach(btn => {
  btn.addEventListener('mouseover', e => {
    e.target.style.backgroundColor = 'black';
    e.target.style.color = 'white';
    e.target.style.cursor = 'pointer';
  });
});
btns.forEach(btn => {
  btn.addEventListener('mouseout', e => {
    e.target.style.backgroundColor = '';
    e.target.style.color = '';
  });
});
