
const apiURL = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=U7WRYXUILFNS25KA'

//getting stock data from URL
async function getData(){
     const response = await fetch (apiURL);
     const data = await response.json();

/*
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
         changePercent */
     }

     export default GetData;