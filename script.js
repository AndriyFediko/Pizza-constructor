let price = 0;
$(".categoryInner").hide();
$(".picInPizza").hide();
$("#cheese").click( function (){
    $(".categoryInner").hide();
    $("#cheeseOpen").toggle(100);
});
$("#meat").click( function (){
    $(".categoryInner").hide();
    $("#meatOpen").toggle(100);
});
$("#souses").click( function (){
    $(".categoryInner").hide();
    $("#sousesOpen").toggle(100);
});
$("#vegitables").click( function (){
    $(".categoryInner").hide(100);
    $("#vegitablesOpen").toggle(100);
});
$("#moreOptions").click( function (){
    $(".categoryInner").hide();
    $("#moreOptionsOpen").toggle(100);
});


$("#feta").click( function(){
    $("#fetaIngradient").hide();
    $("#fetaInPizza").show();
    price = price+30;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#fetaInPizza").click( function(){
    $("#fetaInPizza").hide();
    $("#fetaIngradient").show();
    price = price-30;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#blue").click( function(){
    $("#blueIngradient").hide();
    $("#blueInPizza").show();
    price = price+40;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#blueInPizza").click( function(){
    $("#blueInPizza").hide();
    $("#blueIngradient").show();
    price = price-40;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#parm").click( function(){
    $("#parmIngradient").hide();
    $("#parmInPizza").show();
    price = price+20;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#parmInPizza").click( function(){
    $("#parmInPizza").hide();
    $("#parmIngradient").show();
    price = price-20;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#cheder").click( function(){
    $("#chederIngradient").hide();
    $("#chederInPizza").show();
    price = price+25;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#chederInPizza").click( function(){
    $("#chederInPizza").hide();
    $("#chederIngradient").show();
    price = price-25;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#mozarella").click( function(){
    $("#mozarellaIngradient").hide();
    $("#mozarellaInPizza").show();
    price = price+35;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#mozarellaInPizza").click( function(){
    $("#mozarellaInPizza").hide();
    $("#mozarellaIngradient").show();
    price = price-35;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#chicken").click( function(){
    $("#chickenIngradient").hide();
    $("#chickenInPizza").show();
    price = price+65;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#chickenInPizza").click( function(){
    $("#chickenInPizza").hide();
    $("#chickenIngradient").show();
    price = price-65;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#becon").click( function(){
    $("#beconIngradient").hide();
    $("#beconInPizza").show();
    price = price+75;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#beconInPizza").click( function(){
    $("#beconInPizza").hide();
    $("#beconIngradient").show();
    price = price-75;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#shunka").click( function(){
    $("#shunkaIngradient").hide();
    $("#shunkaInPizza").show();
    price = price+95;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#shunkaInPizza").click( function(){
    $("#shunkaInPizza").hide();
    $("#shunkaIngradient").show();
    price = price-95;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#paperony").click( function(){
    $("#paperonyIngradient").hide();
    $("#paperonyInPizza").show();
    price = price+55;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#paperonyInPizza").click( function(){
    $("#paperonyInPizza").hide();
    $("#paperonyIngradient").show();
    price = price-55;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#alfredo").click( function(){
    $("#alfredoIngradient").hide();
    $("#alfredoInPizza").show();
    price = price+25;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#alfredoInPizza").click( function(){
    $("#alfredoInPizza").hide();
    $("#alfredoIngradient").show();
    price = price-25;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#barbeky").click( function(){
    $("#barbekyIngradient").hide();
    $("#barbekyInPizza").show();
    price = price+30;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#barbekyInPizza").click( function(){
    $("#barbekyInPizza").hide();
    $("#barbekyIngradient").show();
    price = price-30;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#garlick").click( function(){
    $("#garlickIngradient").hide();
    $("#garlickInPizza").show();
    price = price+15;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#garlickInPizza").click( function(){
    $("#garlickInPizza").hide();
    $("#garlickIngradient").show();
    price = price-15;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#corn").click( function(){
    $("#cornIngradient").hide();
    $("#cornInPizza").show();
    price = price+20;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#cornInPizza").click( function(){
    $("#cornInPizza").hide();
    $("#cornIngradient").show();
    price = price-20;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#pineapple").click( function(){
    $("#pineappleIngradient").hide();
    $("#pineappleInPizza").show();
    price = price+30;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#pineappleInPizza").click( function(){
    $("#pineappleInPizza").hide();
    $("#pineappleIngradient").show();
    price = price-30;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#tomato").click( function(){
    $("#tomatoIngradient").hide();
    $("#tomatoInPizza").show();
    price = price+40;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#tomatoInPizza").click( function(){
    $("#tomatoInPizza").hide();
    $("#tomatoIngradient").show();
    price = price-40;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#mushrooms").click( function(){
    $("#mushroomsIngradient").hide();
    $("#mushroomsInPizza").show();
    price = price+50;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#mushroomsInPizza").click( function(){
    $("#mushroomsInPizza").hide();
    $("#mushroomsIngradient").show();
    price = price-50;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#shpunat").click( function(){
    $("#shpunatIngradient").hide();
    $("#shpunatInPizza").show();
    price = price+10;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#shpunatInPizza").click( function(){
    $("#shpunatInPizza").hide();
    $("#shpunatIngradient").show();
    price = price-10;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#perets").click( function(){
    $("#peretsIngradient").hide();
    $("#peretsInPizza").show();
    price = price+25;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#peretsInPizza").click( function(){
    $("#peretsInPizza").hide();
    $("#peretsIngradient").show();
    price = price-25;
    $("#payBtn").text(`Оплатити ${price}грн`);
});
$("#payBtn").click( function(){
    window.print();
});