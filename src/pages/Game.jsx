import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PackingItem from "../components/PackingItem";

function Game() {
  const location = useLocation();
  const trip = location.state?.trip;

  const [packedItems, setPackedItems] = useState([]);
  const [result, setResult] = useState(null);

  const tripInfo = {
    city: {
      name: "City Break",
      days: "2 days",
      emoji: "🏙️"
    },
    beach: {
      name: "Beach Escape",
      days: "5 days",
      emoji: "🌴"
    },
    mountain: {
      name: "Mountain Trip",
      days: "7 days",
      emoji: "⛰️"
    }
  };

  const items = [
    { id: 1, name: "T-Shirt", emoji: "👕" },
    { id: 2, name: "Shorts", emoji: "🩳" },
    { id: 3, name: "Jacket", emoji: "🧥" },
    { id: 4, name: "Flip Flops", emoji: "🩴" },
    { id: 5, name: "Sunscreen", emoji: "🧴" },
    { id: 6, name: "Hiking Boots", emoji: "🥾" },
    { id: 7, name: "Umbrella", emoji: "☂️" },
    { id: 8, name: "Camera", emoji: "📷" }
  ];

  const selectedTrip = tripInfo[trip];

  const correctItems = {
    city: [1, 3, 7, 8],
    beach: [1, 2, 4, 5],
    mountain: [1, 3, 6, 8]
  };

  const toggleItem = (itemId) => {
    if (packedItems.includes(itemId)) {
      setPackedItems(
        packedItems.filter((id) => id !== itemId)
      );
    } else {
      setPackedItems([...packedItems, itemId]);
    }

    setResult(null);
  };

  const checkBag = () => {
    const correct = correctItems[trip];

    const correctPackedItems = packedItems.filter((item) =>
      correct.includes(item)
    );

    const score = correctPackedItems.length;

    if (
      packedItems.length === correct.length &&
      score === correct.length
    ) {
      setResult({
        type: "success",
        score: score
      });
    } else {
      setResult({
        type: "error",
        score: score
      });
    }
  };

  return (
    <main className="game-page">

      <div className="game-header">
        <span className="eyebrow">
          PACK: READY TO GO
        </span>

        <h1>Let's pack!</h1>

        {selectedTrip && (
          <div className="selected-destination">

            <span className="destination-emoji">
              {selectedTrip.emoji}
            </span>

            <div>
              <strong>{selectedTrip.name}</strong>
              <p>{selectedTrip.days}</p>
            </div>

          </div>
        )}

        <p className="game-description">
          Prepará tu valija eligiendo los objetos correctos para tu viaje.
        </p>
      </div>

      <section className="packing-section">

        <h2>What are you packing?</h2>

        <p>
          Select the items you want to take with you.
        </p>

        <div className="packing-items">

          {items.map((item) => (
            <PackingItem
              key={item.id}
              emoji={item.emoji}
              name={item.name}
              selected={packedItems.includes(item.id)}
              onSelect={() => toggleItem(item.id)}
            />
          ))}

        </div>

        <p className="packed-counter">
          {packedItems.length} items packed
        </p>

        <button
          className="check-bag-button"
          onClick={checkBag}
        >
          CHECK MY BAG →
        </button>

        {result && (
          <div className={`game-result ${result.type}`}>

            {result.type === "success" ? (
              <>
                🎉 Perfect! Your bag is ready to go!
                <p>
                  You packed {result.score}/4 correct items.
                </p>
              </>
            ) : (
              <>
                🤔 Not quite! Try again.
                <p>
                  You packed {result.score}/4 correct items.
                </p>
              </>
            )}

          </div>
        )}

      </section>

      <Link to="/" className="back-home">
        ← Volver al inicio
      </Link>

    </main>
  );
}

export default Game;