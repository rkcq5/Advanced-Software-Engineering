var app = angular.module("myApp", [])


app.controller("loginController", function ($scope, $http, $httpParamSerializerJQLike) {
 var source;
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
    source =  sourcedata[i];
    alert("logged in");
 //location.href="p.html";
}
}   
});
}
$scope.register=function(){
location.href="register.html"; 
}
$scope.delete=function(username,password){
$http({
    method: 'DELETE',
    url : 'https://api.mongolab.com/api/1/databases/aseproject/collections/users/'+source._id.$oid+'?apiKey=56jTCYNFDRT3b7ebHGJ_suJCl0CbM2OQ',
//  
//    find: JSON.stringify({
////                name: username,
////                password: password,
//               // email: email
//       // type:'put'
//       // headers:{ 'Authorisation:' token:}
//            }),
    contentType: "application/json"
}).success(function(sourcedata) {
    alert("deleted");
});
}
})

