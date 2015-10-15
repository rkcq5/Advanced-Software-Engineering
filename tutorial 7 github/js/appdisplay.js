var app = angular.module("myApp", [])


app.controller("displayController", function ($scope, $http, $httpParamSerializerJQLike) {

    $scope.pageClass = 'display';
//$scope.register=function(){
//location.href="register.html"; 
//}
    $scope.display = function(username) {
   console.log("inside display function");
$http({
    method: 'get',
    url : 'https://api.mongolab.com/api/1/databases/aseproject/collections/users?apiKey=56jTCYNFDRT3b7ebHGJ_suJCl0CbM2OQ',
    find: JSON.stringify({
                name: username,
               // password: password,
               // email: email
            }),
    contentType: "application/json"
}).success(function(sourcedata) {
  for(var i=0;i<sourcedata.length;i++)
{   
if(sourcedata[i].name==username)
{
 displaydetails.innerHTML = "userName : "+ sourcedata[i].name +"<br> fullname : "+sourcedata[i].fullname+"<br> email : "+sourcedata[i].email+"";
//    $scope.password ="";
//$scope.fullName="";
//    $scope.email ="";
}
}   
})
}
 


});  