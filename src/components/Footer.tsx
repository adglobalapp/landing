import { useI18n } from '../i18n';
import { Icon } from './Icon';
import { LogoMark } from './Logo';
import './Footer.css';

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <ul className="footer__tags">
          {t.footer.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="footer__right">
          <div className="footer__social">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Icon name="linkedin" size={22} />
            </a>
            <a href="https://github.com/adglobalapp" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Icon name="github" size={22} />
            </a>
          </div>
          <span className="footer__mark">
            <LogoMark size={44} />
          </span>
        </div>

        <p className="footer__copy">
          © {year} AdApp. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
