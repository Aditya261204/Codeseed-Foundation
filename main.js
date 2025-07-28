 const stars = document.querySelectorAll('.star');
  let rating = 0;

  stars.forEach(star => {
    star.addEventListener('mouseover', () => {
      clearStars();
      highlightStars(star.dataset.value);
    });

    star.addEventListener('click', () => {
      rating = star.dataset.value;
      markSelectedStars(rating);
    });

    star.addEventListener('mouseout', () => {
      clearStars();
      markSelectedStars(rating);
    });
  });

  function highlightStars(value) {
    stars.forEach(star => {
      if (star.dataset.value <= value) {
        star.classList.add('hovered');
      }
    });
  }

  function markSelectedStars(value) {
    stars.forEach(star => {
      if (star.dataset.value <= value) {
        star.classList.add('selected');
      } else {
        star.classList.remove('selected');
      }
    });
  }

  function clearStars() {
    stars.forEach(star => star.classList.remove('hovered'));
  }