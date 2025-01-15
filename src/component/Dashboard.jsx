import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Filters from "./Filters";
import Cards from "./Cards";
import "./dashboard.css";
import Charts from "./Charts";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({ city: "All", make: "All" });

  useEffect(() => {
    Papa.parse("data/Electric_Vehicle_Population_Data.csv", {
      download: true,
      header: true,
      complete: (result) => {
        setData(result.data);
        setFilteredData(result.data); // Initially show all data
      },
    });
  }, []);

  const applyFilters = () => {
    let filtered = data;

    if (filters.city !== "All") {
      filtered = filtered.filter((item) => item.City === filters.city);
    }

    if (filters.make !== "All") {
      filtered = filtered.filter((item) => item.Make === filters.make);
    }

    setFilteredData(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const uniqueCities = [...new Set(data.map((item) => item.City))];
  const uniqueMakes = [...new Set(data.map((item) => item.Make))];

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Electric Vehicle Dashboard</h1>
      <Filters
        filters={filters}
        setFilters={setFilters}
        uniqueCities={uniqueCities}
        uniqueMakes={uniqueMakes}
      />
      <Cards data={filteredData} />
      <Charts data={filteredData} />
    </div>
  );
};

export default Dashboard;


