var intialPrice = document.querySelector('#price1')
var noOfStocks = document.querySelector('#no-of-stocks')
var currentPrice = document.querySelector('#current-price')
var submitBtm = document.querySelector('#output-btn')
var OutputEl = document.querySelector('#output')

intialPrice.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || (e.keyCode == 8)
      || (e.keyCode == 110)
      || e.keyCode == 190)) {
        return false;
    }
}

currentPrice.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || (e.keyCode == 8)
      || (e.keyCode == 110)
      || e.keyCode == 190)) {
        return false;
    }
}

noOfStocks.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    }
}


function submitHandle(){
    var ip =Number( intialPrice.value)
    var nos=Number( noOfStocks.value)
    var cp = Number(currentPrice.value)
    calculateProfitLoss(ip,nos,cp)
}

function financial(x){
    return Number.parseFloat(x).toFixed(2)
}


function calculateProfitLoss(initial,quantity,current){
    
    if(intialPrice.value!=""&& noOfStocks.value!=""&&currentPrice!=""){
     
    if(initial> current){
        var loss =financial(((initial*quantity)-(current*quantity)))
        var lossPercent =financial((loss/(initial*quantity))*100)
        OutputEl.style.color="Red"
        OutputEl.style.backgroundColor = "white"
        OutputEl.textContent=`The invested amount is ${(initial*quantity)} Your loss is Rs.${loss} and ${lossPercent}%`
    }else if (current > initial){
        var profit = financial(((current*quantity)-(initial*quantity)))
        var profitPercentage = financial((profit/(initial*quantity))*100)
        OutputEl.style.color="green"
        OutputEl.style.backgroundColor = "white"
        OutputEl.textContent=(`The invested amount is ${(initial*quantity)}Profit is Rs.${profit} and ${profitPercentage}%`)

    }
    else{
        OutputEl.textContent= `You are still there !!`

    }
}

else{
    OutputEl.textContent =`ENTER ALL VALAUES!! `
}

}

submitBtm.addEventListener('click',submitHandle)