//AJAX

function ajax(ajaxParams) {
    var parameters = {
        type: ajaxParams.type || "POST",
        url: ajaxParams.url || "",
        onError: ajaxParams.onError || function () {},
        onSuccess: ajaxParams.onSuccess || function () {},
        dataType: ajaxParams.dataType || "text"
    };

    function httpSuccess(httpRequest) {
        try {
            return ((httpRequest.status >= 200 && httpRequest.status < 300) ||
                httpRequest.status == 304 ||
                (httpRequest.userAgent.indexOf("Safari") >= 0 &&
                    typeof httpRequest.status == "undefined"));
        } catch (err) {
            return false;
        }
    };

    var httpReq = new XMLHttpRequest();
    httpReq.open(ajaxParams.type,
        ajaxParams.url,
        true);

    httpReq.onreadystatechange = function () {
        if (httpReq.readyState == 4) {
            if (httpSuccess(httpReq)) {
                var returnedData = (ajaxParams.dataType == "XML") ? httpReq.responseXML : httpReq.responseText;
                ajaxParams.onSuccess(returnedData);
                httpReq = null;
            } else {
                ajaxParams.onError(httpReq.statusText);
            }
        };
    };
    httpReq.send();
}; //koniec AJAXa


$(function () {

    function getDataExchange() {

        var interval = null;

        var buyArrow = $('#buy-arrow');
        var currentBuyPrice = parseFloat($('#buy').html());
        console.log(currentBuyPrice);

        var sellArrow = $('#sell-arrow');
        var currentSellPrice = parseFloat($('#sell').html());
        console.log(currentSellPrice);

        $.getJSON("https://blockchain.info/pl/ticker", function (data) {
            console.log(data);
            console.log(data.PLN.buy);
            console.log(data.PLN.sell);

            $("#buy").html(data.PLN.buy);
            $("#sell").html(data.PLN.sell);


            if (currentBuyPrice < parseFloat(data.PLN.buy)) {
                buyArrow.css('color', 'green').removeClass().addClass('fa fa-arrow-up');
                console.log("wzrost");
            } else if (currentBuyPrice > parseFloat(data.PLN.buy)) {
                buyArrow.css('color', 'red').removeClass().addClass('fa fa-arrow-down');
                console.log("spadek");
            } else {
                buyArrow.css('color', 'black').removeClass().addClass('fa fa-minus-square-o');
                console.log("nic");
            }

            if (currentSellPrice < parseFloat(data.PLN.sell)) {
                sellArrow.css('color', 'green').removeClass().addClass('fa fa-arrow-up');
                console.log("wzrost");
            } else if (currentSellPrice > parseFloat(data.PLN.sell)) {
                sellArrow.css('color', 'red').removeClass().addClass('fa fa-arrow-down');
                console.log("spadek");
            } else {
                sellArrow.css('color', 'black').removeClass().addClass('fa fa-minus-square-o');
                console.log("nic");
            }
            console.log('test czasu');
        });

    }

    getDataExchange();
    interval = setInterval(getDataExchange, 5000);

    $('.control-button').click('on', function () {
        clearInterval(interval);

        interval = setInterval(getDataExchange, $(this).val());
        $('#refresh-frequency').html($(this).text());
    });
});