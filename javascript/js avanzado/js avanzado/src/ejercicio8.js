fetch('https://httpbin.org/post',{
    method: 'POST',
    headers:{
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({"a":1 , "b": 2}),
    cache: 'no-cache'
})
.then(function(response){return response.json();
})
.then(function(data){
    console.log('data =' , data);
})
.catch(function(err){
    console.error(err);
})