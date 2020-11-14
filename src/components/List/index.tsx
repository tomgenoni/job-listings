import React from 'react';
import Empty from './Empty/index';
import Section from './Section/index';

interface ListProps {
  data: {
    name: string;
    className: string;
    jobs: {
      title: string;
      offices: [
        {
          name: string;
        }
      ];
      id: number;
    }[];
  }[];
}

const List: React.FC<ListProps> = ({ data }) => {
  const html = data.length > 0 ? <Section data={data} /> : <Empty />;
  return html;
};

export default List;
