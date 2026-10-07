import { useI18n } from '../i18n';
import './Services.css';

export function Services() {
  const { t } = useI18n();

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section__head reveal">
          <span className="label label--brand">{t.services.label}</span>
          <h2 className="section__title">{t.services.title}</h2>
        </div>

        <div className="cards">
          {t.services.items.map((item, i) => (
            <article key={item.title} className="card reveal">
              <span className="card__index">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="card__title">{item.title}</h3>
              <span className="card__meta">{item.meta}</span>
              <p className="card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
