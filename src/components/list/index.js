import React from 'react';

function Job({ data }) {
  return (
    <ul>
      {data.map(({ title, offices, id }, i) => (
        <li key={i}>
          <div>
            {title}: {id}
          </div>
          <div>{(offices = offices.map((item) => item.name).join(', '))}</div>
        </li>
      ))}
    </ul>
  );
}

function Section({ data }) {
  return (
    <div>
      {data.map(({ name, className, jobs }, i) => (
        <div key={i} className={className}>
          <div>{name}</div>
          <Job data={jobs} />
        </div>
      ))}
    </div>
  );
}

function Empty() {
  return <div>empty</div>;
}

export default function List({ data }) {
  let html = <Empty />;
  if (data.length > 0) {
    html = <Section data={data} />;
  }

  return html;
}
