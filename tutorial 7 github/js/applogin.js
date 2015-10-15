var app = angular.module("myApp", [])


app.controller("loginController", function ($scope, $http, $httpParamSerializerJQLike) {

    $scope.pageClass = 'login';
$scope.login = function(username,password) {
   console.log("inside login function");
$http({
    method: 'get',
    url : 'https://api.mongolab.com/api/1/databases/aseproject/collections/users?apiKey=56jTCYNFDRT3b7ebHGJ_suJCl0CbM2OQ',
    find: JSON.stringify({
                name: username,
                password: password,
               // email: email
            }),
    contentType: "application/json"
}).success(function(sourcedata) {
  for(var i=0;i<sourcedata.length;i++)
{   
if(sourcedata[i].name==username && sourcedata[i].password == password)
{
 location.href="p.html";
}
}   
})
}
 
$scope.register=function(){
location.href="register.html"; 
}

});  