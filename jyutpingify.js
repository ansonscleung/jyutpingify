let jyutping = require("./src/jyutping.json");

function jyutpingify(s, isToned = true) {
  if (typeof s !== "string") throw new TypeError("String required");
  let hasJP = true;
  return s.split("").reduce((str, el) => {
    let cResult = jyutping.find(c => c.CH === el);
    let char =
      (cResult &&
        cResult.INIT + cResult.FINL + (isToned ? cResult.TONE : "")) ||
      el;
    let newStr = (str && str + (hasJP || cResult ? ` ${char}` : char)) || char;
    hasJP = typeof cResult !== "undefined";
    return newStr;
  }, "");
}

module.exports = {
  jyutpingify: jyutpingify
};
