// Step 1: Select the form. We don't use querySelectorAll because there is only one form
const form = document.querySelector('.form')

// Step 2: Add an event listener for the submit event inside the form
form.addEventListener('submit', function (e) {  
  e.preventDefault()  // Step 3: Prevent page reload on form submission

  // Get the height and weight values from inputs and convert them to numbers
  const height = parseInt(document.querySelector('#height').value)  
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  // Validate height input
  if (height === '' || height < 0 || isNaN(height)) {  
    results.innerHTML = `Please give a valid height ${height}`  // Display error message in the results div
  } 
  // Validate weight input
  else if (weight === '' || weight < 0 || isNaN(weight)) {  
    results.innerHTML = `Please give a valid weight ${weight}`  // Display error message in the results div
  }
  else {
    // Calculate BMI using the formula
    const BMI = (weight / ((height * height) / 10000)).toFixed(2)  
    results.innerHTML = `${BMI}`   // Show the raw BMI value (this will be replaced below with category)

    // Check BMI category and display message
    if (BMI < 18.5) {
      results.innerHTML = `Your BMI is <b>${BMI}</b> → Underweight (take care)`
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      results.innerHTML = `Your BMI is <b>${BMI}</b> → Normal range (perfect)`
    } else if (BMI >= 25 && BMI <= 29.9) {
      results.innerHTML = `Your BMI is <b>${BMI}</b> → Overweight (warning)`
    } else {
      results.innerHTML = `Your BMI is <b>${BMI}</b> → Obese (danger)`
    }
  }

})
