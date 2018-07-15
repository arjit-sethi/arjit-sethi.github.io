function getRes(){
  var a = document.getElementById("myText3").value;
  var b = document.getElementById("myText4").value;
  var result;
  var dat = [];
  $.ajax({
            url: "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol="+a+"&market="+b+"&apikey={Your API KEY Here}",
            dataType: "json",
            success: function(data) {
                var disp="4a. close ("+b.toUpperCase()+")";
                var date=data["Meta Data"]["6. Last Refreshed"];
                dat=date.split(" ");
                var r = dat[0];
                result = data["Time Series (Digital Currency Daily)"][r][disp];
                document.getElementById("dat").innerHTML= "1 "+a+" = "+result+" "+b;
              }
        });
}
