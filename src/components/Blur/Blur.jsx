import React from 'react';

export default function Blur({
  parentClassName,
  width,
  height,
  color,
  blurAmount,
  flag,
}) {
  const defaultClassName = 'blur';
  const className = parentClassName
    ? `${parentClassName}__${defaultClassName} ${defaultClassName}`
    : defaultClassName;
  return (
    <div
      className={className}
      style={{
        width,
        height,
        backgroundColor: color,
        filter: `blur(${blurAmount}px)`,
      }}
    />
  );
}
