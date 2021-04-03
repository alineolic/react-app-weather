import React from "react";

export default function City() {
  return (
    <div className="overview">
      <h1>London</h1>
      <ul>
        <li>
          Last update: <span id="date"> Sunday at 12pm</span>
        </li>
        <li id="description">Cloudy</li>
      </ul>
    </div>
  );
}
