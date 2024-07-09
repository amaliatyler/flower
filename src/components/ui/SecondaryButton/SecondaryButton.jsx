import React from 'react';

export default function SecondaryButton({ btnText, parentClassName }) {
  const secondaryClass = parentClassName
    ? `${parentClassName}__btn btn btn-secondary`
    : 'btn btn-secondary';
  return <button className={secondaryClass}>{btnText}</button>;
}
