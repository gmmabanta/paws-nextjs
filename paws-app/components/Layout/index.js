import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import { selectNavbarTitle } from "../shared/reducers/navbar";

export default function Layout ({children}) {
    const navbarTitle = useSelector(selectNavbarTitle)
    return (
        <>
        <Navbar title={navbarTitle}/>
        <main>{children}</main>
        </>
    )
}