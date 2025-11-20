import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Heart, Lightbulb } from "lucide-react";

const About = () => {
  const objectives = [
    {
      icon: Target,
      title: "Nosso Objetivo",
      description: "Promover o uso consciente, seguro e equilibrado de plataformas digitais e jogos por crianças e adolescentes através da educação e orientação de pais, educadores e responsáveis.",
    },
    {
      icon: Users,
      title: "Público-Alvo",
      description: "Este projeto é direcionado a pais, mães, educadores, professores, psicólogos, profissionais de saúde e todos os adultos responsáveis pela formação e bem-estar de jovens.",
    },
    {
      icon: Heart,
      title: "Nossa Missão",
      description: "Criar um ambiente digital mais seguro através da informação, conscientização e ferramentas práticas que ajudem famílias a navegarem os desafios da era digital.",
    },
    {
      icon: Lightbulb,
      title: "Abordagem",
      description: "Acreditamos em educação baseada em evidências, diálogo aberto e construção de confiança entre adultos e jovens, promovendo autonomia responsável no uso da tecnologia.",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sobre o Projeto
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça mais sobre nossa iniciativa de conscientização e educação 
            para segurança digital de crianças e adolescentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {objectives.map((obj, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <obj.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {obj.title}
                    </h3>
                    <p className="text-muted-foreground">{obj.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-border shadow-lg">
          <CardContent className="pt-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Por Que Este Projeto Foi Criado?
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Este projeto foi desenvolvido como atividade de extensão e trabalho integrador do curso de Análise e Desenvolvimento de Sistemas da UCEFF. Seu objetivo é colocar em prática os conhecimentos adquiridos ao longo da formação e, ao mesmo tempo, promover a conscientização sobre o uso seguro e responsável da internet por crianças e adolescentes.
              </p>
              <p>
                O foco principal é orientar pais e responsáveis, oferecendo informações e recursos práticos que ajudem a estabelecer uma relação mais segura, equilibrada e saudável com o ambiente digital.
              </p>
              <p>
                Estudos mostram que 95% das crianças e adolescentes brasileiras, de 9 a 17 anos, usam internet, muitas vezes sem supervisão adequada. Ao mesmo tempo, 
                casos de cyberbullying, exposição a conteúdo inadequado e problemas relacionados ao 
                uso excessivo de telas aumentam a cada ano.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
