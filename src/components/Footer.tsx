import { Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold text-gradient mb-4">
              PhotoArt
            </h3>
            <p className="text-muted-foreground">
              Профессиональная фото и видеосъемка для создания незабываемых визуальных историй
            </p>
          </div>
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#portfolio"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Портфолио
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href="#packages"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Пакеты
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Отзывы
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Социальные сети</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>© 2024 PhotoArt. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
