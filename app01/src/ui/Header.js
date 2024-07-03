import './styles/Header.css';

const Header = props => (
    <header className="banner">
        <h3> {props.title ?? 'A Demo ReactJS App.' } </h3>
    </header>
);

export default Header;