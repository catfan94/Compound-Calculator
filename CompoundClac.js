
function calculate(){
    const totalAmount = document.getElementById("total-amount");
    const principleInput = document.getElementById("principle");
    const rateInput = document.getElementById("rate");
    const yearsInput = document.getElementById("years");


    let principle = Number(principleInput.value);
    let rate = Number(rateInput.value / 100);
    let years = Number(yearsInput.value); 

    if(principle < 0 /*|| isNaN(principle) for text only*/){
        principle = 0;
        //principleInput.value = 0; for text only
    }

    if(rate < 0 /*|| isNaN(rate) for text only*/){
        rate = 0;
        //rateInput.value = 0; for text only
    }

    if(years < 0 /*|| isNaN(years) for text only*/){
        years = 0;
        //yearsInput.value = 0; for text only
    }

    const result = principle * Math.pow((1 + rate / 1), 1 * years);

    totalAmount.textContent = result.toLocaleString(undefined, {style: "currency", currency: "USD"});
}