import { CONTACT_CONTENT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 dark:border-neutral-300">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter mb-5">
        <p className="my-4">{CONTACT_CONTENT.address}</p>
        <p className="my-4">{CONTACT_CONTENT.phone}</p>
        <a href="#" className="my-4 border-b">
          {CONTACT_CONTENT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
