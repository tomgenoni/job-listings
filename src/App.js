import React, { useState, useEffect } from 'react';
import json from './data/data.json';
import Select from './components/select/index';
import List from './components/list/index';

// import logo from './logo.svg';
// import './App.css';

function App() {
  const rawData = [...json.jobs];

  // Dropdown data
  const getDepartments = (data) => {
    const arr = data.map((item) => item.department.name);
    let unique = [...new Set(arr)];
    unique.unshift('All Departments');
    return unique;
  };

  const getLocations = (data) => {
    let arr = [];
    data.forEach((item) => {
      item.offices.forEach((office) => {
        arr.push(office.name);
      });
    });
    let unique = [...new Set(arr)];
    unique.unshift('All Locations');
    return unique;
  };

  const departments = getDepartments(rawData);
  const locations = getLocations(rawData);

  const [department, setDepartment] = useState(departments[0]);
  const [location, setLocation] = useState(locations[0]);

  const [listingsData, setListingsData] = useState(rawData);

  useEffect(() => {
    console.log('use effect');
    let filtered = [...json.jobs];

    if (department !== departments[0]) {
      filtered = filtered.filter((item) => item.department.name === department);
    }
    if (location !== locations[0]) {
      filtered = filtered
        .filter((item) => {
          return (item.offices = item.offices.filter((office) => office.name === location));
        })
        .filter((item) => item.offices.length > 0);
    }

    // Create list of available departments post-filtering
    const filteredDepartments = [];
    filtered.forEach((item) => {
      const department = item.department.name;
      if (!filteredDepartments.includes(department)) {
        filteredDepartments.push(department);
      }
    });

    // // Create an objec to hold the jobs for each department
    const foo = [];
    // Only include jobs are belong to a given department
    for (const key of filteredDepartments) {
      const item = { name: key, jobs: filtered.filter((item) => item.department.name === key) };
      foo.push(item);
    }
    console.log(foo);
    setListingsData(foo);
  }, [department, location]);

  return (
    <div className='App'>
      <Select onChange={(value) => setDepartment(value)} value={department} data={departments} />
      <Select onChange={(value) => setLocation(value)} value={location} data={locations} />
      <List data={listingsData} />
    </div>
  );
}

export default App;
