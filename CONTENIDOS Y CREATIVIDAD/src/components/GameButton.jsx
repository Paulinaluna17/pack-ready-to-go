import { Link } from 'react-router-dom';
export default function GameButton({ selectedTrip }) {
 return <div className="game-button-container"><Link className="primary-button" to={`/game/${selectedTrip}`}>PREPARAR ESTE VIAJE ↗</Link></div>;
}
