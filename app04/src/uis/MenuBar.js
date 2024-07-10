
import { Link } from 'react-router-dom';

const MenuBar = ({ title }) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{title}</a>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">About Us</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/contacts" className="nav-link">Contacts List</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default MenuBar;