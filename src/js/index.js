window.addEventListener('load', function(e){

const searchForm = document.querySelector('.searchform');
const error = document.querySelector('.error');

searchForm.addEventListener('submit', function(e){
    e.preventDefault();
    const searchTerm = e.currentTarget.elements['searchTerm'].value;

const apiURL = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol='+ searchTerm + '&apikey=U7WRYXUILFNS25KA'

//fetching data from URL
async function getData(){
     const response = await fetch (apiURL);
     const data = await response.json();

//creating variables for specific data to view
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

     function addData(allData){
        const dataDisplay = document.querySelector('.display')
        //creating a template literal
        const template = `
        <div>
            <h3 id="symbol">Stock Symbol:${symbol}</h3>
            <ul>
                <li><b>Date: </b><span id="date">${date}</span></li>
                <li><b>Price: </b>$<span id="price">${price}</span></li>
                <li><b>High: </b>$<span id="high">${highest}</span></li>
                <li><b>Low: </b>$<span id="low">${lowest}</span></li>
                <li><b>Change Percent: </b><span id="change">${changePercent}</span></li>
            </ul>
        </div>
        `
        //creating a document fragment
        const dataFragment = document.createRange().createContextualFragment(template)
        const addData = dataFragment.querySelector('div')
        
        //adding data into the DOM
        dataDisplay.appendChild(addData)

        //error validation
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

})









