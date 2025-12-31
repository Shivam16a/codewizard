import { NavLink, Outlet } from "react-router-dom"

const AdminRoute = () => {
    return <>
        <section id="top" className="adminroute" style={{ padding: "5.5rem", }}>
            <h1>Welcome!</h1>
            <NavLink to="user"><i class="fas fa-user"></i>user</NavLink>
            <NavLink to="contactdata"><i class="fas fa-envelope"></i>contact</NavLink>
            <NavLink to="/service"><i class="fas fa-store"></i>service</NavLink>
            <NavLink to="/"><i class="fas fa-home"></i>Home</NavLink>
            <a href="#top" className="scroll-top-btn"><i class="fas fa-arrow-circle-up"></i></a>
            <Outlet />
        </section>
    </>
}

export default AdminRoute