// $.get('http://jsonplaceholder.typicode.com/posts', function(todos){
// 	console.log(todos);
// });

var name = $('p#name');

function getUserByName(username) {
	return new Promise(function(resolve,reject){
		 $.get('http://jsonplaceholder.typicode.com/users?username=' + username, function(users){
			 if(users.length) {
			 	resolve(users[0]);
			 	name.text(users[0].name);
			 	console.log("Success");
			} else {
				reject('User with name ' + username + 'not found');
			}
		 });
	})
}

getUserByName(username);



var loggedin = false;
		
// if (loggedin === true) {
// 	document.getElementById("login").style.display = "none";
// };

// document.getElementById("login").addEventListener("submit", myFunction);
// function myFunction() {
//   document.getElementById("login").style.display = "none";
// }
