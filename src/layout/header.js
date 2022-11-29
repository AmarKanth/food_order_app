import mealsImage from "../assets/meals.jpg";
import "./header.css";
import HeaderCartButton from "./headercartbutton";

const Header = props => {
    return(
        <>
            <header className="header">
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className="main-image">
                <img src={mealsImage} alt="Table full of delicious food" />
            </div>
        </>
    )
}

export default Header;