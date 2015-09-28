var ts = function(count, delimiter, transform) {
  var a = Array.apply(0, Array(count)).map(function(x, y) {
    if (transform && typeof transform === "function") {
      y = transform(y);
    }
    return y;
  });
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
