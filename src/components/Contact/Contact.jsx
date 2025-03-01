import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { LuPhone } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import c from "./Contact.module.css";


const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <div className={c.container}>
        <div className={c.contactText}>
          <GoPerson />
          <h3>{name}</h3>
        </div>
        <div className={c.contactText}>
          <LuPhone />
          <p className={c.number}>{number}</p>
        </div>
      </div>
      <button className="c.contactButton"
      onClick={onDelete} 
      type="button"
      aria-label='delete button'> 
        Delete
      </button>
    </>
  );
};

export default Contact;
