var intialPrice = document.querySelector('#price1')
var noOfStocks = document.querySelector('#no-of-stocks')
var currentPrice = document.querySelector('#current-price')
var submitBtm = document.querySelector('#output-btn')
var OutputEl = document.querySelector('#output')

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
        var loss =financial((initial-current)*quantity)
        var lossPercent =financial((loss/initial)*100)
        OutputEl.style.color="Red"
        OutputEl.style.backgroundColor = "white"
        OutputEl.textContent=`Your loss is Rs.${loss} and ${lossPercent}%`
    }else if (current > initial){
        var profit = financial((current-initial)*quantity)
        var profitPercentage = financial((profit/initial)*100)
        OutputEl.style.color="green"
        OutputEl.style.backgroundColor = "white"
        OutputEl.textContent=(`Profit is Rs.${profit} and ${profitPercentage}%`)

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