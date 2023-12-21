let input = ["MA", "SA", "I", "SCH", "OOL"];

let convert = (array) => {
  let res = []; 
  
  for (let i of array) {
    let lowcase = i.toLowerCase();
    res.push(lowcase); 
  }

console.log(res)
};

convert(input)