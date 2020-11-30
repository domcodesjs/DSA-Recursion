const toBinary = (num) => {
  num = Math.abs(Math.round(num));

  if (num === 0 || num === 1) {
    return num.toString();
  }

  const lsb = (num % 2).toString();
  const remainingBits = Math.floor(num / 2);

  return toBinary(remainingBits) + lsb;
};

toBinary(11);
