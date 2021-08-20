var is_triggered = false; 
var my_trigger_price = 5.9;
function make_my_profit(){
    if(is_triggered === false)
    {
        var mkprice  = document.getElementById("mkprice").innerHTML;
        mkprice = parseFloat(mkprice.replace(/[^0-9.]/g, ''));
        if(mkprice <= my_trigger_price )
        {
            var ipshare = document.getElementById('inputShare');
            ipshare.focus();
            ipshare.value = 3;
            console.log('Order Executed as you set.');
            alert("Parameter matched.");
            is_triggered = true;
        }
    }
}
