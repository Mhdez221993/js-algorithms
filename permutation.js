function persmutation(nums) {
  const result = [];

  const dfs = (i, nums) => {
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    }

    for (let j = i; j < nums.length; j++) {
      [nums[i], nums[j]] = [[nums[j]], nums[i]];
      dfs(i + 1, nums);
      [nums[i], nums[j]] = [[nums[j]], nums[i]];
    }
  };

  dfs(0, nums);

  return result;
}

const num = [1, 2, 3];

console.log(persmutation(num));
