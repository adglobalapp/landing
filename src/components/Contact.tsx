import { useState, type FormEvent } from 'react';
import { useI18n } from '../i18n';
import { Icon } from './Icon';
import './Contact.css';

export function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  // Teszt landing: nincs backend, csak visszajelzést adunk.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section className="section" id="contact">
      <div className="container contact">
        <div className="reveal">
          <span className="label label--brand">{t.contact.label}</span>
          <h2 className="contact__title">{t.contact.title}</h2>
          <p className="section__lead">{t.contact.text}</p>
        </div>

        <form className="form reveal" onSubmit={onSubmit}>
          <label className="field">
            <span>{t.contact.name}</span>
            <input name="name" type="text" required autoComplete="name" />
          </label>
          <label className="field">
            <span>{t.contact.email}</span>
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label className="field">
            <span>{t.contact.message}</span>
            <textarea name="message" rows={4} required />
          </label>
          <button type="submit" className="btn btn--primary">
            {t.contact.submit} <Icon name="arrow" size={16} />
          </button>
          {sent && (
            <p className="form__success" role="status">
              {t.contact.success}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
