import ContactCard from '../components/common/ContactCard'

const ContactMockData = {
  name: "Mohd Shahab",
  email: "xyz@gmail.com",
  phone: "+91-9876543XXX",
  location: "New Delhi, India",
  message: "Let's connect! I'm open to freelance work, collaborations, or just a friendly chat.",
}

const Contact = () => {
  return (
    <ContactCard contact={ContactMockData} />
  )
}

export default Contact