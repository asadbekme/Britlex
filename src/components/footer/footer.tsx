import { Logo } from "@/assets";
import { footerLinks } from "@/utils/constants";

const Footer = () => {
  return (
    <footer className="container py-10 lg:py-20">
      <div className="flex flex-col md:flex-row gap-5 items-center pt-10 justify-between border-t border-secondary">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
        <ul className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 list-disc">
          {footerLinks.map((item) => (
            <li key={item.link}>
              <a
                href="#"
                className="transition-all text-secondary hover:text-primary"
              >
                {item.link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
