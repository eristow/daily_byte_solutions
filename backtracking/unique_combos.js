const combinationSum = function (candidates, target) {
  const answers = [];

  recurse(candidates, 0, target, answers, []);

  return answers;
};

const recurse = function (nums, start, target, answers, tempAnswer) {
  if (target < 0) {
    return;
  }

  console.log(`${target} | ${start} | ${tempAnswer} | ${answers}`);
  if (target == 0) {
    answers.push([...tempAnswer]);
  }

  for (let i = start; i < nums.length; i++) {
    tempAnswer.push(nums[i]);
    recurse(nums, i, target - nums[i], answers, tempAnswer);
    tempAnswer.pop();
  }
};

const nums = [2, 4, 6, 3];
const target = 6;
console.log(combinationSum(nums, target));

const nums2 = [2, 3, 6, 7];
const target2 = 7;
// console.log(combinationSum(nums2, target2));
