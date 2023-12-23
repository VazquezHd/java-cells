fetch('https://httpbin.org/ip')
    .then(function(response) {
        console.log('response.body =', response.body);
        console.log('response.bodyUsed =', response.bodyUsed);
        console.log('response.headers =', response.headers);
        console.log('response.ok =', response.ok);
        console.log('response.status =', response.status);
        console.log('response.statusText =', response.statusText);
        console.log('response.type =', response.type);
        console.log('response.url =', response.url);
        return response.json();
    })
    .then(function(data) {
        console.log('data =', data);
    })
    .catch(function(err) {
        console.error(err);
    });