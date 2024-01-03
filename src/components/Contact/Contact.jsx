import {
  IconBrandTelegram,
  IconCurrentLocation,
  IconMail,
} from "@tabler/icons-react";
import React from "react";
import css from "./Contact.module.css";
const Contact = () => {
  return (
    <section id="contacts" className={css.sectionContacts} data-aos="fade-left">
      <div className="container">
        <h2 className={css.title}>Contacts</h2>
        <div className={css.contactsWrapper}>
          <div className={css.descWrapper}>
            <div className={css.iconBox}>
              <IconCurrentLocation className={css.icon} />
            </div>
            <div className={css.textWrapper}>
              <h3 className={css.subtitle}>Location</h3>
              <p className={css.location}>Kyiv region, Ukraine</p>
            </div>
          </div>
          <div className={css.descWrapper}>
            <div className={css.iconBox}>
              <IconMail className={css.icon} />
            </div>
            <div className={css.textWrapper}>
              <h3 className={css.subtitle}>Email</h3>
              <a className={css.email} href="mailto:lnhndnk@gmail.com">
                lnhndnk@gmail.com
              </a>
            </div>
          </div>
          <div className={css.descWrapper}>
            <div className={css.iconBox}>
              <IconBrandTelegram className={css.icon} />
            </div>
            <div className={css.textWrapper}>
              <h3 className={css.subtitle}>Telegram</h3>
              <a className={css.email} href="https://t.me/hndnko">
                https://t.me/hndnko
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
