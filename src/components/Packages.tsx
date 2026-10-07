import { useI18n } from '../i18n';
import { Button } from './Button';
import { Icon } from './Icon';
import './Packages.css';

export function Packages() {
  const { t } = useI18n();

  return (
    <section className="section" id="packages">
      <div className="container">
        <div className="section__head reveal">
          <span className="label label--brand">{t.packages.label}</span>
          <h2 className="section__title">{t.packages.title}</h2>
          <p className="section__lead">{t.packages.note}</p>
        </div>

        <div className="packages">
          {t.packages.items.map((pkg) => (
            <article key={pkg.name} className={`package reveal ${pkg.featured ? 'package--featured' : ''}`}>
              {pkg.featured && <span className="package__tag">{t.packages.featuredTag}</span>}
              <h3 className="package__name">{pkg.name}</h3>
              <p className="package__text">{pkg.text}</p>
              <ul className="package__list">
                {pkg.features.map((f) => (
                  <li key={f}>
                    <Icon name="check" size={16} /> {f}
                  </li>
                ))}
              </ul>
              <Button href="#contact" variant={pkg.featured ? 'primary' : 'outline'} className="package__cta">
                {t.packages.cta}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
