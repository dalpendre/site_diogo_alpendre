"use client";

import { useState } from "react";
import CardModal from "./cardModal";

export default function Card(props) {
  const { title, description, fullDescription, stack, repoUrl, imgSrc, imgAlt } = props;

  const [show, setShow] = useState(false);

  return (
    <div className="d-flex align-items-stretch">
      <div 
        className="card h-100" 
        style={{ 
          backgroundColor: "#FFFFFF", 
          width: "300px",        // fixed width
          minHeight: "400px",    // ensures all cards have the same height
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between" // pushes buttons to the bottom
        }}
      >
        <div className="card-body text-center">
          <h4 className="card-title font-extrabold">{title}</h4>
          <p className="text-gray-400">{stack}</p>
          <p className="card-text">{description}</p>
        </div>
        <div className="d-flex justify-content-center gap-3 mb-3">  
          <button 
            className="btn btn-primary relative z-50" 
            onClick={() => setShow(true)}
          >
            Details
          </button>
          <a 
            href={repoUrl} 
            className="btn btn-outline-primary relative z-50" 
            target="_blank"
          >
            View on GitHub
          </a>
        </div>
      </div>
      <CardModal 
        show={show} 
        setShow={setShow} 
        title={title} 
        fullDescription={fullDescription} 
        stack={stack} 
        repoUrl={repoUrl} 
        imgSrc={imgSrc} 
        imgAlt={imgAlt} 
      />
    </div>
  );
}