// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// ForEach Basics
console.log("ForEach Basics:");
// 1. Log each name and each province.
names.forEach(name => console.log(name));
provinces.forEach(province => console.log(province));

// 2. Log each name with a matching province in the format "Name (Province)"
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// Uppercase Transformation
console.log("\nUppercase Transformation:");
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// Name Lengths
console.log("\nName Lengths:");
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// Sorting alphabetically
console.log("\nSorting:");
const sortedProvinces = [...provinces].sort(); // Using spread operator to avoid mutating the original array
console.log(sortedProvinces);

// Filtering Cape
console.log("\nFiltering Cape:");
const provincesWithoutCape = provinces.filter(province => !province.includes("Cape"));
console.log("Remaining provinces count:", provincesWithoutCape.length);

// Finding 'S'
console.log("\nFinding 'S':");
const containsS = names.map(name => name.includes("S"));
console.log(containsS);

// Creating Object Mapping
console.log("\nCreating Object Mapping:");
const nameProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});