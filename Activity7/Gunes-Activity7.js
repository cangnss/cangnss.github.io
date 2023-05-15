var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) {
  return document.getElementById(id);
};

window.onload = function () {
  $("display_results").onclick = displayResults;
  $("display_scores").onclick = displayScores;
  $("add").onclick = addScore;
};

function displayResults() {
  var average = 0;
  var highestScore = 0;
  var highestName = "";
  for (var i = 0; i < scores.length; i++) {
    average = (average * i + scores[i]) / (i + 1);
    if (scores[i] > highestScore) {
      highestScore = scores[i];
      highestName = names[i];
    }
  }

  document.getElementById("results").innerHTML =
    "<h2> Results </h2><br /> Average score is " +
    average +
    "<br ><h2>"+ highestName +" with a score of " +
    highestScore +
    "";
}

function displayScores() {
  const table = $("scores_table");
  var rows = "";
  for (var i = 0; i < names.length; i++) {
    rows += `
		<tr class="row-text">
		  <td>${names[i]}</td>
		  <td>${scores[i]}</td>
		</tr>
	  `;
  }
  table.innerHTML = `
	  <tr class="row-text">
      <th>Name</th>
      <th>Score</th>
	  </tr>
	  ${rows}
	`;
}

function addScore() {
  const nameInput = $("name");
  const scoreInput = $("score");

  // Validate the inputs
  const name = nameInput.value;
  const score = parseInt(scoreInput.value);
  if (name === "" || isNaN(score) || score < 0 || score > 100) {
    alert("You must enter a name and a valid score");
    return;
  }

  // Add the new name and score to the arrays
  names.push(name);
  scores.push(score);

  // Reset the inputs and move the cursor to the name field
  nameInput.value = "";
  scoreInput.value = "";
  nameInput.focus();
}
