import { Link, NavLink } from "react-router-dom";
import Banner from "./Banner";
import AppLogo from "./AppLogo";
import '../assets/css/Headers.css'
import { main_menu } from '../data/menu.js'
import { user_actions_menu } from '../data/menu.js'
import { useContext } from "react";
import BudgetContext from "../contexts/BudgetContext.jsx";

export default function AppHeader() {

    const { budgetMode, setBudgetMode } = useContext(BudgetContext);

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

                        <nav id="user-actions-nav">
                            {
                                user_actions_menu.map(page => (
                                    <Link key={page.id} to={page.url} ><i className={`bi ${page.icon}`} ></i></Link>
                                ))
                            }

                            <div className="form-check form-check-inline">
                                <label className="form-check-label" >{budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}</label>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="mode"
                                    value="isBudgetMode"
                                    checked={budgetMode}
                                    onChange={() => setBudgetMode(!budgetMode)}
                                />
                            </div>
                        </nav>
                    </div>
                </div>
            </header >
        </>
    );
}