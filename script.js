  const form = document.querySelector('#my-form'); // select the form element using its id attribute
    const textfield = document.querySelector('#textfield'); // select the textfield element
    const button = document.querySelector('#submit-button'); // select the submit button element
    
    // add a click event listener to the button
    button.addEventListener('click', function() {
      const text = textfield.value; // get the value of the textfield
    
      // check if the input text is equal to "velja.com"
      if (text === 'velja.com') {
        textfield.style.backgroundColor = 'green'; // set the textfield background color to green
        
      }
      // check if the input text is equal to "raf.rs"
      else if (text === 'raf.rs') {
        textfield.style.backgroundColor = 'red'; // set the textfield background color to red
      }
      // if the input text is not equal to "velja.com" or "raf.rs", reset the textfield background color to its default value (white)
      else {
        textfield.style.backgroundColor = ''; // reset the textfield background color
      }
    });