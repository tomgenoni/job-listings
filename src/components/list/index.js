import React from 'react';
import Empty from './Empty/index';
import Section from './Section/index';

export default function List({ data }) {
  let html = <Empty />;
  if (data.length > 0) {
    html = <Section data={data} />;
  }

  return html;
}
