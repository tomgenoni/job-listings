import React from 'react';

function Job({ data }) {
  return (
    <div>
      {data.map(({ title, offices, id }, i) => (
        <div key={i}>
          {' '}
          - job: {title}, - id: {id}- {(offices = offices.map((item) => item.name).join(', '))}
        </div>
      ))}
    </div>
  );
}

export default function List({ data }) {
  console.log('render');
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
