import { useEffect, useState } from "react";
import "./Admin.css"
import { toast } from 'react-toastify';
import { useAuth } from "../../store/Auth";

const User = () => {
    const {API} = useAuth();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editUser, setEditUser] = useState(null);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: ""
    });
    const handleEditClick = (user) => {
        setEditUser(user._id);
        setFormData({
            username: user.username,
            email: user.email,
            phone: user.phone
        });
    };
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const getUsersData = async () => {
        try {
            const res = await fetch(`${API}/api/admin/user`, {
                method: "GET",
                credentials:"include",
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
            const response = await fetch(`${API}/api/admin/deleteuser/${id}`, {
                method: "DELETE",
                credentials:"include",
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
    };

    const updateuser = async () => {
        try {
            const response = await fetch(
                `${API}/api/admin/updateuser/${editUser}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData),
                    credentials:"include",
                }
            );

            const data = await response.json();

            if (response.ok) {
                toast.success("User updated successfully");

                setUsers(prevUsers =>
                    prevUsers.map(user =>
                        user._id === editUser ? { ...user, ...formData } : user
                    )
                );

                setEditUser(null); // close form
            } else {
                toast.error(data.mes || "Update failed");
            }
        } catch (error) {
            toast.error("Something went wrong");
        }
    };


    useEffect(() => {
        getUsersData();
    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return <>
        <section>
            <h2>Users List</h2>
            {editUser && (
                <div className="edit-form">
                    <h3>Edit User</h3>

                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Username"
                    />

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />

                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                    />

                    <div className="form-buttons">
                        <button className="update-btn" onClick={updateuser}>Update</button>
                        <button className="cancel-btn" onClick={() => setEditUser(null)}>Cancel</button>
                    </div>
                </div>
            )}


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
                            <td><button id="edit" onClick={() => handleEditClick(user)}>Edit</button></td>
                            <td><button onClick={() => deletuser(user._id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>

    </>
}

export default User