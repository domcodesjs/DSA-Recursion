const countSheep = (num) => {
  if (num <= 0) {
    console.log("All sheep jumped over the fence");
    return;
  }

  console.log(`${num}: Another sheep jumps over the fence`);
  return countSheep(num - 1);
};

countSheep(5);
