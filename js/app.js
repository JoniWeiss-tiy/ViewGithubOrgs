console.log('Hi!');

function displayOutput(orgListOutput) {
  document.querySelector('#output').innerHTML = orgListOutput;
}

function buildOrgOutput(orglist) {
  console.log("gitHubOrgs Obj: ", orglist);
  let outputMsg = '';
  for (var i = 0; i < orglist.length; i++) {
    for (el in orglist[i]) {
      if (el === 'login') {
        console.log("GutHub Organization: " + orglist[i][el]);
        outputMsg += "<h3>" + orglist[i][el] + "</h3><br />";
      }
      if (el === 'url') {
        console.log("Github API URL: " + orglist[i][el]);
        outputMsg += "<p><a href=\'" + orglist[i][el] + "\' target='_blank'>" + orglist[i][el] + "</a></p><br /><br />";
      }
    }
  }
  displayOutput(outputMsg);
}

function getGithubOrgs() {
  let gitHubOrgs = $.get('https://api.github.com/users/jisaacks/orgs')
      .done(function(data) {
        console.log("gitHubOrgs Obj: ", data);
        buildOrgOutput(data);
      });
}
