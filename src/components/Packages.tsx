import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Packages = () => {
  const packages = [
    {
      name: "Стартовый",
      price: "15 000 ₽",
      duration: "2 часа",
      features: [
        "До 50 обработанных фотографий",
        "Онлайн-галерея",
        "Базовая ретушь",
        "Доставка в течение 7 дней",
      ],
    },
    {
      name: "Профессиональный",
      price: "35 000 ₽",
      duration: "4 часа",
      features: [
        "До 150 обработанных фотографий",
        "Онлайн-галерея + USB",
        "Профессиональная ретушь",
        "Видео-тизер (1 мин)",
        "Доставка в течение 5 дней",
        "Второй фотограф",
      ],
      featured: true,
    },
    {
      name: "Премиум",
      price: "70 000 ₽",
      duration: "Полный день",
      features: [
        "Неограниченное количество фото",
        "Премиум альбом + USB",
        "Художественная ретушь",
        "Полное видео (5-10 мин)",
        "Доставка в течение 3 дней",
        "Команда из 2-3 специалистов",
        "Предварительная встреча",
      ],
    },
  ];

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Пакеты услуг
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Выберите пакет, который идеально подходит для вашего мероприятия
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in-up">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative border-border transition-smooth hover:shadow-glow ${
                pkg.featured
                  ? "border-primary shadow-glow scale-105 bg-card"
                  : "bg-background"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Популярный
                  </span>
                </div>
              )}
              <CardHeader className="text-center p-8 pb-4">
                <h3 className="text-2xl font-serif font-bold mb-2">{pkg.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                </div>
                <p className="text-muted-foreground">{pkg.duration}</p>
              </CardHeader>
              <CardContent className="p-8 pt-4">
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full shadow-glow"
                  variant={pkg.featured ? "default" : "outline"}
                >
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
