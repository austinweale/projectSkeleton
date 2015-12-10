var urlBase = "http://api.bandsintown.com/artists/"
var urlEnd = "/events.json?callback=?&app_id=tour"


var myApp = angular.module('myApp', [])

var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
    $scope.data = []
    $scope.band = "american football"; //Just initialized it to a band I knew was touring
    

    //sends a request based on the band name to get the tour info from the
    //bandsintown API
    $scope.getData = function(){
        $scope.data = [];

        $.getJSON(urlBase + $scope.band + urlEnd, function(result) {
            $scope.processEvents(result);
        });
        
    }

    //Goes through the list of event objects given back from the request and makes 
    //new event objects to populate $scope.data
    $scope.processEvents = function(results){

        for(var i = 0; i < results.length; i++){
            var current = results[i].venue;
            var eventName = current.name;
            var latitude = current.latitude;
            var longitude = current.longitude;
            var eventObject = {
                name: eventName,
                lat: latitude,
                lon: longitude
            }
            $scope.data.push(eventObject);
            $scope.$apply();
            console.log()
            console.log(eventObject);
        }

    }

});