import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Eye, Users2, Brain, Clock, Shield } from "lucide-react";

const Risks = () => {
  const risks = [
    {
      icon: AlertTriangle,
      title: "Conteúdo Inapropriado",
      description: "Exposição a violência, conteúdo sexual ou material inadequado para a idade.",
      color: "text-destructive",
    },
    {
      icon: Users2,
      title: "Cyberbullying",
      description: "Intimidação, assédio ou humilhação através de meios digitais.",
      color: "text-orange-500",
    },
    {
      icon: Eye,
      title: "Privacidade e Dados",
      description: "Compartilhamento excessivo de informações pessoais e riscos à privacidade.",
      color: "text-yellow-500",
    },
    {
      icon: Brain,
      title: "Impacto Mental",
      description: "Ansiedade, depressão e problemas de autoestima relacionados ao uso digital.",
      color: "text-purple-500",
    },
    {
      icon: Clock,
      title: "Vício Digital",
      description: "Uso excessivo que interfere em atividades diárias, sono e relacionamentos.",
      color: "text-blue-500",
    },
    {
      icon: Shield,
      title: "Predadores Online",
      description: "Risco de contato com pessoas mal-intencionadas que se aproveitam de jovens.",
      color: "text-red-500",
    },
  ];

  const impacts = [
    "Distúrbios do sono devido ao tempo excessivo de tela",
    "Dificuldades de concentração e desempenho escolar",
    "Isolamento social e redução de atividades físicas",
    "Problemas posturais e de visão",
    "Exposição a fraudes e golpes online",
    "Normalização de comportamentos prejudiciais",
  ];

  return (
    <section id="riscos" className="py-20 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Riscos e Impactos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça os principais desafios e perigos do ambiente digital para poder 
            proteger crianças e adolescentes adequadamente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {risks.map((risk, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <risk.icon className={`h-8 w-8 ${risk.color}`} />
                  <CardTitle className="text-lg text-foreground">{risk.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{risk.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-border shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">
              Impactos no Desenvolvimento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              O uso excessivo ou inadequado de plataformas digitais pode trazer diversos 
              impactos negativos no desenvolvimento físico, mental e social de jovens:
            </p>
            <ul className="space-y-2">
              {impacts.map((impact, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  <span>{impact}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-6 border-destructive/20 bg-destructive/5">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Atenção aos Sinais
            </h3>
            <p className="text-muted-foreground">
              Fique atento a mudanças de comportamento como isolamento, irritabilidade, 
              queda no desempenho escolar, alterações no sono ou recusa em falar sobre 
              atividades online. Esses podem ser sinais de problemas relacionados ao uso digital.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Risks;
