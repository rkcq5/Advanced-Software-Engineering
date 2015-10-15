var app = angular.module("myApp", [])


app.controller("deleteController", function ($scope, $http, $httpParamSerializerJQLike) {

    $scope.pageClass = 'delete';
$scope.delete = function(username) {
   console.log("inside login function");
$http({
    method: 'Delete',
    url : 'https://api.mongolab.com/api/1/databases/aseproject/collections/users?apiKey=56jTCYNFDRT3b7ebHGJ_suJCl0CbM2OQ',
    find: JSON.stringify({
                name: username,
                //password: password,
               // email: email
            }),
    contentType: "application/json"
}).success(function(sourcedata) {
  for(var i=0;i<sourcedata.length;i++)
{   
if(sourcedata[i].name==username)
{
 $scope.userName =sourcedata[i].name;
alert($scope.userName);
    $scope.password =sourcedata[i].password;
    $scope.email =sourcedata[i].email;
 }}   
    $scope.msg ="User created successfully";
        })
}
    
});  