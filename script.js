  <script>
    // step1...form ko target kya "selectorAll" nh lgaya q ki yaha ek hi form h
    const form = document.querySelector('.form')

    //step2...imp things is that adding eventListener q ki event hi to hoga or "form ke andar hoga"
    form.addEventListener('submit', function (e) {  //submit hota h input lene ke lye ye rule h
      e.preventDefault()  //step3.....page reload hone se rokna

      const height = parseInt(document.querySelector('#height').value)  //parseInt convert string to num means "42" to 42 q ki html hamesa input(string/number/any) ko string ke trah create krta h
      const weight = parseInt(document.querySelector('#weight').value)
      const results = document.querySelector('#results')


      if (height === '' || height < 0 || isNaN(height)) {  //isNan(height) means height number mei convertable h to true hoga
        results.innerHTML = `Please give a valid height ${height}`  //Yani tu variable results ke through HTML ke div#results ke andar ka content change kar raha hai. yani ab <div id="result"></div> ab ban gaya h <div id="result">please give a valid height</div>
      } else if (weight === '' || weight < 0 || isNaN(weight)) {  //isNan(height) means height number mei convertable h to true hoga
        results.innerHTML = `Please give a valid weight ${weight}`  //ye sout mei n dete the to n changeable hota tha waisa hi h
      }
      else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2)  //formula, its math part
        //show the result
        results.innerHTML = `${BMI}`   //ye changeable h value ke according like System.out.println("sas"+n+"sas")


        // Condition check
        if (BMI < 18.5) {
          results.innerHTML = `Your BMI is <b>${BMI}</b> → Underweight(care urself)`;
        } else if (BMI >= 18.5 && BMI <= 24.9) {
          results.innerHTML = `Your BMI is <b>${BMI}</b> → Normal range(perfect)`;
        } else if (BMI >= 25 && BMI <= 29.9) {
          results.innerHTML = `Your BMI is <b>${BMI}</b> → Overweight(warning)`;
        } else {
          results.innerHTML = `Your BMI is <b>${BMI}</b> → Obese(danger)`;
        }
      }

    })



  </script>
