let calculation = localStorage.getItem('calculation') || '';
    updateScreen();
    
    function addCharacter(input) {
      calculation += input;
      localStorage.setItem('calculation', calculation);
      updateScreen();
    }
    function updateScreen() {
      document.querySelector('.answer-box').innerHTML = calculation;

      /*
      document.getElementById('answer-box').textContent = calculation;
      */
    }