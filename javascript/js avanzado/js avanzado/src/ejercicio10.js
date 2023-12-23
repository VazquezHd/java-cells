fetch('wall.png')
.then(function(response){
    if (response.ok) {
        response.blob().then(function(miBlob){
            var objectURL = URL.createobjectURL(miBlob);
            miImagen.src = objectURL;
        });
    } else {
        console.log('Respuesta de red OK');
    }
})
.catch(function(error){
    console.log('Hubo un problema con la peticion de Fetch:' + error.message);
})