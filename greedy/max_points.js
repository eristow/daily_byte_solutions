// mine (not finished)
/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
const bagOfTokensScore = function (tokens, power) {
  let i = 0;
  let j = tokens.length - 1;
  let score = 0;

  while (i <= j) {
    // init score w/ i
    if (score == 0 && tokens[i] <= power) {
      score++;
      i++;
      power -= tokens[i];
    }
    // get min token val of i
    else if (tokens[i] <= power) {
      score++;
      i++;
      power -= tokens[i];
    }
    // must play j
    else if (tokens[j] <= power) {
      score++;
      j--;
      power -= tokens[j];
    }
    // get max power from j
    else if (score >= 1 && tokens[j] > power && j - i > 0) {
      score--;
      j--;
      power += tokens[j];
    }
    // no move for current tokens
    else {
      i++;
    }
  }

  return score;
};

// from leetcode solution's comments
const bagOfTokensScore = function (tokens, power) {
  tokens.sort((a, b) => a - b);

  let lo = 0;
  let hi = tokens.length - 1;
  let score = 0;
  let ans = 0;

  while (hi >= lo) {
    // if can play lo, play it
    if (power >= tokens[lo]) {
      score++;
      power -= tokens[lo];
      lo++;
      ans = Math.max(ans, score);
    }
    // if not enough power for lo, use point for playing hi
    else if (score > 0) {
      score--;
      power += tokens[hi];
      hi--;
    }
    // if can't do either, just stop
    else {
      return ans;
    }
  }

  return ans;
};

// kevin naughton's
