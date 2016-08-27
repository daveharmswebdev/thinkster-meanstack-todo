'use strict'
var app = angular.module('flapperNews', [])

app.controller('MainCtrl', ['$scope', ($scope) => {
  $scope.test = 'Hello World'

  $scope.posts = [
    {title: 'post1', upvotes:5},
    {title: 'post2', upvotes:2},
    {title: 'post3', upvotes:12},
    {title: 'post4', upvotes:9},
    {title: 'post5', upvotes:4}
  ]

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
