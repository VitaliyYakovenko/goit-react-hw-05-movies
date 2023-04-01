import { NavLink ,Outlet} from "react-router-dom"
import { Suspense } from "react"
import Loader from "../Loader/Loader"
import css from "./Layout.module.css";


export default function Layout() {
    return (
        <>
      <header className={css.header}>
        <ul className={css.header__nav}>
        <li className={css.header__item}>
            <NavLink className={css.header__link} to="/">Home</NavLink>            
        </li>
        <li className={css.header__item}>
           <NavLink to="/movies" className={css.header__link} >Movies</NavLink>
        </li>
        </ul>
        </header>
        <main>
        <Suspense fallback={<Loader/>}>
        <Outlet />
        </Suspense>
        </main>  
    </>
    )
}