export const appendTextFiles = (files = []) => {
  let stringsArray = [];
  files.forEach((f) => {
    stringsArray.push(f);
  });

  return stringsArray.join("\n \n");
};
