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
console.log(nameProvinceMap);

// Advanced Exercises (Single console.log Execution)

// Log Products
console.log(products.map(product => product.product).join(', ') +
  
  // Filter by Name Length
  '\nFiltered Products (Name Length > 5): ' + 
  products.filter(product => product.product.length <= 5).map(product => product.product).join(', ') +
  
  // Price Manipulation
  '\nTotal Price: ' + 
  products
    .filter(product => product.price.trim() !== '')
    .map(product => parseFloat(product.price))
    .reduce((total, price) => total + price, 0) +
  
  // Concatenate Product Names
  '\nConcatenated Product Names: ' + 
  products.map(product => product.product).reduce((acc, product) => acc + product, '') +
  
  // Find Extremes in Prices
  '\nPrice Extremes: ' + 
  (() => {
    const prices = products
      .map(product => parseFloat(product.price))
      .filter(price => !isNaN(price)); 
    return `Highest: ${Math.max(...prices)}. Lowest: ${Math.min(...prices)}.`;
  })() +

  // Object Transformation
  '\nTransformed Products Object: ' + 
  products.reduce((acc, { product, price }) => {
    acc[product] = price;
    return acc;
  }, {})
);