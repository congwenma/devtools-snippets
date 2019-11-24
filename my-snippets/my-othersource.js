// NOTE: pasted over from the other source
(function() {
  window.log = Function.prototype.bind.call(console.log, console);
  window.warn = Function.prototype.bind.call(console.log, console);
  window.info = Function.prototype.bind.call(console.log, console);
})();



window.plainforms = function () {

  ['maxlength', 'required', 'min', 'max', 'pattern', 'step' ].forEach(function (attr) {
    [].forEach.call(document.querySelectorAll("[" + attr + "]"), function (node) {
      node.removeAttribute(attr);
    });
  });

  ['tel', 'url', 'email', 'datetime', 'date', 'month', 'week', 'time', 'datetime-local', 'number', 'range', 'color'].forEach(function (type) {
    [].forEach.call(document.querySelectorAll("input[type=" + type + "]"), function (node) {
      node.setAttribute('type', 'text');
    });
  });

  console.info("All HTML5 form validations have been removed.");
};

// wrapelement.js
(function() {
  window.wrapElement = function(el, whatToWrapIn) {
    var newParent = document.createElement(whatToWrapIn),
        oldParent,
        nextSibling;

    if (typeof el === 'string') {
      el = document.querySelector(el);
    }

    oldParent = el.parentNode;
    nextSibling = el.nextSibling;
    newParent.appendChild(el);
    if (nextSibling) {
      oldParent.insertBefore(newParent, nextSibling);
    } else {
      oldParent.appendChild(newParent);
    }
  }

})();
