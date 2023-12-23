function getReq(url) {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        
        request.addEventListener('load', () => {
            console.log('En el listener de load...');
            if (request.status === 200) {
                resolve(request.response);
            } else {
                reject(request.statusText);
            }
        });

        request.addEventListener('error', () => {
            console.log('En el listener de error...');
            reject("Error de red");
        });

        request.open('GET', url);
        request.send();
    });
}

getReq('./persona.json')
    .then(res => {
        return JSON.parse(res);
    })
    .then(json => {
        console.log(json);
    })
    .catch(error => {
        console.log(error);
    });

    var json = {result: true , "count":42};
    obj = JSON.parse(json);
    
    console.log(obj.count);
    
    console.log(obj.result)