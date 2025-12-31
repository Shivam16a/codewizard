import { useEffect, useState } from "react";
import "./Admin.css"
import { toast } from 'react-toastify';
import { useAuth } from "../../store/Auth";

const ContactData = () => {
    const { API } = useAuth();
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getContactData = async () => {
        try {
            const res = await fetch(`${API}/api/contact/contactdata`, {
                method: "GET",
            });
            const data = await res.json();
            setContacts(data);
            setLoading(false);
        } catch (error) {
            console.log("Error fetching contact data", error);
            setLoading(false);
        }
    };

    const deletecontact = async (id) => {
        try {
            const response = await fetch(`${API}/api/contact/deletcontact/${id}`, {
                method: "DELETE",
                credentials: "include",
            })
            const data = await response.json();

            if (response.ok) {
                toast.success("Contact Deleted success");
                setContacts(prevContacts => prevContacts.filter(contact => contact._id !== id))
            } else {
                toast.error(data.msg || "Error Deleting contact");
            }
        } catch (error) {
            console.log("Error deleting contact:", error);
            toast.error("Something went wrong");
        }
    }

    useEffect(() => {
        getContactData();
    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return <>
        <section>
            <h2>Contact Messages</h2>

            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {contacts.map((contact, index) => (
                        <tr key={contact._id || index}>
                            <td>{index + 1}</td>
                            <td>{contact.username}</td>
                            <td>{contact.email}</td>
                            <td>{contact.message}</td>
                            <td><button onClick={() => deletecontact(contact._id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    </>
}

export default ContactData