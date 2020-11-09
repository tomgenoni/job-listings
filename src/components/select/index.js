import React from 'react';

export default function Select({ onChange, value, data }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value, e)}>
      {data.map((item, i) => (
        <option value={item} key={i}>
          {item}
        </option>
      ))}
    </select>
  );
}
