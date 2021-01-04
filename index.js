var userInput = document.querySelector('input');
var getAnswerButton = document.getElementById('get-answer');
var clearButton = document.querySelector('.clear');

getAnswerButton.addEventListener('click', function(e) {
  e.preventDefault();

  let response = data[Math.floor(Math.random() * data.length)];

  document.querySelector('.ball').classList.toggle('hidden');
  document.querySelector('.give-answer').classList.toggle('hidden');
  document.querySelector('.clear').disabled = false;

  document.querySelector('.give-answer').innerHTML = `
    <div class="question"><em>${userInput.value}?</em></div>
    <div class="answer" style="font-size:1.2rem;font-weight:bold;"><strong>${response}</strong></div>
  `

  userInput.value = "";
});

clearButton.addEventListener('click', function(e) {
  e.preventDefault();

  document.querySelector('.ball').classList.toggle('hidden');
  document.querySelector('.give-answer').classList.toggle('hidden');
  document.querySelector('.clear').disabled = true;
})


