import { useEffect, useState } from "react";
import "./Admin.css"
import { toast } from 'react-toastify';

const User = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsersData = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/admin/user", {
                method: "GET",
            });
            const data = await res.json();
            // console.log(data);
            setUsers(data.mes);
            setLoading(false);
        } catch (error) {
            console.log("Error fetching contact data", error);
            setLoading(false);
        }
    };

    const deletuser = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/deleteuser/${id}`, {
                method: "DELETE",
            });
            const data = await response.json();

            if (response.ok) {
                toast.success("User Deleted Successfully");
                setUsers(prevUsers => prevUsers.filter(users => users._id !== id));
            } else {
                toast.error(data.mes || "Error Deleting Users");
            }
        } catch (error) {
            console.log("Error Deleting Users:", error);
            toast.error("Something went wrong");
        }
    }

    useEffect(() => {
        getUsersData();
    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return <>
        <section>
            <h2>Users List</h2>

            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id || index}>
                            <td>{index + 1}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td><button id="edit">Edit</button></td>
                            <td><button onClick={() => deletuser(user._id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>

    </>
}

export default User