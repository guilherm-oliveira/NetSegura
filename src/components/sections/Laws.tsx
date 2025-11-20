import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Shield, FileText, AlertCircle } from "lucide-react";

const Laws = () => {
  const laws = [
    {
      icon: FileText,
      title: "Marco Civil da Internet (Lei 12.965/2014)",
      description: "Estabelece princípios, garantias, direitos e deveres para o uso da internet no Brasil, incluindo proteção da privacidade e dados pessoais.",
      points: [
        "Direito à privacidade e proteção de dados",
        "Liberdade de expressão com responsabilidade",
        "Neutralidade da rede",
      ],
    },
    {
      icon: Shield,
      title: "LGPD - Lei Geral de Proteção de Dados (Lei 13.709/2018)",
      description: "Regula o tratamento de dados pessoais, incluindo dados de crianças e adolescentes, exigindo consentimento dos pais.",
      points: [
        "Consentimento específico dos pais para menores de 12 anos",
        "Proteção especial de dados de crianças e adolescentes",
        "Direito ao esquecimento e portabilidade de dados",
      ],
    },
    {
      icon: Scale,
      title: "ECA - Estatuto da Criança e do Adolescente (Lei 8.069/1990)",
      description: "Garante proteção integral a crianças e adolescentes, incluindo ambientes digitais.",
      points: [
        "Proteção contra exploração e abuso",
        "Direito à informação adequada à idade",
        "Responsabilização de adultos por crimes contra menores",
      ],
    },
    {
      icon: AlertCircle,
      title: "Lei Carolina Dieckmann (Lei 12.737/2012)",
      description: "Criminaliza a invasão de dispositivos informáticos e o compartilhamento não autorizado de conteúdo.",
      points: [
        "Crime invadir dispositivos alheios",
        "Penalidades para divulgação não autorizada de imagens",
        "Proteção contra crimes cibernéticos",
      ],
    },
  ];

  const rights = [
    "Direito à privacidade e proteção de imagem",
    "Direito de não sofrer discriminação ou bullying",
    "Direito ao acesso seguro à informação",
    "Direito à educação sobre uso seguro da internet",
    "Direito de reportar abusos e crimes online",
    "Direito ao esquecimento de conteúdo inapropriado",
  ];

  return (
    <section id="leis" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Leis e Proteção Legal
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça o arcabouço legal brasileiro que protege crianças e adolescentes 
            no ambiente digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {laws.map((law, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <law.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{law.title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">{law.description}</p>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-foreground mb-2">Principais pontos:</h4>
                <ul className="space-y-2">
                  {law.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-border shadow-lg mb-6">
          <CardHeader className="bg-secondary/5">
            <CardTitle className="text-2xl text-foreground">
              Direitos de Crianças e Adolescentes Online
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rights.map((right, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-secondary mt-1">✓</span>
                  <span className="text-muted-foreground">{right}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-destructive/20 bg-destructive/5">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-destructive" />
              Como Denunciar Crimes Digitais
            </h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Se você ou alguém que conhece for vítima de crime digital, é importante 
                denunciar às autoridades competentes:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• <strong>Safernet Brasil:</strong> Central Nacional de Denúncias de Crimes Cibernéticos</li>
                <li>• <strong>Delegacia de Polícia:</strong> Boletim de Ocorrência em delegacia física ou online</li>
                <li>• <strong>Ministério Público:</strong> Denúncias de violação de direitos</li>
                <li>• <strong>Disque 100:</strong> Canal para denunciar violações de direitos humanos</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Laws;
