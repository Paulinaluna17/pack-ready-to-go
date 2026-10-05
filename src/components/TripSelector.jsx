function TripSelector({ selectedTrip, setSelectedTrip }) {
  return (
    <section className="trip-selector">
      <div className="section-heading">
        <h2>Where are you going?</h2>
        <p>Choose your next adventure.</p>
      </div>

      <div className="trip-options">

        <div
          className={`trip-card ${selectedTrip === "city" ? "selected" : ""}`}
          onClick={() => setSelectedTrip("city")}
        >
          <span className="trip-number">01</span>
          <h3>City Break</h3>
          <p>2 days</p>
        </div>

        <div
          className={`trip-card ${selectedTrip === "beach" ? "selected" : ""}`}
          onClick={() => setSelectedTrip("beach")}
        >
          <span className="trip-number">02</span>
          <h3>Beach Escape</h3>
          <p>5 days</p>
        </div>

        <div
          className={`trip-card ${selectedTrip === "mountain" ? "selected" : ""}`}
          onClick={() => setSelectedTrip("mountain")}
        >
          <span className="trip-number">03</span>
          <h3>Mountain Trip</h3>
          <p>7 days</p>
        </div>

      </div>
    </section>
  );
}

export default TripSelector;