const triangularNumber = (num) => {
  return num <= 1 ? num : num + triangularNumber(num - 1);
};

triangularNumber(2);
