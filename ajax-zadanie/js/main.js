function ajax(ajaxParams) {
    var parameters = {
        type:       ajaxParams.type      || "POST",
        url:        ajaxParams.url       || "",
        onError:    ajaxParams.onError   || function () {},
        onSuccess:  ajaxParams.onSuccess || function () {},
        dataType:   ajaxParams.dataType  || "text"
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
}; //end of function ajax



function getData(event){
    ajax({
            type: "GET",
            url:  "http://echo.jsontest.com/imie/Piotr/nazwisko/Lewinski/zawod/Programista/firma/Akademia108",
            onError:    function () {console.log("No connection!")},
            onSuccess:  function(response) {
                        
                
                        var jsonObject = JSON.parse(response);
                                            
                        if(document.getElementById("data") == null){
                            var container = document.createElement("div");
                            container.id = "data";
                            
                            document.body.insertBefore(container, document.getElementById("moj-guzik").nextSibling)
                        }
                 
                        var userName = document.createElement("p");
                        userName.innerText = "Name: " + jsonObject.imie;
                
                        var userProfession = document.createElement("p");
                        userProfession.innerText = "Profession: " + jsonObject.zawod;

                        var userLastName = document.createElement("p");
                        userLastName.innerText = "Last Name: " + jsonObject.nazwisko;
                
                        var company = document.createElement("p");
                        company.innerText = "Company: " + jsonObject.firma;
                        
                        var newLine = document.createElement("p");
                        newLine.innerText = "__________________________________";
                        
                        document.getElementById("data").appendChild(userName);
                        document.getElementById("data").appendChild(userProfession);
                        document.getElementById("data").appendChild(userLastName);
                        document.getElementById("data").appendChild(company);
                
                        document.getElementById("data").appendChild(newLine);
            }
    });  
};

//Function call
document.getElementById("moj-guzik").addEventListener("click", getData);