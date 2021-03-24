var inserted = document.getElementById('myInput')
inserted.addEventListener('input', function(event){
    let converted = event.target.value

    let dollarValue = document.getElementById('dollarId')
    dollarValue.innerHTML = converted *365


    let poundValue = document.getElementById('poundsId')
    poundValue.innerHTML = converted *420

    let euroValue = document.getElementById('eurosId')
    euroValue.innerHTML = converted *440


    document.getElementById

})