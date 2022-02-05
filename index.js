// Code your solution here

function findMatching(arr, string) {
  const driver = arr.filter((el) => el.toLowerCase() === string.toLowerCase());
  return driver;
}

function fuzzyMatch(arr, string) {
  const driver = arr.filter(
    (el) => el.toLowerCase().indexOf(string.toLowerCase()) === 0
  );
  return driver;
}

function matchName(arr, string) {
  const driver = arr.filter(
    (el) => el.name.toLowerCase() === string.toLowerCase()
  );
  return driver;
}
