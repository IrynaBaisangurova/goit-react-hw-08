import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import Contact from "../Contact/Contact";
import c from "./ContactList.module.css";
import { useEffect } from "react";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <ul className={c.list}>
      {filteredContacts.map((contact) => (
        <li className={c.item} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
