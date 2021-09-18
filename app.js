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

function financial(x){
    return Number.parseFloat(x).toFixed(2)
}


function calculateProfitLoss(initial,quantity,current){
     
    if(initial> current){
        var loss =financial((initial-current)*quantity)
        var lossPercent =financial((loss/initial)*100)
        OutputEl.textContent=`Your loss is Rs.${loss} and ${lossPercent}%`
    }else if (current > initial){
        var profit = financial((current-initial)*quantity)
        var profitPercentage = financial((profit/initial)*100)
        OutputEl.textContent=(`profit is Rs.${profit} and ${profitPercentage}%`)

    }
    else{
        OutputEl.textContent= `You are still there !!`

    }

}

submitBtm.addEventListener('click',submitHandle)