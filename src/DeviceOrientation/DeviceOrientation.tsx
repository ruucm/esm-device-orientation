import React, { useEffect, useState } from "react";
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
  useEffect(() => requestAccess, []);

  const onToggle = (toggleState: boolean): void => {
    const result = toggleState ? requestAccess() : revokeAccess();
  };

  // need to click once to get the permission at first. (Maybe related to iOS policy)
  if (!orientation)
    return (
      <div>
        no access <Toggle onToggle={onToggle}>toggle</Toggle>
      </div>
    );

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
      {React.cloneElement(
        React.isValidElement(child.props.children)
          ? child.props.children
          : child,
        { key: id, variant }
      )}
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
          variant: {variant}
          {errorElement}
        </pre>
      )}
    </>
  ));
};

function Toggle({ onToggle }: any) {
  const [toggleState, setToggleState] = useState(true);
  return (
    <button
      onClick={() => {
        onToggle(toggleState);
        setToggleState(!toggleState);
      }}
    >
      {toggleState ? "On" : "Off"}
    </button>
  );
}
