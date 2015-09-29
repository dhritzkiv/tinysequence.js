var ts = function(count, delimiter, transform) {
  var a = Array.apply(0, Array(count)).map(function(x, y) {
    return y;
  });
  if (typeof transform === "function") {
    a = a.map(transform);
  }
  if (delimiter) {
    a = a.join(delimiter);
  }
  return a;
};
if (typeof module != "undefined" && typeof module.exports != "undefined") {
  module.exports = ts;
} else {
  window.ts = window.tinysequence = ts;
}
