function initMap() {
    var Position;
    if ( $(window).width() > 768 || !window.matchMedia('screen and (max-width: 768px)').matches ){
        Position = {lat: 55.78940912, lng: 37.576};
    }else{
        Position = {lat: 55.78940912, lng: 37.58343029};
    }
    var Office = {lat: 55.78940912, lng: 37.58343029};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: Position,
        styles:[
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#2f2974"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "lightness": "0"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "gamma": 0.01
                    },
                    {
                        "lightness": "100"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "saturation": "30"
                    },
                    {
                        "lightness": "-60"
                    },
                    {
                        "weight": 2
                    },
                    {
                        "gamma": 0.8
                    },
                    {
                        "color": "#2f2974"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 30
                    },
                    {
                        "saturation": 30
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "saturation": 20
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 20
                    },
                    {
                        "saturation": -20
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 10
                    },
                    {
                        "saturation": -30
                    },
                    {
                        "color": "#2f2974"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "saturation": 25
                    },
                    {
                        "lightness": 25
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "lightness": -20
                    }
                ]
            }
        ]
    });
    image = '../img/sign.png';
    var marker = new google.maps.Marker({
        position: Office,
        map: map,
        icon: image,
        animation: google.maps.Animation.DROP
    });
}