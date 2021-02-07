//import results from './views/results-view.js';
//import getData from './models/stock-data.js';

//CONTROLLER -- event listeners
const searchForm = document.querySelector('.searchform');
const error = document.querySelector('.error');

searchForm.addEventListener('submit', function(e){
    e.preventDefault();
    const searchTerm = e.currentTarget.elements['searchTerm'].value;
    console.log(searchTerm)
    let store=[]

    //MODEL
const apiURL = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol='+ searchTerm + '&apikey=U7WRYXUILFNS25KA'

//getting stock data from URL
async function getData(){
     const response = await fetch (apiURL);
     const data = await response.json();

     //CONTROLLER?
     var symbol = data["Global Quote"]["01. symbol"];
     var date = data["Global Quote"]["07. latest trading day"];
     var price = data["Global Quote"]["05. price"];
     var highest = data["Global Quote"]["03. high"];
     var lowest = data["Global Quote"]["04. low"];
     var changePercent = data["Global Quote"]["10. change percent"];

     const allData = {
         symbol,
         date,
         price,
         highest,
         lowest,
         changePercent
     }
     store = allData;
     console.log(store)

     function addData(allData){
        const dataDisplay = document.querySelector('.display')
        
        const template = `
        <div>
            <h3 id="symbol">Stock Symbol:${symbol}</h3>
            <ul>
                <li>Date:<span id="date">${date}</span></li>
                <li>Price:<span id="price">${price}</span></li>
                <li>High:<span id="high">${highest}</span></li>
                <li>Low:<span id="low">${lowest}</span></li>
                <li>Change Percent:<span id="change">${changePercent}</span></li>
            </ul>
        </div>
        `
        //creating a document fragment
        const dataFragment = document.createRange().createContextualFragment(template)
        const addData = dataFragment.querySelector('div')
        
        //adding data into the DOM
        dataDisplay.appendChild(addData)

        //validation
        if (symbol === undefined){
            error.innerHTML = "Enter a valid symbol"
            dataDisplay.removeChild(addData)
        } else{
            error.innerHTML = "";
        }
    }
 return addData();

 }
  return getData();

})









