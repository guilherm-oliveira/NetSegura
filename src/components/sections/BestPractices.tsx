import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const BestPractices = () => {
  const practices = {
    parents: [
      "Configure controles parentais em todos os dispositivos e plataformas",
      "Crie contas de família em serviços que permitem supervisão",
      "Revise regularmente as configurações de privacidade",
      "Mantenha softwares e aplicativos sempre atualizados",
      "Use senhas fortes e ative autenticação em duas etapas",
      "Estabeleça um 'contrato digital' familiar com regras claras",
    ],
    children: [
      "Nunca compartilhe informações pessoais (endereço, escola, telefone)",
      "Use nomes de usuário que não revelem identidade real",
      "Não aceite solicitações de amizade de desconhecidos",
      "Pense antes de postar - tudo online pode ser permanente",
      "Conte a um adulto de confiança se algo online incomodar",
      "Seja gentil e respeitoso em todas as interações online",
      "Não clique em links suspeitos ou baixe arquivos desconhecidos",
      "Faça pausas regulares e mantenha hobbies offline",
    ],
    educators: [
      "Integre educação digital ao currículo escolar",
      "Promova discussões sobre cidadania digital",
      "Ensine pensamento crítico para avaliar informações online",
      "Crie políticas claras sobre uso de dispositivos na escola",
      "Ofereça workshops para pais sobre segurança digital",
      "Esteja atento a sinais de cyberbullying entre alunos",
    ],
  };

  return (
    <section id="boas-praticas" className="py-20 bg-gradient-to-b from-accent to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Boas Práticas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recomendações práticas para pais, crianças e educadores promoverem 
            um ambiente digital mais seguro e saudável.
          </p>
        </div>

        <div className="space-y-6">
          <Card className="border-border shadow-lg">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                Para Pais e Responsáveis
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {practices.parents.map((practice, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">{practice}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border shadow-lg">
            <CardHeader className="bg-secondary/5">
              <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-secondary" />
                Para Crianças e Adolescentes
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {practices.children.map((practice, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span className="text-muted-foreground">{practice}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border shadow-lg">
            <CardHeader className="bg-accent">
              <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-accent-foreground" />
                Para Educadores
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {practices.educators.map((practice, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">{practice}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 border-secondary/20 bg-secondary/5">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              🌟 Dica Essencial
            </h3>
            <p className="text-muted-foreground">
              A segurança digital é um esforço coletivo. Quando pais, crianças e educadores 
              trabalham juntos, aplicando boas práticas de forma consistente, criamos um 
              ambiente online mais seguro e positivo para todos. A educação contínua e o 
              diálogo aberto são as chaves para o sucesso.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BestPractices;
