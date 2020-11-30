const stringSplitter = (str, sep) => {
  if (str === "") {
    return "String is empty";
  }

  const indexOfSep = str.indexOf(sep);

  if (indexOfSep === -1) {
    return [str];
  }

  return [str.slice(0, indexOfSep)].concat(
    stringSplitter(str.slice(indexOfSep + sep.length), sep)
  );
};

stringSplitter("02/20/2020", "/");
