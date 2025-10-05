import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Анна Петрова",
      role: "Невеста",
      text: "Невероятная работа! Каждая фотография — настоящее произведение искусства. Спасибо за то, что сохранили самые важные моменты нашего дня.",
      rating: 5,
    },
    {
      name: "Дмитрий Соколов",
      role: "Владелец бизнеса",
      text: "Профессиональный подход к коммерческой съемке. Фотографии полностью отразили концепцию нашего бренда. Рекомендую!",
      rating: 5,
    },
    {
      name: "Елена Иванова",
      role: "Организатор мероприятий",
      text: "Работали на нашем корпоративном мероприятии. Команда работала незаметно, но результат превзошел все ожидания. Профессионалы своего дела!",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Узнайте, что говорят наши клиенты о работе с нами
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="bg-background border-border">
            <CardContent className="p-8 md:p-12">
              <div className="animate-fade-in" key={currentIndex}>
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-foreground mb-6 text-center italic">
                  "{testimonials[currentIndex].text}"
                </p>
                <div className="text-center">
                  <p className="font-serif font-bold text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-smooth ${
                  index === currentIndex ? "bg-primary w-8" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
