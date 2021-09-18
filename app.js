var intialPrice = document.querySelector('#price1')
var noOfStocks = document.querySelector('#no-of-stocks')
var currentPrice = document.querySelector('#current-price')
var submitBtm = document.querySelector('#output-btn')
var OutputEl = document.querySelector('#output')

function submitHandle(){
    var ip = intialPrice.value
    var nos= noOfStocks.value
    var cp = currentPrice.value
    calculateProfitLoss(ip,nos,cp)
}


function calculateProfitLoss(initial,quantity,current){
     
    if(initial> current){
        var loss = (initial-current)*quantity
        var lossPercent = (loss/initial)*100
        OutputEl.textContent=`Your loss is Rs.${loss} and ${lossPercent}%`
    }else if (current > initial){
        var profit = (current-initial)*quantity
        var profitPercentage = (profit/initial)*100
        OutputEl.textContent=(`profit is Rs.${profit} and ${profitPercentage}%`)

    }
    else{
        OutputEl.textContent= `You are still there !!`

    }

}

submitBtm.addEventListener('click',submitHandle)