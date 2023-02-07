import React from "react";

const Card = () => {
  return (
    <div className="card" style={{width: "18rem"}}>
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fen.letsgodigital.org%2Fuploads%2F2020%2F10%2Fsony-playstation-5-slim.jpg&f=1&nofb=1&ipt=73bc4f9494cd416292273d385ecfb6d267420b86b0aa853791dbabcba7cd1eb7&ipo=images"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button href="#" className="btn btn-primary">
          Go somewhere
        </button>
      </div>
    </div>
  );
};
export default Card;
