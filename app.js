const ratingContainer = document.querySelector('.rating__container');
const thankyouContainer = document.querySelector('.thankyou__container');
const ratingsButtons = document.querySelectorAll('.rating__option');
const submitButton = document.querySelector('.rating__submit-btn');
const feedbackText = document.querySelector('.selected__rating');
let selectedRating = null;

ratingsButtons.forEach((rating) => {
   rating.addEventListener('click', () => {
      selectedRating = rating.textContent;

      ratingsButtons.forEach((btn) =>
         btn.classList.remove('rating__option-selected')
      );
      rating.classList.add('rating__option-selected');
   });
});

submitButton.addEventListener('click', () => {
   if (selectedRating === null) {
   } else {
      feedbackText.textContent = selectedRating;
      ratingContainer.hidden = true;
      thankyouContainer.hidden = false;
   }
});
