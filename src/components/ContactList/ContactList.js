import PropTypes from 'prop-types';
// import { ReactComponent as DeleteIcon } from '../../img/delete.svg';
import style from './ContactList.module.css';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={style.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={style.item} key={id}>
          <p className={style.info}>
            {name}: {number}
          </p>
          <button
            className={style.btn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            {/* <DeleteIcon width="26" height="26" /> */}
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
