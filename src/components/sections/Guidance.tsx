import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Heart, Eye, BookOpen, Users, Calendar } from "lucide-react";

const Guidance = () => {
  const strategies = [
    {
      icon: MessageCircle,
      title: "Diálogo Aberto",
      tips: [
        "Crie um ambiente sem julgamentos onde jovens se sintam confortáveis para compartilhar",
        "Pergunte regularmente sobre o que fazem online e com quem interagem",
        "Mostre interesse genuíno em jogos e plataformas que usam",
        "Compartilhe suas próprias experiências e preocupações de forma honesta",
      ],
    },
    {
      icon: Eye,
      title: "Supervisão Ativa",
      tips: [
        "Mantenha dispositivos em áreas comuns da casa quando possível",
        "Use controles parentais apropriados para a idade",
        "Revise periodicamente o histórico e atividades online (com transparência)",
      ],
    },
    {
      icon: Calendar,
      title: "Estabeleça Limites",
      tips: [
        "Defina horários específicos para uso de telas",
        "Crie zonas livres de tecnologia (refeições, quarto antes de dormir)",
        "Estabeleça limites de tempo diário apropriados para cada idade",
        "Seja consistente com as regras estabelecidas",
      ],
    },
    {
      icon: BookOpen,
      title: "Educação Digital",
      tips: [
        "Ensine sobre privacidade e proteção de dados pessoais",
        "Explique os riscos de compartilhar informações online",
        "Mostre como identificar conteúdo falso ou enganoso",
        "Discuta sobre comportamento respeitoso em ambientes digitais",
      ],
    },
    {
      icon: Heart,
      title: "Bem-Estar Emocional",
      tips: [
        "Observe sinais de estresse ou ansiedade relacionados ao uso digital",
        "Incentive atividades offline e interações presenciais",
        "Discuta sobre comparação social e pressão nas redes sociais",
        "Promova autoestima saudável independente de validação online",
      ],
    },
    {
      icon: Users,
      title: "Seja um Exemplo",
      tips: [
        "Demonstre uso equilibrado de tecnologia",
        "Respeite os mesmos limites que estabelece",
        "Mostre como usar a tecnologia de forma produtiva",
        "Esteja presente e atento nas interações familiares",
      ],
    },
  ];

  return (
    <section id="orientar" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Como Orientar Jovens
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estratégias práticas e eficazes para guiar crianças e adolescentes 
            em seu uso de tecnologia e plataformas digitais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strategies.map((strategy, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <strategy.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-foreground">{strategy.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {strategy.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-secondary mt-1 font-bold">✓</span>
                      <span className="text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 border-primary/20 bg-primary/5">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              ⭐ Lembre-se
            </h3>
            <p className="text-muted-foreground">
              A orientação eficaz combina supervisão, comunicação e educação. O objetivo 
              não é controlar totalmente, mas preparar jovens para tomar decisões seguras 
              e responsáveis no ambiente digital. A confiança e o diálogo são fundamentais 
              para uma relação saudável com a tecnologia.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Guidance;
