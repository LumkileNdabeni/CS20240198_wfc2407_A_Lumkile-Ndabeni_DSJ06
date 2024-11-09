// A list of provinces in South Africa
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

// A list of names corresponding to people
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// A list of products, each with a price
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' }, // Product with empty price
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' } // Product with missing price
];

// ForEach Basics - Demonstrating the use of forEach
console.log("ForEach Basics:");

// 1. Log each name in the 'names' array
names.forEach(name => console.log(name));

// Log each province in the 'provinces' array
provinces.forEach(province => console.log(province));

// 2. Log each name with a matching province in the format "Name (Province)"
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// Uppercase Transformation - Converting each province name to uppercase
console.log("Uppercase Transformation:");
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// Name Lengths - Calculate and display the length of each name in 'names'
console.log("Name Lengths:");
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// Sorting alphabetically - Sorting provinces in alphabetical order without mutating original array
console.log("Sorting:");
const sortedProvinces = [...provinces].sort(); // Spread operator to avoid changing the original array
console.log(sortedProvinces);

// Filtering Cape - Removing provinces that contain "Cape" in their names
console.log("Filtering Cape:");
const provincesWithoutCape = provinces.filter(province => !province.includes("Cape"));
console.log("Remaining provinces count:", provincesWithoutCape.length);

// Finding 'S' - Check if each name contains the letter "S"
console.log("Finding 'S':");
const containsS = names.map(name => name.includes("S"));
console.log(containsS);

// Creating Object Mapping - Creating an object that maps each name to its corresponding province
console.log("Creating Object Mapping:");
const nameProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {}); // Initial accumulator is an empty object
console.log(nameProvinceMap);

// Advanced Exercises (Single console.log Execution) *************************************************************************************************************************************

console.log(
  // Display all product names as a comma-separated list
  "Products: " + products.map(product => product.product).join(', ') + "\n" +

  // Filter and display product names with a length of 5 or less
  "Filtered Products (Name Length <= 5): " + 
  products
    .filter(product => product.product.length <= 5) // Filter names by length
    .map(product => product.product) // Extract product names
    .join(', ') + "\n" +

  // Calculate and display the total price of products with valid prices
  "Total Price of Products with valid prices: " + 
  products
    .filter(product => product.price !== '' && product.price !== ' ') // Filter out products with missing prices
    .map(product => parseFloat(product.price)) // Convert price to float with parseFloat
    .reduce((total, price) => total + price, 0) + "\n" + // Sum all valid prices

  // Concatenate all product names into a single string, separated by commas
  "Concatenated Product Names: " + 
  products
    .map(product => product.product) // Extract product names
    .join(', ') + "\n" + // Join names with commas

  // Find and display the highest and lowest price among products
  "Price Extremes: " + (() => {
    const prices = products
      .map(product => parseFloat(product.price)) // Convert price to float
      .filter(price => !isNaN(price)); // Filter out NaN values from empty prices
    return `Highest: ${Math.max(...prices)}. Lowest: ${Math.min(...prices)}.`; // Calculate max and min prices
  })() + "\n" +

  // Transform the products array into an object where each key is a product name and value is its price
  "Transformed Products Object: " + 
  JSON.stringify(products.reduce((acc, { product, price }) => {
    acc[product] = price; // Assign product name as key and price as value
    return acc;
  }, {}))
);
