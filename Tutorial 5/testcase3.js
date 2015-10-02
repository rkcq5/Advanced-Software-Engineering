describe('login',function(){
            it('username local storage',function(){
                var $scope = {}
                var controller =$controller('login',{$scope:$scope});
                expect(document.getElementById(demo).value).toEqual("welcome ravi");
                //expect("teja").toEqual(3);

});
})
