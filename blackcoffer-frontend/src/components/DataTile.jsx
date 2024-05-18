import React from "react";
import "../style/DataTile.css";

const DataTile = ({ record }) => {
  return (
    <div className="data-tile">
      <div>
        <div className="header">
          <h3>{record.title}</h3>
          <p className="source">
            Source:{" "}
            <a href={record.url} target="_blank" rel="noopener noreferrer">
              {record.source}
            </a>
          </p>
        </div>
        <div className="content">
          <p>
            <strong>Sector:</strong> {record.sector}
          </p>
          <p>
            <strong>Topic:</strong> {record.topic}
          </p>
          <p>
            <strong>Insight:</strong> {record.insight}
          </p>
          <p>
            <strong>Region:</strong> {record.region}
          </p>
          <p>
            <strong>Country:</strong> {record.country}
          </p>
          {record.start_year && (
            <p>
              <strong>Start Year:</strong> {record.start_year}
            </p>
          )}
          {record.end_year && (
            <p>
              <strong>End Year:</strong> {record.end_year}
            </p>
          )}
          <p>
            <strong>Intensity:</strong> {record.intensity}
          </p>
          <p>
            <strong>Relevance:</strong> {record.relevance}
          </p>
          <p>
            <strong>Likelihood:</strong> {record.likelihood}
          </p>
        </div>
      </div>
      <div className="footer">
        <p>
          <strong>Added:</strong> {new Date(record.added).toLocaleDateString()}
        </p>
        <p>
          <strong>Published:</strong>{" "}
          {new Date(record.published).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default DataTile;
