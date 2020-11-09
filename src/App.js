import React, { useState, useEffect } from 'react';
import json from './data/data.json';
import Select from './components/select/index';
import List from './components/list/index';

// import logo from './logo.svg';
// import './App.css';

function App() {
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

  // Takes data, filtered or otherwise, and creates newly formatted array
  // that's friendly for rendering in components
  const formatData = (data) => {
    // Get departments in the data
    const filteredDepartments = [];
    for (const item of data) {
      const department = item.department.name;
      if (!filteredDepartments.includes(department)) {
        filteredDepartments.push(department);
      }
    }

    // Create an array that will hold all the newly formatted data
    const formattedData = [];
    // Only include jobs are belong to a given department
    for (const dept of filteredDepartments) {
      const item = { name: dept, jobs: data.filter((item) => item.department.name === dept) };
      formattedData.push(item);
    }
    return formattedData;
  };

  const departments = getDepartments(rawData);
  const locations = getLocations(rawData);

  const [department, setDepartment] = useState(departments[0]);
  const [location, setLocation] = useState(locations[0]);

  const [listingsData, setListingsData] = useState(formatData(rawData));

  // Fires on first render and after change to dropdowns
  useEffect(() => {
    // Reset the original data with deep copy and filter using dropdown values
    let filtered = JSON.parse(JSON.stringify([...json.jobs]));

    // Filter departments if value is not set to "All"
    if (department !== firstDepartment) {
      filtered = filtered.filter((item) => item.department.name === department);
    }

    // Filter locations if value is not set to "All"
    if (location !== firstLocation) {
      filtered = filtered
        .filter((item) => {
          return (item.offices = item.offices.filter((office) => office.name === location));
        })
        .filter((item) => item.offices.length > 0);
    }
    // Update the state of the jobs listings with filtered data
    setListingsData(formatData(filtered));
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
