import { Link, NavLink } from "react-router-dom";
import Banner from "./Banner";
import AppLogo from "./AppLogo";
import '../assets/css/Headers.css'
import { main_menu } from '../data/menu.js'
import { user_actions_menu } from '../data/menu.js'
import { useContext } from "react";
import BudgetContext from "../contexts/BudgetContext.jsx";

export default function AppHeader() {

    const { maxPrice, setMaxPrice } = useContext(BudgetContext);

    return (
        <>
            <Banner>Sign up and get 20% off to your list order.</Banner>

            <header id="app-header">
                <div className="app-container">
                    <div className="header-wrapper">
                        <AppLogo />

                        <nav id="main-nav">
                            {
                                main_menu.map(page => (
                                    <NavLink key={page.id} to={page.url} >{page.title}</NavLink>
                                ))
                            }
                        </nav>

                        <div>
                            <div className="input-group">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Budget"
                                    value={maxPrice ? maxPrice : ""}
                                    onChange={(e) => setMaxPrice(e.target.value)}
                                />
                                <span className="input-group-text">$</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header >
        </>
    );
}