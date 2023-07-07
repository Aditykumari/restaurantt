const button = document.getElementById('back');
  
  button.addEventListener('click', function() {
    window.open('http://127.0.0.1:5500/index.html', '_blank'); // Replace 'https://example.com' with the URL you want to open in a new window
  });
  const buttont = document.getElementById('cart');
  
  buttont.addEventListener('click', function() {
    window.open('http://127.0.0.1:5500/addtocart.html', '_blank'); // Replace 'https://example.com' with the URL you want to open in a new window
  });
  let screen = document.getElementById('screen');
let screenValueInput = document.getElementById('screen-value');
let buttons = document.querySelectorAll('button');
let screenValue = '';
let calculatorEnabled = true; // Variable to track calculator state

for (let item of buttons) {
  item.addEventListener('click', (e) => {
    let buttonText = e.target.innerText;
    console.log('Button text is', buttonText);

    if (buttonText === 'X') {
      buttonText = '*';
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText === 'C') {
      screenValue = '';
      screen.value = screenValue;
      screenValueInput.value = screenValue;
    } else if (buttonText === '=') {
      screen.value = eval(screenValue);
      screenValueInput.value = screen.value;
    } else if (buttonText === 'Add to Cart') {
      // Ignore the 'Add to Cart' button if calculator is disabled
      if (!calculatorEnabled) {
        return;
      }
    } else {
      if (calculatorEnabled) { // Only update screen value if calculator is enabled
        screenValue += buttonText;
        screen.value = screenValue;
      }
    }
  });
}

// Rest of your code...


  