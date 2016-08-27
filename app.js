'use strict'
var app = angular.module('flapperNews', ['ui-router'])

app.factory('posts', [ () => {
  let o = {
    posts: []
  }
  return o
}])

app.controller('MainCtrl', ['$scope', 'posts', ($scope, posts) => {
  $scope.test = 'Hello World'

  $scope.posts = posts.posts
  // $scope.posts = [
  //   {title: 'post1', upvotes:5},
  //   {title: 'post2', upvotes:2},
  //   {title: 'post3', upvotes:12},
  //   {title: 'post4', upvotes:9},
  //   {title: 'post5', upvotes:4}
  // ]

  $scope.addPost = function() {
    if (!$scope.title || $scope.title === '') {return}
    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      upvotes: 0})
    $scope.title = ''
    $scope.link = ''
  }

  $scope.incrementUpvotes = (post) => {
    post.upvotes += 1
  }
}])

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  ($stateProvider, $urlRouterProvider) => {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home.html',
        controller: 'MainCtrl'
      })

    $urlRouterProvider.otherwise('home')
  }
])
