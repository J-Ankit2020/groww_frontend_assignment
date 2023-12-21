import upiHandles from '../data/upi';
export function isValidCreditCardNumber(cardNumber) {
  // Remove spaces and non-numeric characters
  const cleanedCardNumber = cardNumber?.replace(/\D/g, '');

  // Check if the card number is empty or not a number
  if (!cleanedCardNumber || isNaN(cleanedCardNumber)) {
    return false;
  }

  // Reverse the card number and convert it to an array of digits
  const reversedDigits = cleanedCardNumber.split('').reverse().map(Number);

  // Apply the Luhn algorithm
  const sum = reversedDigits.reduce(function (acc, digit, index) {
    if (index % 2 === 1) {
      const doubledDigit = digit * 2;
      acc += doubledDigit > 9 ? doubledDigit - 9 : doubledDigit;
    } else {
      acc += digit;
    }
    return acc;
  }, 0);

  // The card number is valid if the sum is a multiple of 10
  return sum % 10 === 0;
}

export const validateCVV = (cvv) => {
  // Remove non-numeric characters
  const cleanedCVV = cvv?.replace(/\D/g, '');

  // Check if the cleaned CVV has a valid length (3 or 4 digits)
  return cleanedCVV.length === 3 || cleanedCVV.length === 4;
};

export const validateExpiryDate = (month, year) => {
  // Remove non-numeric characters
  const cleanedMonth = month?.replace(/\D/g, '');
  const cleanedYear = year?.replace(/\D/g, '');

  // Check if the cleaned month and year have valid lengths
  if (cleanedMonth.length !== 2 || cleanedYear.length !== 2) {
    return false;
  }

  // Convert the cleaned values to numbers
  const numericMonth = parseInt(cleanedMonth, 10);
  const numericYear = parseInt(cleanedYear, 10);

  // Check if the month is between 1 and 12 and the year is in the future
  const currentYear = new Date().getFullYear() % 100; // Get the last two digits of the current year
  return (
    numericMonth >= 1 &&
    numericMonth <= 12 &&
    numericYear >= currentYear &&
    numericYear <= currentYear + 20 // Assuming the card is valid for the next 20 years
  );
};

export const validateUpiId = (upiId) => {
  // UPI ID pattern: username@upi
  const upiRegex = new RegExp(`^[a-zA-Z0-9_.-]+(${upiHandles.join('|')})$`);

  // Check if the UPI ID matches the pattern
  return upiRegex.test(upiId);
};

export function getTotalCost(products) {
  const total = products.reduce((acc, product) => {
    const productCost = (product.quantity || 0) * (product.price || 0);
    return acc + productCost;
  }, 0);

  return parseFloat(total.toFixed(2));
}
