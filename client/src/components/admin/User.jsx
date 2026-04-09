import { useEffect, useState, useCallback } from "react";
import "./Admin.css";
import { toast } from "react-toastify";
import { useAuth } from "../../store/Auth";

const User = () => {
  const { API } = useAuth();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editUser, setEditUser] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  // ================= GET USERS =================
  const getUsersData = useCallback(async () => {
  try {
    const res = await fetch(`${API}/api/admin/user`, {
      method: "GET",
      credentials: "include",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await res.json();
    setUsers(Array.isArray(data.mes) ? data.mes : []);
  } catch (error) {
    console.error("Error fetching users:", error);
    toast.error("Failed to load users");
  } finally {
    setLoading(false);
  }
}, [API]);

  // ================= DELETE USER =================
  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${API}/api/admin/deleteuser/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("User Deleted Successfully");
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user._id !== id)
        );
      } else {
        toast.error(data.mes || "Error Deleting User");
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Something went wrong");
    }
  };

  // ================= UPDATE USER =================
  const updateUser = async () => {
    try {
      const response = await fetch(
        `${API}/api/admin/updateuser/${editUser}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          credentials: "include",
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("User updated successfully");

        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === editUser ? { ...user, ...formData } : user
          )
        );

        setEditUser(null);
      } else {
        toast.error(data.mes || "Update failed");
      }
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Something went wrong");
    }
  };

  // ================= HANDLE EDIT CLICK =================
  const handleEditClick = (user) => {
    setEditUser(user._id);
    setFormData({
      username: user.username,
      email: user.email,
      phone: user.phone,
    });
  };

  // ================= HANDLE INPUT CHANGE =================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
  if (API) {
    getUsersData();
  }
}, [API, getUsersData]);


  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
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
            <button className="update-btn" onClick={updateUser}>
              Update
            </button>
            <button
              className="cancel-btn"
              onClick={() => setEditUser(null)}
            >
              Cancel
            </button>
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
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button onClick={() => handleEditClick(user)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button onClick={() => deleteUser(user._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No Users Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default User;
