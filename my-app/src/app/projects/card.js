"use client";

import { useState } from "react";
import CardModal from "./cardModal";

export default function Card(props) {
  const { title, description, fullDescription, stack, repoUrl, imgSrc, imgAlt, year } = props;

  const [show, setShow] = useState(false);

  return (
    <div 
      className="card h-100 position-relative"
      style={{ 
        backgroundColor: "#D8DCD6", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingTop: "1.5rem" // add spacing at top so title is not too close to year
      }}
    >
      {/* Year badge in top-right corner */}
      <span 
        className="position-absolute top-2 end-2 text-white font-semibold px-2 py-1 rounded"
        style={{ 
          backgroundColor: "#083344",
          border: "none"
        }}
      >
        {year}
      </span>

      <div className="card-body text-center">
        <h4 className="card-title font-extrabold mt-3">{title}</h4>
        <p className="text-gray-400">{stack}</p>
        <p className="card-text">{description}</p>
      </div>
      
      <div className="d-flex justify-content-center gap-3 mb-3">  
        <button 
          className="btn text-white" 
          style={{ 
            backgroundColor: "#083344", // dark blue
            border: "none"
          }}
          onClick={() => setShow(true)}
        >
          Details
        </button>
        <a 
          href={repoUrl} 
          className="btn" 
          style={{ 
            color: "#1E3A8A", // slightly darker blue text
            border: "1px solid #1E3A8A",
            backgroundColor: "#F3F4F6" // light gray background
          }}
          target="_blank"
        >
          View on GitHub
        </a>
      </div>
      <CardModal show={show} setShow={setShow} title={title} fullDescription={fullDescription} stack={stack} repoUrl={repoUrl} imgSrc={imgSrc} imgAlt={imgAlt} />
    </div>
  );
}