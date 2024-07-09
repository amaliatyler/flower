import React from 'react';

export default function PrimaryButton({ btnText, parentClassName }) {
  const primaryClass = parentClassName
    ? `${parentClassName}__btn btn btn-primary`
    : 'btn btn-primary';
  return <button className={primaryClass}>{btnText}</button>;
}
