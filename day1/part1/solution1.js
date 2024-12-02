/*
- list must find the difference betweent the smallest in left list to smallest in right list
- add to new "distance" list
- repeat for 2n3, 3rd, 4th... smallest numbers until list is complete

- return total distance 
*/

// 1.read file input
const { error } = require('console');
const fs = require('fs');
const input = fs.readFileSync('input1.txt', (err, data) => {
  if (err) throw err;
  return data.toString();
});

const data = input.toString();


// 2.separate into two lists
const list1 = [];
const list2 = [];

const parseData = (data) => {
  const lineItems = data.split('\n');
  for (let i = 0; i < lineItems.length; i++) {
    let items = lineItems[i].split('  ');
    list1.push(parseInt(items[0]));
    list2.push(parseInt(items[1]));
  };
};

parseData(data);


  //error handling of mismatched sizes
  if (list1.length != list2.length) {
    throw new Error ('list lengths do not match, please check input file');
  }

  //separate data into two lists, delimited by (3 spaces && new lines)



// 3. find distance between min of each list, over and over until done

const sortedList1 = list1.sort((a,b) => a - b);
const sortedList2 = list2.sort((a,b) => a - b);
const lengthList = [];

for (let i = 0; i < sortedList1.length; i++) {
  const distance = Math.abs(sortedList1[i] - sortedList2[i])
  lengthList.push(distance);
};

// 4. find total distance
const totalDistance = lengthList.reduce((acc, distance) => acc + distance, 0);

console.log(totalDistance);