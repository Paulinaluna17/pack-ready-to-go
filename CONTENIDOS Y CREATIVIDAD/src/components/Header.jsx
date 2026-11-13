import { Link, NavLink } from 'react-router-dom';
export default function Header() {
 return <header><Link className="logo" to="/" aria-label="Pack, inicio">PACK<span>®</span></Link><span className="header-label">TRAVEL LIGHT. PLAY SMART.</span><nav aria-label="Principal"><NavLink to="/instructions">Cómo jugar ↗</NavLink></nav></header>;
}
