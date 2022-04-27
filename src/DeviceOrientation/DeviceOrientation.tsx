import React, { useEffect } from "react";
import { useDeviceOrientation } from "./useDeviceOrientation";

export const DeviceOrientation = ({
  children,
  minusVaraint,
  plusVaraint,
  debug = false,
}): React.ReactElement => {
  const { orientation, requestAccess, revokeAccess, error } =
    useDeviceOrientation();

  // @ts-ignore
  useEffect(requestAccess, []);

  if (!orientation) return <div>no access</div>;

  const orientationInfo = orientation && (
    <ul>
      <li>
        ɑ: <code>{orientation.alpha}</code>
      </li>
      <li>
        β: <code>{orientation.beta}</code>
      </li>
      <li>
        γ: <code>{orientation.gamma}</code>
      </li>
    </ul>
  );

  const errorElement = error ? (
    <div className="error">{error.message}</div>
  ) : null;

  const variant = orientation.gamma < 0 ? minusVaraint : plusVaraint;

  return React.Children.map(children, (child, id) => (
    <>
      {React.cloneElement(child, { key: id, variant })}
      {debug && (
        <pre
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            background: "rgba(20, 100, 0, 0.7)",
          }}
        >
          {orientationInfo}
          {errorElement}
        </pre>
      )}
    </>
  ));
};
