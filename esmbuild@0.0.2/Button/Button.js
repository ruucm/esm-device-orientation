// src/Button/Button.tsx
import React from "react";

// esbuild-css-modules-plugin-namespace:/tmp/tmp-1792-tnOuvsamnlus/main/src/Button/Button.module.css.js
var digest = "daeacae90b0ed44361b1aeb58f4800f949998b146460781ef04bf61ab50f1b62";
var css = `._button_z7xeh_1 {
  background-color: blue; }
`;
(function() {
  if (!document.getElementById(digest)) {
    var ele = document.createElement("style");
    ele.id = digest;
    ele.textContent = css;
    document.head.appendChild(ele);
  }
})();
var Button_module_css_default = { "button": "_button_z7xeh_1" };

// src/Button/Button.tsx
function Button({ title = "Title" }) {
  return /* @__PURE__ */ React.createElement("button", {
    className: Button_module_css_default.button
  }, title);
}
export {
  Button
};
