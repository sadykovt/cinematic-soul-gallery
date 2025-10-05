import { Camera, Video, Briefcase, Heart, Home, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Портретная съемка",
      description: "Индивидуальные и семейные портреты с профессиональным подходом",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Свадебная фотография",
      description: "Ваш особенный день запечатлен в каждой эмоции и детали",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Коммерческая съемка",
      description: "Продукция, реклама и бренд-контент высшего качества",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Видеопроизводство",
      description: "Кинематографические видео для любых целей и событий",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Архитектура и интерьеры",
      description: "Профессиональная съемка недвижимости и архитектурных объектов",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Событийная фотография",
      description: "Корпоративные мероприятия, концерты и особые события",
    },
  ];

  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Наши услуги
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Полный спектр профессиональных фото и видео услуг
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-border hover:border-primary transition-smooth hover:shadow-glow bg-background"
            >
              <CardContent className="p-8">
                <div className="text-primary mb-4 transition-smooth group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
