import { useState } from "react";
import "./ContactUs.scss";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="contact-text">
          <h2>Get in touch</h2>
          <p>
            Have questions about FitVisionAI or want to collaborate?
            Drop us a message.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button disabled={loading}>
            {loading ? "Sending..." : "Send message"}
          </button>

          {status === "success" && (
            <p className="success">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="error">Something went wrong. Try again.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
