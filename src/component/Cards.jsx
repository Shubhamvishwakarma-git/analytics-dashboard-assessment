import React from "react";

const Cards = ({ data }) => {
  const calculateTotalEVs = (data) => data.length;

  const calculateTopCity = (data) => {
    const cityCounts = data.reduce((acc, curr) => {
      acc[curr.City] = (acc[curr.City] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(cityCounts).reduce(
      (top, [city, count]) => (count > top.count ? { city, count } : top),
      { city: null, count: 0 }
    );
  };

  const calculateTopManufacturer = (data) => {
    const manufacturerCounts = data.reduce((acc, curr) => {
      acc[curr.Make] = (acc[curr.Make] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(manufacturerCounts).reduce(
      (top, [make, count]) => (count > top.count ? { make, count } : top),
      { make: null, count: 0 }
    );
  };

  const totalEVs = calculateTotalEVs(data);
  const topCity = calculateTopCity(data);
  const topManufacturer = calculateTopManufacturer(data);

  return (
    <div className="row g-4 mt-4">
      {/* Each Card has col-md-4 to make them same size */}
      <div className="col-md-4">
        <div className="card shadow border-0 rounded-3">
          <div className="card-body text-center">
            <h5 className="card-title">Total EVs</h5>
            <p className="card-text display-5 fw-bold">{totalEVs}</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card shadow border-0 rounded-3">
          <div className="card-body text-center">
            <h5 className="card-title">Top City</h5>
            <p className="card-text display-6 fw-bold">
              {topCity.city || "N/A"} <br />
              <span className="text-muted small">({topCity.count || 0} EVs)</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card shadow border-0 rounded-3">
          <div className="card-body text-center">
            <h5 className="card-title">Top Manufacturer</h5>
            <p className="card-text display-6 fw-bold">
              {topManufacturer.make || "N/A"} <br />
              <span className="text-muted small">
                ({topManufacturer.count || 0} EVs)
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
