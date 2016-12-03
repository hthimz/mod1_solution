(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

//LunchCheckController. $inject =['$scope'];
fucntion LunchCheckController($scope) {
  $scope.Item="";
  $scope.message="";


  $scope.Check= function(){

    var temp= Result($scope.Item);
      $scope.message= temp;
  }

  function Result(string ){
    var coma= ' ,' ;
    var temp1= splitString(string , comma);
    if(temp1.length == 0){
      return "Please Enter the Data First" ;
    }
    else if (temp1.length > 3) {
      return "Too Much !";
        }
      else {
        return "Enjoy !" ;
      }
  }
}
});

})();
