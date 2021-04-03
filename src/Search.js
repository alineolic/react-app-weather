import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form id="searchForm" className="mb-3">
        <div className="row">
          <div className="col-8 col-sm-10">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              id="city-input"
              autocomplete="off"
            />
          </div>
          <div className="col-4 col-sm-2">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  );
}
