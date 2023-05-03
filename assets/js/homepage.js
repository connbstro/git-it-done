// const getUserRepos = function() {
//     const response = fetch("https://api.github.com/users/octocat/repos");
//     console.log(response);
// };

// getUserRepos();

// fetch("https://api.github.com/users/octocat/repos").then(function(response) {
//   console.log("inside", response);
// });

// console.log("outside");

// fetch("https://api.github.com/users/octocat/repos").then(function (response) {
//   response.json().then(function (data) {
//     console.log(data);
//   });
// });

const getUserRepos = function (user) {
  // format the github api url
  const apiUrl = "https://api.github.com/users/" + user + "/repos";

  // make a request to the url
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
  });
};

// getUserRepos("microsoft");
getUserRepos("facebook");
