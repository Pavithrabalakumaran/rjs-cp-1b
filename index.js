const element = (
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="card-1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile-image"
      />
      <h1 className="name"> Kiran V </h1>
      <p className="description">
        Vishnu Institute of Computer Education And Technology
      </p>
      <p className="description"> Bhimavaram </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="profile-image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
