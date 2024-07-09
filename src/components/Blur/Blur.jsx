import React from 'react';

export default function Blur({
  parentClassName,
  width,
  height,
  color,
  blurAmount,
  ...rest
}) {
  const defaultClassName = 'blur';
  const className = parentClassName
    ? `${parentClassName}__${defaultClassName} ${defaultClassName}`
    : defaultClassName;
  return (
    <div
      className={className}
      {...rest}
      style={{
        width,
        height,
        backgroundColor: color,
        filter: `blur(${blurAmount}px)`,
      }}
    />
  );
}
