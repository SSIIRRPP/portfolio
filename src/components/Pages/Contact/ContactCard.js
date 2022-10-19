import MainButton from "../../Buttons/MainButton";
import LanguageConsumer from "../../Language/LanguageConsumer";
import "./styles/ContactCard.scss";

const ContactCard = ({ data }) => {
  const { element: Icon, props: iconProps } = data.icon;

  return (
    <div className="ContactCard scale-on-hover">
      <div className="ContactCard__header">
        <div className="ContactCard__icon">
          <Icon width={30} {...iconProps} />
        </div>
        <h4 className="ContactCard__title">{data.name}</h4>
      </div>
      <div className="ContactCard__body">
        <LanguageConsumer noElement path="Components.ContactCard.buttonText">
          {({ text, style }) => (
            <MainButton
              as="a"
              className="ContactCard__link"
              href={data.link}
              style={style}
              target="_blank"
            >
              {" " /* avoiding propTypes warning as children is required */}
              {text}
            </MainButton>
          )}
        </LanguageConsumer>
      </div>
    </div>
  );
};

export default ContactCard;
