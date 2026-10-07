import { useI18n } from '../i18n';
import { Button } from './Button';
import { Icon } from './Icon';
import './Hero.css';

export function Hero() {
  const { t } = useI18n();
  const [first, middle, last] = t.hero.lines;

  return (
    <section className="hero" id="top">
      <div className="container">
        <span className="label label--brand reveal">{t.hero.eyebrow}</span>
        <h1 className="hero__title reveal">
          <span>{first}</span>
          <span className="accent">{middle}</span>
          <span>{last}</span>
        </h1>
        <blockquote className="hero__quote reveal">{t.hero.quote}</blockquote>
        <div className="hero__ctas reveal">
          <Button href="#contact">
            {t.hero.primaryCta} <Icon name="arrow" size={16} />
          </Button>
          <Button href="#process" variant="outline">
            {t.hero.secondaryCta}
          </Button>
        </div>

        <dl className="hero__stats reveal">
          {t.stats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
