angular.module("lnr",["ui.router","ngMaterial","luegg.directives","lnr.controllers","lnr.services"]);var lnrControllers=angular.module("lnr.controllers",[]);lnrControllers.controller("lnrChat",["$scope","messageProcessor",function(a,b){function c(a,b){return b.message_thread.push({message:a.message,date:a.date,sender:a.sender.name})}a.title="Laura and Rob",a.userTyping={},a.users=[{name:"Laura",position:"Marketing Manager",location:"Sydney, Australia",message:"",message_thread:[]},{name:"Bob",position:"CEO",location:"Strasbourg, France",message:"",message_thread:[]}],a.submitNewMessage=function(d){var e={date:new Date,message:d.message,sender:d},f=new b.updateMessageThread(e);f.promise.then(function(b){angular.forEach(a.users,function(a){c(b,a),a.message=""})},function(a){console.log("error")})},a.userIsTyping=function(b,c){c?a.userTyping=a.users[b]:a.userTyping={}}}]);var lnrServices=angular.module("lnr.services",[]);lnrServices.factory("messageProcessor",["$q","$timeout",function(a,b){var c={};return c.updateMessageThread=function(c){var d=a.defer();return b(function(){d.resolve(c)},500),d},c}]);