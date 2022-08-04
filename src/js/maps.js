(function() {

     // logical Or

    const lat = document.querySelector('#lat').value || -32.9684028;
    const lng = document.querySelector('#lng').value || -68.876502;
    const mapa = L.map('mapa').setView([lat, lng ], 13);
    let marker

    // UTILIZAR PROVIDER Y GEOCODER

    const geocodeService = L.esri.Geocoding.geocodeService();

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);

    // el pin
    marker = new L.marker([lat, lng], {
        draggable: true,
        autoPan: true
    })
    .addTo(mapa)

    // detectar el movimiento del pin

    marker.on('moveend', function(e){
        marker = e.target

        const posicion = marker.getLatLng();
        mapa.panTo(new L.LatLng(posicion.lat, posicion.lng))

        // OBTENER INFORMACION DE LA CALLE  AL SOLTAR EL PIN 

        geocodeService.reverse().latlng(posicion, 13).run(function(error, resultado)  {
           // console.log(resultado)

            marker.bindPopup(resultado.address.LongLabel)

            //LLenar los campos
            document.querySelector('.calle').textContent = resultado?.address?.Address ?? '';
            document.querySelector('#calle').value = resultado?.address?.Address ?? '';
            document.querySelector('#lat').value = resultado?.latlng?.lat ?? '';
            document.querySelector('#lng').value = resultado?.latlng?.lng ?? '';
        })
    })


})()