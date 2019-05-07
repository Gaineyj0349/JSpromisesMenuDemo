//this method wIDll return the object IDn the document wIDth the given ID
function O(ID) {
    return typeof ID == 'object' ? ID : document.getElementById(ID)
}

//this method wIDll return the access to the style wIDth the given ID
function S(ID) {
    return O(ID).style
}

//this method wIDll return the access to the class wIDth the given ID
function C(ID) {
    return document.getElementsByClassName(ID)
}


function AsyncRequest()
{
    try
    {
        var request = new XMLHttpRequest()
    }
    catch(e1)
    {
        try
        {
            request = new ActiveXObject("Msxml2.XMLHTTP")
        }
        catch(e2)
        {
            try
            {
                request = new ActiveXObject("Microsoft.XMLHTTP")
            }
            catch(e3)
            {
                request = false
            }
        }
    }
    return request
}


function getJSONArray(jsonFile) {
    return new Promise((resolve, reject) => {
        let request = new AsyncRequest();
        request.onload = function(){
            try{
                if (this.readyState == 4 && this.status == 200) {
                    resolve(JSON.parse(this.responseText));
                }else{
                    reject(this.status + " " + this.statusText)
                }
            }catch (error) {
                reject(error.message)
            }
        };

        request.onerror = function(){
            reject(this.status + " " + this.statusText)
        };

        request.open("GET", jsonFile, true);
        request.send();
    });
}

