import './contact.css'
import contacts from './data'


const Contact = () => {
  return (
    <section id="contact">
      <h2>Send me a text</h2>
      <p>
        Shoot me a message via any of the links below!
      </p>
      <div className="container contact__container">
        {
          contacts.map(contact => <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer">{contact.icon}</a>)
        }
      </div>
    </section>
  )
}

export default Contact