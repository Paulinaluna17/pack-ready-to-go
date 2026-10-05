import { useState } from "react";
import Hero from "../components/Hero";
import TripSelector from "../components/TripSelector";
import GameButton from "../components/GameButton";

function Home() {
  const [selectedTrip, setSelectedTrip] = useState("");

  return (
    <main>
      <Hero />

      <TripSelector
        selectedTrip={selectedTrip}
        setSelectedTrip={setSelectedTrip}
      />

      <GameButton selectedTrip={selectedTrip} />
    </main>
  );
}

export default Home;