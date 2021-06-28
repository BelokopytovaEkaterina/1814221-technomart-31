const serviseBtns = document.querySelectorAll('.services-button');
const serviseItems = document.querySelectorAll('.services-item');

const clearAllActiveClass = () => {
  serviseBtns.forEach((btn) => {
    btn.classList.remove('active');
  });

  serviseItems.forEach((item) => {
    item.classList.remove('active');
  });
};

if (serviseBtns.length) {
  serviseBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      clearAllActiveClass();
      btn.classList.add('active');
      serviseItems[index].classList.add('active');
    });
  });
}