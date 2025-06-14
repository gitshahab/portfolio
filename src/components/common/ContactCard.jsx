import "./ContactCard.css";
import Heading from "./Heading";

const ContactCard = ({ contact }) => {
  return (
    <div className="contact">
        <Heading headline="Contact" />
    <div className="contact-card">
      <h2 className="contact-card__title">Contact Info</h2>
      <div className="contact-card__item">
        <span className="contact-card__label">Name:</span>
        <span className="contact-card__value">{contact.name}</span>
      </div>
      <div className="contact-card__item">
        <span className="contact-card__label">Email:</span>
        <span className="contact-card__value">{contact.email}</span>
      </div>
      <div className="contact-card__item">
        <span className="contact-card__label">Phone:</span>
        <span className="contact-card__value">{contact.phone}</span>
      </div>
      <div className="contact-card__item">
        <span className="contact-card__label">Location:</span>
        <span className="contact-card__value">{contact.location}</span>
      </div>
      <div className="contact-card__message">
        <p>{contact.message}</p>
      </div>
    </div>
    </div>
  );
};

export default ContactCard;
