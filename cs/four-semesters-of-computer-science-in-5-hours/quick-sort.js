function quickSort(nums) {
  if (nums < 2) return nums;

  const pivot = nums[nums.length - 1];
  var leftList = [];
  var rightList = [];

  for (let i = 0; i < nums.length - 1; i++) {
    let item = nums[i];
    if (item < pivot) {
      leftList.push(item);
    } else {
      rightList.push(item);
    }
  }

  return [...quickSort(leftList), pivot, ...quickSort(rightList)];
}
