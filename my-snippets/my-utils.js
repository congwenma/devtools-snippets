window.my = {};

/**
 *
 * @param {AnyObject} object
 * @param {AnyProperty} property
 */
window.my.traceProp = (object, property) => {
  let value = object[property];
  Object.defineProperty(object, property, {
    get() {
      console.trace(`${property} requested`);
      return value;
    },
    set(newValue) {
      console.trace(`setting ${property} to `, newValue);
      value = newValue;
    }
  });
};

window.my.every = groupsOf => {
  return function(arr, callback) {
    let ending = arr.length - groupsOf;
    var newArr = [];
    for (let i = 0; i <= ending; i++) {
      let group = arr.slice(i, i + groupsOf);
      newArr.push(callback.apply(this, group));
    }
    return newArr;
  };
};

window.my.shuffle = function(arr, { lo, hi, mutable = false } = {}) {
  if (!mutable) arr = arr.slice(lo, hi);

  var len = arr.length;
  var temp;
  lo = lo || 0;
  hi = hi || arr.length;
  if (len <= 1) return arr;
  for (var i = lo; i < hi; i++) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    temp = arr[randomIndex];
    arr[randomIndex] = arr[i];
    arr[i] = temp;
  }

  return arr;
};

window.my.hexToRgb = hex =>
  hex
    // eslint-disable-next-line max-params
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/iu,
      (_m, rr, gg, bb) => `#${rr}${rr}${gg}${gg}${bb}${bb}`
    )
    .substring(1)
    .match(/.{2}/gu)
    .map(xx => parseInt(xx, 16));

window.my.rgbToHex = function(rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
};

window.my.random = (min, max) => {
  if (!max) {
    if (!min) {
      throw new Error("Need to provide a max at least");
    }
    // eslint-disable-next-line no-param-reassign
    max = min;
    // eslint-disable-next-line no-param-reassign
    min = 0;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
