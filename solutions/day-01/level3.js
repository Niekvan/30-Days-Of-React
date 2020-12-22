const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
];

const isInt = (n) => Number(n) % 1 === 0;
const getMedian = arr => isInt(arr.length / 2) ? (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2 : arr[Math.floor(arr.length / 2)];
const averageValue = arr => arr.reduce((acc, curr) => acc + curr, 0) / arr.length;

ages.sort();

const min = ages[0];
const max = ages[ages.length - 1]
const median = getMedian(ages);
const average = averageValue(ages);

const countriesSlice = countries.slice(0, 10);
const middleCountries = isInt(countries.length / 2) ? [countries[countries.length / 2 - 1], countries[countries.length / 2]] : countries[Math.floor(countries.length / 2)];
const halfLength = Math.ceil(countries.length / 2);
const firstHalf = countries.splice(0, halfLength);
console.log(firstHalf, countries);