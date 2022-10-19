import LanguageConsumer from "../components/Language/LanguageConsumer";
import ContactCard from "../components/Pages/Contact/ContactCard";
import ContactForm from "../components/Pages/Contact/ContactForm";
import FadeIn from "react-fade-in";
import { discord, linkedin, github } from "../data/contactOptions";
import "./styles/Contact.scss";
import useAnimation from "../hooks/useAnimation";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef();
  const { finished } = useAnimation({
    element: ref,
    animations: "fade-in-comp",
    time: 600,
    keepActive: true,
  });

  return (
    <div ref={ref} className="Contact">
      <div className="Contact__header">
        <LanguageConsumer element="h1" path="Pages.Contact.title" />
        {/* <div className="Contact__header--subtitle">
          <LanguageConsumer element="h2" path="Pages.Contact.subtitle" />
        </div> */}
        <FadeIn className="Contact__cards" visible={finished}>
          <ContactCard data={discord} />
          <ContactCard data={linkedin} />
          <ContactCard data={github} />
        </FadeIn>
        <LanguageConsumer element="p" path="Pages.Contact.paragraph" />
      </div>
      <div className="Contact__body">
        <ContactForm show={finished} />
      </div>
    </div>
  );
};

export default Contact;
