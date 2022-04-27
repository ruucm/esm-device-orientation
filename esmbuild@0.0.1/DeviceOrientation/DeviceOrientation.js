// src/DeviceOrientation/DeviceOrientation.tsx
import React, { useEffect } from "react";
import { useDeviceOrientation } from "./useDeviceOrientation.js";
var DeviceOrientation = ({
  children,
  minusVaraint,
  plusVaraint,
  debug = false
}) => {
  const { orientation, requestAccess, revokeAccess, error } = useDeviceOrientation();
  useEffect(requestAccess, []);
  if (!orientation)
    return /* @__PURE__ */ React.createElement("div", null, "no access");
  const orientationInfo = orientation && /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "\u0251: ", /* @__PURE__ */ React.createElement("code", null, orientation.alpha)), /* @__PURE__ */ React.createElement("li", null, "\u03B2: ", /* @__PURE__ */ React.createElement("code", null, orientation.beta)), /* @__PURE__ */ React.createElement("li", null, "\u03B3: ", /* @__PURE__ */ React.createElement("code", null, orientation.gamma)));
  const errorElement = error ? /* @__PURE__ */ React.createElement("div", {
    className: "error"
  }, error.message) : null;
  const variant = orientation.gamma < 0 ? minusVaraint : plusVaraint;
  return React.Children.map(children, (child, id) => /* @__PURE__ */ React.createElement(React.Fragment, null, React.cloneElement(child, { key: id, variant }), debug && /* @__PURE__ */ React.createElement("pre", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      background: "rgba(20, 100, 0, 0.7)"
    }
  }, orientationInfo, errorElement)));
};
export {
  DeviceOrientation
};
