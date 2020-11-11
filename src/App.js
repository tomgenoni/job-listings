import React, { useState } from 'react';
import json from './data/data.json';
import Select from './components/Select/index';
import List from './components/List/index';
import Label from './components/Label/index';

// import logo from './logo.svg';
// import './App.css';

const rawData = [...json.jobs];
const firstDepartment = 'All Departments';
const firstLocation = 'All Locations';

// Dropdown data
const getDepartments = (data) => {
  const arr = data.map((item) => item.department.name);
  let unique = [...new Set(arr)];
  unique.unshift(firstDepartment);
  return unique;
};

const getLocations = (data) => {
  let arr = [];
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
    let filtered = JSON.parse(JSON.stringify([...json.jobs]));

    // Filter departments if dropdown not set to "All"
    if (department !== firstDepartment) {
      filtered = filtered.filter((item) => item.department.name === department);
    }

    // Filter locations if dropdown not set to "All"
    if (location !== firstLocation) {
      filtered = filtered
        .filter((item) => {
          return (item.offices = item.offices.filter((office) => office.name === location));
        })
        .filter((item) => item.offices.length > 0);
    }
    // Start to the structure of the jobs listings with filtering already applied
    // Get departments in the data, only one if one is selected
    const selectedDepts = [];
    for (const item of filtered) {
      const department = item.department.name;
      if (!selectedDepts.includes(department)) {
        selectedDepts.push(department);
      }
    }

    // Create an array that will hold all the newly formatted data
    const formattedData = [];
    // Only include jobs are belong to selected department(s)
    for (const dept of selectedDepts) {
      const className = dept.toLowerCase().replace(/\s/g, '-');
      const jobs = filtered.filter((item) => item.department.name === dept);
      const item = { name: dept, className: className, jobs: jobs };
      formattedData.push(item);
    }
    return formattedData;
  };

  // This holds the formatted data that is (mostly) logicless-template friendly
  const listData = formatData();

  return (
    <div className='wrap'>
      <Label text='asf' />
      <Select onChange={(value) => setDepartment(value)} value={department} data={departments} />
      <Label text='asf' />
      <Select onChange={(value) => setLocation(value)} value={location} data={locations} />
      <List data={listData} />
    </div>
  );
}

export default App;
