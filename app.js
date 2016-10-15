console.log('Hi!');

function dispGitHubOrgs(orglist) {
  console.log("gitHubOrgs Obj: ", orglist);
}

function getGithubOrgs() {
  let gitHubOrgs = $.get('https://api.github.com/users/jisaacks/orgs')
      .done(function(data) {
        console.log("gitHubOrgs Obj: ", data);
        dispGitHubOrgs(data);
      });
}


// function getGithubOrgs() {
//   console.log('getGithubOrgs button pressed!');
//   httpRequest = new XMLHttpRequest();
//   httpRequest.onreadystatechange = reactToResponse;
//   httpRequest.open('GET', 'https://randomuser.me/api/');
//   httpRequest.send();
//   }
//
//
//
//   var httpRequest = {};
//
// // This will grab a fictional person’s information from the "Random User" API
// function getSomeData() {
//   httpRequest = new XMLHttpRequest();
//   httpRequest.onreadystatechange = reactToResponse;
//   httpRequest.open('GET', 'https://randomuser.me/api/');
//   httpRequest.send();
// }

// We'll log out all the data we get in response to our request, as long as it's successful.
// function reactToResponse() {
//   if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
//     console.log(httpRequest.responseText);
//   }
// }
//
// }
