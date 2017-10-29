// Class worker

var ele = document.getElementsByTagName("button")[0];
ele.addEventListener("click", clickListener);

//= ========================================================

function clickListener(ev) {
  var inputs = document.getElementsByTagName("textarea")[0];

  var val = inputs.value;

  var scores = val.split("\n").reduce((arr, res) => {
    var i = res.trim();
    if (i === "") return arr;
    arr.push(+i);
    return arr;
  }, []);

  var sortedScores = scores.sort((a, b) => a - b);

  var total = totalScores(sortedScores);
  var average = averageScores(sortedScores);
  var minScore = minimumScore(sortedScores);
  var maxScore = maximumScore(sortedScores);

  return displayResult(total, average, minScore, maxScore);
}

function totalScores(scores) {
  function reducer(total, score) {
    return total + score;
  }

  return scores.reduce(reducer);
}

function averageScores(scores) {
  return +(totalScores(scores) / scores.length).toFixed(2);
}

function minimumScore(scores) {
  return scores[0];
}

function maximumScore(scores) {
  return scores[scores.length - 1];
}

function insert(text, id) {
  document.getElementById(id).innerHTML = text;
}

function displayResult(total, average, minScore, maxScore) {
  insert(total, "total");
  insert(average, "avg");
  insert(minScore, "min");
  insert(maxScore, "max");
}
