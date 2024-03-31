const nums = [1, 1, 1, 2, 2, 3, 10, 10, 10, 10];
const k = 2;

const map = new Map();
for (let i = 0; i < nums.length; i++) {
  if (!map.has(nums[i])) {
    map.set(nums[i], 1);
  } else {
    map.set(nums[i], map.get(nums[i]) + 1);
  }
}
console.log(map);

const nmap = new Map([...map].sort((a, b) => b[1] - a[1]));

console.log(nmap);
const res = [];

let count = 0;
for (let i of nmap) {
  if (count < k) {
    res.push(i[0]);
    count++;
  }
}
console.log(res);
