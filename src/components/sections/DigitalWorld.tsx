import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, MessageSquare, Video, Share2 } from "lucide-react";

const DigitalWorld = () => {
  const platforms = [
    {
      icon: Gamepad2,
      title: "Jogos Online",
      description: "Plataformas como Roblox, Fortnite e Minecraft são populares entre jovens, oferecendo socialização e criatividade.",
      examples: ["Roblox", "Fortnite", "Minecraft", "Among Us"],
    },
    {
      icon: MessageSquare,
      title: "Redes Sociais",
      description: "Espaços de conexão e expressão que requerem orientação sobre privacidade e comportamento online.",
      examples: ["Instagram", "TikTok", "Snapchat", "Discord"],
    },
    {
      icon: Video,
      title: "Conteúdo em Vídeo",
      description: "Plataformas de vídeo e streaming onde jovens consomem e criam conteúdo constantemente.",
      examples: ["YouTube", "Twitch", "Netflix", "YouTube Kids"],
    },
    {
      icon: Share2,
      title: "Comunicação Digital",
      description: "Apps de mensagens e comunicação usados para manter contato com amigos e família.",
      examples: ["WhatsApp", "Telegram", "Messenger"],
    },
  ];

  return (
    <section id="mundo-digital" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O Mundo Digital
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entenda as principais plataformas e ambientes digitais onde crianças e 
            adolescentes passam seu tempo online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platforms.map((platform, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <platform.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">{platform.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{platform.description}</p>
                <div className="flex flex-wrap gap-2">
                  {platform.examples.map((example, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 border-primary/20 bg-primary/5">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              💡 Importante Saber
            </h3>
            <p className="text-muted-foreground">
              Cada plataforma tem suas próprias regras, recursos de segurança e faixas etárias 
              recomendadas. É fundamental que pais e responsáveis conheçam os ambientes digitais 
              frequentados pelos jovens e estabeleçam limites apropriados para cada idade.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DigitalWorld;
