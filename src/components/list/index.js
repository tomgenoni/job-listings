import React from 'react';

function Job({ data }) {
  return (
    <div>
      {data.map(({ title }, i) => (
        <div key={i}>job: {title}</div>
      ))}
    </div>
  );
}

export default function List({ data }) {
  return (
    <div>
      {data.map(({ name, jobs }, i) => (
        <div key={i}>
          <div>Dept: {name}</div>
          <Job data={jobs} />
        </div>
      ))}
    </div>
  );
}
