import { Card, CardContent } from "@/components/ui/card";
import { Globe, BrainCircuit, HatGlasses } from "lucide-react";

const Introduction = () => {
  const stats = [
    {
      icon: Globe,
      value: "92%",
      label: "das crianças e adolescentes são usuários de internet",
    },
    {
      icon: HatGlasses,
      value: "30%",
      label: "das crianças e adolescentes já tiveram contato com alguém desconhecido nas redes",
    },
    {
      icon: BrainCircuit,
      value: "65%",
      label: "das crianças e adolescentes usam IA generativa para estudar, criar conteúdo e lidar com emoções",
    },
  ];

  return (
    <section id="introducao" className="py-20 bg-gradient-to-b from-accent to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Introdução
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vivemos na era digital, onde crianças e adolescentes crescem rodeados por 
            tecnologia. É essencial entender esse universo para orientá-los adequadamente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-border shadow-lg">
          <CardContent className="pt-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Por que este guia é importante?
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                A internet e os dispositivos digitais fazem parte da vida moderna, oferecendo 
                oportunidades incríveis de aprendizado, conexão e entretenimento. No entanto, 
                também apresentam desafios e riscos que precisam ser compreendidos e gerenciados.
              </p>
              <p>
                Este guia foi criado para ajudar pais, educadores e responsáveis a navegar 
                pelo mundo digital junto com crianças e adolescentes, promovendo um uso 
                consciente, seguro e equilibrado da tecnologia.
              </p>
              <p>
                Aqui você encontrará informações práticas, dicas baseadas em evidências e 
                recursos que facilitarão conversas importantes sobre segurança digital, 
                bem-estar online e cidadania digital.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Introduction;
