import { useNavigate } from "react-router-dom";

function GameButton({ selectedTrip }) {
  const navigate = useNavigate();

  const startGame = () => {
    if (!selectedTrip) {
      alert("Choose a trip first!");
      return;
    }

    navigate("/game", {
      state: { trip: selectedTrip }
    });
  };

  return (
    <div className="game-button-container">
      <button
        className="game-button"
        onClick={startGame}
      >
        START PACKING →
      </button>
    </div>
  );
}

export default GameButton;