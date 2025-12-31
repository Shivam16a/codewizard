import { NavLink, Outlet } from "react-router-dom"

const AdminRoute = () => {
    return <>
        <section className="adminroute" style={{ padding: "5.5rem", }}>
            <h1>Welcome!</h1>
            <NavLink to="user"><i class="fas fa-user"></i>user</NavLink>
            <NavLink to="contactdata"><i class="fas fa-envelope"></i>contact</NavLink>
            <NavLink to="/service">service</NavLink>
            <Outlet />
        </section>
    </>
}

export default AdminRoute