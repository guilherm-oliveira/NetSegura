import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Phone, Globe, BookOpen, Video, HeartHandshake } from "lucide-react";

const Resources = () => {
  const organizations = [
    {
      name: "SaferNet Brasil",
      description: "Promoção e Defesa dos Direitos Humanos na Internet no Brasil",
      url: "https://new.safernet.org.br/",
      icon: Globe,
    },
    {
      name: "Guia sobre Usos de Dispositivos Digitais",
      description: "Orientações e Ferramentas para lidar com a relação das infâncias e adolescências com o mundo digital",
      url: "https://www.gov.br/secom/pt-br/assuntos/uso-de-telas-por-criancas-e-adolescentes/guia",
      icon: BookOpen,
    },
    {
      name: "Ministério da Justiça - LGPD",
      description: "Informações sobre proteção de dados pessoais",
      url: "https://www.gov.br/mj/pt-br/acesso-a-informacao/tratamento-de-dados-pessoais",
      icon: Globe,
    },
  ];

  const emergencyContacts = [
    {
      name: "Disque 100",
      description: "Denúncias de violações de direitos humanos",
      number: "100",
      icon: Phone,
    },
    {
      name: "Polícia Civil",
      description: "Delegacia de polícia para registro de ocorrências",
      number: "197",
      icon: Phone,
    },
    {
      name: "CVV - Centro de Valorização da Vida",
      description: "Apoio emocional e prevenção ao suicídio",
      number: "188",
      icon: HeartHandshake,
    },
  ];

  const educationalResources = [
    {
      title: "Controles Parentais",
      items: [
        "Google Family Link - Controle parental para Android",
        "Screen Time - Controle nativo do iOS",
        "Microsoft Family Safety - Para dispositivos Windows",
        "Norton Family - Software de controle parental completo",
      ],
    },
    {
      title: "Materiais Educativos",
      items: [
        "Guias de privacidade das principais redes sociais",
        "Vídeos educativos sobre segurança digital para crianças",
        "Atividades e jogos sobre cidadania digital",
        "Cartilhas para educadores sobre tecnologia na escola",
      ],
    },
  ];

  return (
    <section id="recursos" className="py-20 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Recursos e Contatos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Links úteis, contatos de emergência e ferramentas para ajudar na proteção 
            digital de crianças e adolescentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="border-border shadow-lg">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                <Globe className="h-6 w-6 text-primary" />
                Organizações e Sites Úteis
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              {organizations.map((org, index) => (
                <div key={index} className="p-4 bg-background rounded-lg border border-border">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{org.name}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{org.description}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={() => window.open(org.url, '_blank')}
                      >
                        Visitar Site
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border shadow-lg">
            <CardHeader className="bg-destructive/5">
              <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                <Phone className="h-6 w-6 text-destructive" />
                Contatos de Emergência
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="p-4 bg-background rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <contact.icon className="h-5 w-5 text-destructive" />
                    <h4 className="font-semibold text-foreground">{contact.name}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{contact.description}</p>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-2xl font-bold text-primary">{contact.number}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationalResources.map((resource, index) => (
            <Card key={index} className="border-border shadow-lg">
              <CardHeader className="bg-secondary/5">
                <CardTitle className="text-xl text-foreground flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-secondary" />
                  {resource.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {resource.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-secondary mt-1">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
