import React from 'react';
import Empty from './Empty/index';
import Section from './Section/index';

export default function List({ data }) {
  const html = data.length > 0 ? <Section data={data} /> : <Empty />;
  return html;
}
