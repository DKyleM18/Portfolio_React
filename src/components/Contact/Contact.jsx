import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <h2 className="contact__title">Contact</h2>
      <p className="contact__info-text">
        If you have any questions or inquiries, please don't hesitate to contact
        me. You can reach me by email at{" "}
        <a
          className="contact__email"
          href="mailto:d.kyle.messersmith@gmail.com"
        >
          d.kyle.messersmith@gmail.com
        </a>
        .
      </p>
    </section>
  );
}
