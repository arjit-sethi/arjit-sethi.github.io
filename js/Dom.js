function getResults(){
  var x = document.getElementById("myText1").value;
  var y = document.getElementById("myText2").value;
  var result;
  $.ajax({
            url: "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency="+x+"&to_currency="+y+"&apikey={Your API KEY Here}",
            dataType: "json",
            success: function(data) {
                result = data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
                document.getElementById("fromcurr").innerHTML="1 "+x.toUpperCase()+"="+result+" "+y.toUpperCase();
            }
        });
}
