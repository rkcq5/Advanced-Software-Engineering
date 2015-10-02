var app =angular.module('username',[]);

app.controller('mycontroller',function($scope){

    $scope.username=function(name){
    return name; 
    }

});

describe('mycontroller',function(){
beforeEach(module('username'));
    var $controller;
    
    beforeEach(inject(function(_$controller_){
        $controller=_$controller_;
    }));
    
        describe('username',function(){
            it('Tests username of mycontroller',function(){
                var $scope = {}
                var controller =$controller('mycontroller',{$scope:$scope});
                expect($scope.username('ravi')).toEqual('ravi');
                expect($scope.username('teja')).toEqual('teja');

});
});
})

                 
