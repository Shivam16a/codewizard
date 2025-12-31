import { useEffect, useState } from "react";
import "./Admin.css"

const ContactData = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getContactData = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/contact/contactdata");
            const data = await res.json();
            setContacts(data);
            setLoading(false);
        } catch (error) {
            console.log("Error fetching contact data", error);
            setLoading(false);
        }
    };

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
                    </tr>
                </thead>

                <tbody>
                    {contacts.map((contact, index) => (
                        <tr key={contact._id || index}>
                            <td>{index + 1}</td>
                            <td>{contact.username}</td>
                            <td>{contact.email}</td>
                            <td>{contact.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    </>
}

export default ContactData