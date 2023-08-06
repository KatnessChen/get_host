const crypto = require("crypto");

const myHashFn = (content) => {
  const hash = crypto
    .createHash("md5")
    .update(content)
    .digest("base64")
    .toLowerCase();

  return hash;
};

const containStraitsXFn = (hash) => {
  const map = {
    s: false,
    t: false,
    r: false,
    a: false,
    i: false,
    t: false,
    // s: false,
    x: false,
  };

  for (let i = 0; i < hash.length; i++) {
    const char = hash[i];
    if (map.hasOwnProperty(char)) {
      map[char] = true;
    }
  }

  return Object.values(map).every((value) => value);
};

exports.myHashFn = myHashFn;
exports.containStraitsXFn = containStraitsXFn;
