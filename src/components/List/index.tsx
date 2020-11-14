import React from 'react';
import Empty from './Empty/index';
import Section from './Section/index';

import { ListingsTypes } from 'common/interfaces';

const List: React.FC<ListingsTypes> = ({ data }) => {
  const html = data.length > 0 ? <Section data={data} /> : <Empty />;
  return html;
};

export default List;
