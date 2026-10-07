import { useI18n } from '../i18n';
import './Process.css';

export function Process() {
  const { t } = useI18n();

  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section__head reveal">
          <span className="label label--brand">{t.process.label}</span>
          <h2 className="section__title">{t.process.title}</h2>
        </div>

        <ol className="steps">
          {t.process.steps.map((step, i) => (
            <li key={step.title} className="step reveal">
              <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__text">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
