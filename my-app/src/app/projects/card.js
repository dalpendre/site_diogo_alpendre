"use client";

export default function Card(props) {
  
  const {title, description, stack, repoUrl} = props;

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card">
        <div className="card-body text-center">
          <h4 className="card-title font-extrabold">{title}</h4>
          <p className="text-gray-400">{stack}</p>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-center gap-3">  
            <a href="#" className="btn btn-primary" onClick={(e) => {
              e.preventDefault();
              document.getElementById("popup").showModal();  
            }}>Details</a>
            <a href={repoUrl} className="btn btn-outline-primary" target="_blank">View on GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}