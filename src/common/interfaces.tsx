export interface SourceDataTypes {
  id: number;
  title: string;
  offices: {
    id: number;
    name: string;
  }[];
  department: {
    id: number;
    name: string;
  };
}

export interface SelectTypes {
  onChange: (value: string, event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  data: string[];
  id: string;
  name: string;
}

export interface ListingsTypes {
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

export interface JobTypes {
  jobs: {
    title: string;
    offices: [{ name: string }];
    id: number;
  }[];
}

export interface LabelTypes {
  text: string;
  htmlFor: string;
}
