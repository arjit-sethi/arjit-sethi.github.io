function getRe(){
  var p = document.getElementById("myText5").value;
  var result;
  $.ajax({
            url: "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+p+"&apikey={Your API KEY Here}&outputsize=compact",
            dataType: "json",
            success: function(data) {
                var date = data["Meta Data"]["3. Last Refreshed"];
                result = data["Time Series (Daily)"][date]["4. close"];
                document.getElementById("stdat").innerHTML= "The price for this stock is "+result;
              }
        });
}
