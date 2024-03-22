import React from "react";

const ListYourShow = () => {
  const showCards = [
    { id: 1, title: "Show 1", description: "Description for Show 1" },
    { id: 2, title: "Show 2", description: "Description for Show 2" },
    { id: 3, title: "Show 3", description: "Description for Show 3" },
    // Add more show data as needed
  ];

  return (
    <div>
      <h2>List Your Show</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {showCards.map((show) => (
          <a
            key={show.id}
            href={`/show/${show.id}`} // Example URL structure, adjust as needed
            style={{
              textDecoration: "none", // Remove underline by default
              color: "inherit", // Inherit text color from parent
            }}
          >
            <div
              style={{
                width: "300px",
                margin: "20px",
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <h3>{show.title}</h3>
              <p>{show.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ListYourShow;
