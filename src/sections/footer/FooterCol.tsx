import Icon from '../../components/icons/Icon';
import EmailInput from '../../components/emailInput/EmailInput';
import './Footer.css'

interface Lien {
  href?: string;
  txt: string;
}

interface FooterColProps{
  logo?: boolean,
  title?: string,
  liens?: Lien[],
  texte?: string,
  icons?: string[],
  email?: boolean
}

export default function FooterCol({ logo, title, liens, texte, icons, email }:FooterColProps) {
  return (
    <div className="footerCol">
      {logo && <img className="footerCol--logo" src='/img/Logo.png' />}

      {title && <h4 className="footerCol--title">{title}</h4>}

      {liens && (
        <nav className="p footer--nav">
          <ul className="footer--list">
            {liens.map((lien:Lien, index:number) => (
              <li className="footer--item" key={index}>
                {lien.href ? (
                  <a href={lien.href}>{lien.txt}</a>
                ) : (
                  <span>{lien.txt}</span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}

      {texte && <p className="p footer--texte">{texte}</p>}

      {icons && (
        <div className="footer--iconsList">
          {icons.map((icon:string, index:number) => (
            <div key={index}  className='footer--icon'>
              <Icon name={icon} size="medium" color="orange" />
            </div>
          ))}
        </div>
      )}

      <div className="footer--email">
        {email && <EmailInput size='small' />}
      </div>
    </div>
  );
}