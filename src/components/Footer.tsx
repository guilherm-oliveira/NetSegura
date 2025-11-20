import { Shield, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-8 w-8" />
              <span className="text-xl font-bold">NetSegura</span>
            </div>
            <p className="text-background/80">
              Promovendo o uso consciente e seguro de plataformas digitais por 
              crianças e adolescentes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a 
                  href="https://new.safernet.org.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-background flex items-center gap-2"
                >
                  SaferNet Brasil
                  <ExternalLink className="h-4 w-4" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.internetsegura.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-background flex items-center gap-2"
                >
                  Internet Segura
                  <ExternalLink className="h-4 w-4" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.gov.br/mj/pt-br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-background flex items-center gap-2"
                >
                  Ministério da Justiça
                  <ExternalLink className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contatos de Emergência</h3>
            <ul className="space-y-2 text-background/80">
              <li>Disque 100 - Direitos Humanos</li>
              <li>197 - Polícia Civil</li>
              <li>188 - CVV</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/80">
          <p className="mt-2 text-sm">
            Este é um projeto educacional de conscientização sobre uso responsável de 
            tecnologia por crianças e adolescentes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
