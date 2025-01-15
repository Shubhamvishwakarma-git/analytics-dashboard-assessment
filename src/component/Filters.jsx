import React from "react";

const Filters = ({ filters, setFilters, uniqueCities, uniqueMakes }) => {
  return (
    <div className="row g-3 my-3">
      {/* Filter by City */}
      <div className="col-md-6">
        <label className="form-label">Filter by City</label>
        <select
          className="form-select"
          value={filters.city}
          onChange={(e) => setFilters({ ...filters, city: e.target.value })}
        >
          <option value="All">All Cities</option>
          {uniqueCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      {/* Filter by Manufacturer */}
      <div className="col-md-6">
        <label className="form-label">Filter by Manufacturer</label>
        <select
          className="form-select"
          value={filters.make}
          onChange={(e) => setFilters({ ...filters, make: e.target.value })}
        >
          <option value="All">All Manufacturers</option>
          {uniqueMakes.map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
