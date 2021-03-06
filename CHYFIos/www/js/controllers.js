angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('loginCtrl', function($scope, $http, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.loginData = {};

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
//     var  postData = {

//             "password": $scope.password,
//             "username": $scope.username
//           };

//   $http.post('http://login_URL', postData)
//   .success(function(data) {
//     alert("SUCCESS")
//     $state.go('tab');
//   })
//   .error(function(data) {
//     alert("ERROR");
// }); }  
    $state.go('main.tab');
  };

  $scope.doForgetPw = function() {
    console.log('Doing ForgetPw');
    $state.go('forgetPw');
  };
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('resetPwCtrl', function($scope, $http, $state) {

  
  $scope.email = {};
  $scope.doResetPw = function() {
    console.log('Doing ResetPw', $scope.email);
//     var  postData = {

//             "password": $scope.password,
//             "username": $scope.username
//           };

//   $http.post('http://login_URL', postData)
//   .success(function(data) {
//     alert("SUCCESS")
//     $state.go('tab');
//   })
//   .error(function(data) {
//     alert("ERROR");
// }); }  
    $state.go('login');
  };
  $scope.backToLogin = function() {
    console.log("back to login");
    $state.go('login');
  };

})

.controller('registerCtrl', function($scope, $http, $state) {

  
  $scope.userInfo= {};
  $scope.doResgister = function() {
    console.log('Registering', $scope.userInfo);
//     var  postData = {

//             "password": $scope.password,
//             "username": $scope.username
//           };

//   $http.post('http://login_URL', postData)
//   .success(function(data) {
//     alert("SUCCESS")
//     $state.go('tab');
//   })
//   .error(function(data) {
//     alert("ERROR");
// }); }  
    $state.go('main.tab');
  };
  $scope.backToLogin = function() {
    console.log("back to login");
    $state.go('login');
  };

});
