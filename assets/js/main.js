// Elements
const contentRating = document.getElementById("content-rating");
const thanksState = document.querySelector(".thanks");
const buttons = document.querySelectorAll("#rating button");
const submitButton = document.querySelector(".submit");
const ratingSpan = document.getElementById('rating-choiced');


let selectedRating = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        selectedRating = button.value;
        button.classList.add('active');        
    });
});

submitButton.addEventListener('click', () => {
    if(selectedRating) {
        submitButton.classList.add('active');
        ratingSpan.textContent = selectedRating;
        contentRating.classList.add('display-none');
        thanksState.classList.remove('display-none')
    } else {
        alert('You should select a rating before submitting!')
    }
});

