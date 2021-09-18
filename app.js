var intialPrice = document.querySelector('#price1')
var noOfStocks = document.querySelector('#no-of-stocks')
var currentPrice = document.querySelector('#current-price')
var submitBtm = document.querySelector('#output-btn')
var OutputEl = document.querySelector('#output')


function calculateProfitLoss(initial,quantity,current){
    if(initial> current){
        var loss = (initial-current)*quantity
        var lossPercent = (loss/initial)*100
    }else if (current > initial){
        var profit = (current-initial)*quantity
        var profitPercentage = (profit/initial)*100
        console.log(`profit is ${profit} and ${profitPercentage}`)

    }
    else{

    }

}
calculateProfitLoss(10,10,12)