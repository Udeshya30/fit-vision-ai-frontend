import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="contact-text">
          <h2>Get in touch</h2>
          <p>
            Have questions about FitVisionAI or want to collaborate?
            Drop us a message — we’d love to hear from you.
          </p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <textarea placeholder="Your message" rows="5" />
          <button type="submit">Send message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
