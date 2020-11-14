import React, { useState } from 'react';
import json from './data/data.json';
import Hero from './components/Hero/index';
import Select from './components/Select/index';
import List from './components/List/index';
import Label from './components/Label/index';

import { SourceDataTypes } from 'common/interfaces';

const rawData = [...json.jobs];
const firstDepartment = 'All Departments';
const firstLocation = 'All Locations';

// Dropdown data
const getDepartments = (data: SourceDataTypes[]) => {
  // Create deduped array from array of all departments
  let arr = [...new Set(data.map((item: SourceDataTypes) => item.department.name))];
  arr.unshift(firstDepartment);
  return arr;
};

const getLocations = (data: SourceDataTypes) => {
  // Create deduped array from array of all locations
  let arr: string[] = [];
  for (const item of data) {
    item.offices.forEach((office) => {
      arr.push(office.name);
    });
  }
  let unique = [...new Set(arr)];
  unique.unshift(firstLocation);
  return unique;
};

const departments = getDepartments(rawData);
const locations = getLocations(rawData);

// Takes data, filtered or otherwise, and creates newly formatted array
// that's friendly for rendering in components
function App() {
  const [department, setDepartment] = useState(departments[0]);
  const [location, setLocation] = useState(locations[0]);

  const formatData = () => {
    // Reset the jobs data with deep copy to prevent reference errors
    // This approach doesn't always work, best to use custom func or lodash
    let filtered = JSON.parse(JSON.stringify([...json.jobs]));

    // Filter departments if dropdown not set to "All"
    if (department !== firstDepartment) {
      filtered = filtered.filter((item: SourceDataTypes) => item.department.name === department);
    }

    // Filter locations if dropdown not set to "All"
    if (location !== firstLocation) {
      filtered = filtered
        .filter((item: SourceDataTypes) => {
          return (item.offices = item.offices.filter((office) => office.name === location));
        })
        .filter((item: SourceDataTypes) => item.offices.length > 0);
    }

    // Create new structure for jobs listings with filtering already applied

    // Get departments in the data, only one if one is selected
    const selectedDepts = [
      ...new Set(filtered.map((item: SourceDataTypes) => item.department.name)),
    ];

    // Create an array that will hold all the newly formatted data
    const formatted = [];

    // Only include jobs are belong to selected department(s)
    for (const dept of selectedDepts) {
      const className = dept.toLowerCase().replace(/\s/g, '-');
      const jobs = filtered.filter((item: SourceDataTypes) => item.department.name === dept);
      const item = { name: dept, className: className, jobs: jobs };
      formatted.push(item);
    }
    return formatted;
  };

  // This holds the formatted data that is (mostly) logicless-template friendly
  const listData = formatData();

  return (
    <div className='wrap'>
      <Hero />
      <section className='mt8 m_mt9 mb9 m_mb11'>
        <div className='flex justify-center mb9'>
          <div className='mr4'>
            <Label text='Department' htmlFor='departments' />
            <Select
              onChange={(value) => setDepartment(value)}
              value={department}
              data={departments}
              id='departments'
              name='departments'
            />
          </div>
          <div className='ml4'>
            <Label text='Location' htmlFor='locations' />
            <Select
              onChange={(value) => setLocation(value)}
              value={location}
              data={locations}
              id='locations'
              name='locations'
            />
          </div>
        </div>
        <List data={listData} />
      </section>
    </div>
  );
}

export default App;
