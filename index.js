const { myHashFn, containStraitsXFn } = require("./utils");

// 1. This is the semantic message we want to hash
const message = "Who will be the next host?";

// 2. This is just a number that will kept increasing
// until we find a hash that contains all letters of "straitsx"
let nonce = 0;

// 3. Put 1 & 2 together
let blockContent = message + nonce;

// 4. Now hash it
let hash = myHashFn(blockContent);

// 5. Check if the hash contains meet the criteria
let containStraitsX = containStraitsXFn(hash);

// 6. Let's mine!
while (!containStraitsX) {
  // Oh no, we didn't find it. Let's increase the nonce and try again!
  nonce += 1;
  blockContent = message + nonce;
  hash = myHashFn(blockContent);
  containStraitsX = containStraitsXFn(hash);
  console.log({ nonce, hash, containStraitsX });
}

// 7. The loop has ended, which means we found the hash & nonce!
console.log("--------------------");
console.log("We found the hash & the nonce!");
console.log("--------------------");

// 8. Let's decide the next host by the nonce
const howManyPeopleOfStx = 38;
console.log("The next host is no.", nonce % howManyPeopleOfStx);
