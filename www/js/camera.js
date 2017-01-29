(function(window){

    $('#take-picture').click(function() {
        $('#log').text('clicked');
        console.log('take picture');
        var cameraOptions = {
            quality: 100,
            destinationType: Camera.DestinationType.FILE_URI,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 200,
            targetHeight: 350
        };

        navigator.camera.getPicture(function(imageURI){

            var image = $('#photo');
            image.attr('src', imageURI);

        }, function(errorMessage){
            alert('The following error occured: ' + errorMessage)
        }, cameraOptions);

    });

})(window);