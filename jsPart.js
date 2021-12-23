//Function to calculate tip
function calculateTip() {
  //variables to store input values
  let billAmt = Number(document.getElementById("billamt").value);
  let tipPerc = Number(document.getElementById("tipamt").value);
  let numOfPeople = Number(document.getElementById("peopleamt").value);

  // variable to calculate tip amount from tip percentage
  let tipAmt = (tipPerc / 100) * billAmt;

  //variable to store error message
  const message = document.getElementById("billError");
  message.innerHTML = "";

  //variable to store bill amount per person
  const amount_Per_Person = document.getElementById("total");
  amount_Per_Person.innerHTML = "";

  //variable to store tip amount per person
  const tip_Per_Person = document.getElementById("tip");
  tip_Per_Person.innerHTML = "";

  try {
    if (!(Number.isInteger(billAmt)) || billAmt < 1)
      throw " Bill Amount must be greater than 0 and should not be a decimal value";
    {
      if (!(Number.isInteger(tipPerc) && tipPerc >= 5 && tipPerc <= 30))
        throw "Tip must be between (5-30)% and should not be a decimal value";
      {
        if (!(Number.isInteger(numOfPeople) && numOfPeople > 0))
          throw "Number of people must be greater than 0 and should not be a decimal value";
        {
          //Calculate tip amount per person
          let tempVar_a = tipAmt / numOfPeople;
          let tip = tempVar_a.toFixed(2);

          //Calculate total amount per person
          let tempVar_b = (billAmt + tipAmt) / numOfPeople;
          let total = tempVar_b.toFixed(2);

          //Display the tip amount and bill amount
          tip_Per_Person.innerHTML = "Tip per person: " + tip + " Rupees";
          amount_Per_Person.innerHTML =
            "Total per person: " + total + " Rupees";
        }
      }
    }
  } catch (err) {
    message.innerHTML = err;
  }
}
