"use strict";angular.module("transitApp.home",["ngRoute"]).config(["$routeProvider",function(t){t.when("/home",{templateUrl:"home/home.html",controller:"HomeCtrl"})}]).controller("HomeCtrl",["$scope","$http",function(t,e){function n(){return new Promise(function(t,n){e.get("../data/test.json").success(function(e){t(e)})})}function o(t){return new Promise(function(e,n){$.getJSON(t).done(function(t){e(t)}).fail(function(t,e,o){n(e+o.message)})})}t.name="julia",n().then(function(e){console.log(e[0]["Station Name"]),t.stations=e,t.$apply()}),t.findStops=function(){var e=t.stationsValue1["Station Name"],n=t.stationsValue2["Station Name"];o("http://www3.septa.org/hackathon/NextToArrive/?req1="+e+"&req2="+n+"&req3=5&callback=?").then(function(o){0!=o.length?(t.header=["Train#","Line","Departs","Arrives","Connect At","Status"],t.allStops=o,t.from=e,t.to=n,console.log(o)):t.message="There are not trains between this stations",t.$apply()})}}]);