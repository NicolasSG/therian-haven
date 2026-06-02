import therianLogo from "@/assets/therian logo.png";
import { Trophy } from "lucide-react";

const team = [
  { name: "Luiz Hondo", url: "https://www.linkedin.com/in/luizhondo/" },
  { name: "Gisela Elia", url: "https://www.linkedin.com/in/giselaelia/" },
  {
    name: "Marcela Graef",
    url: "https://www.linkedin.com/in/marcela-graef-do-couto-8163472b0/",
  },
  { name: "Nicolas SG", url: "https://www.linkedin.com/in/nicolas-sg-br/" },
  {
    name: "Mayza Ynara",
    url: "https://www.linkedin.com/in/mayza-ynara-mendes-rodrigues/",
  },
];

export default function index() {
  return (
    <footer
      id="contato"
      className="border-t border-border/60 bg-background text-foreground"
    >
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-4">
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-accent/40 bg-card/60 px-6 py-3 shadow-sm">
            <Trophy className="h-5 w-5 text-accent shrink-0" />
            <span className="font-display font-semibold text-sm text-foreground">
              Vencedor do CodeCon — 2ª Edição
            </span>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-display font-bold text-lg">
              <span className="grid place-items-center h-9 w-9 rounded-full bg-primary text-primary-foreground overflow-hidden">
                <img
                  src={therianLogo}
                  alt="Therian Heaven"
                  className="h-full w-full object-cover"
                />
              </span>
              Therian Heaven
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">
              Banho, tosa e amor para o seu melhor amigo. Também cuidamos de
              quem ainda procura um lar.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm mb-3">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>(11) 99999-0000</li>
              <li>ola@therianheaven.com</li>
              <li>Rua das Flores, 123 — SP</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm mb-3">
              Horários
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Seg — Sex: 9h às 19h</li>
              <li>Sábado: 9h às 17h</li>
              <li>Domingo: fechado</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border/60 pt-8">
          <h4 className="font-display font-semibold text-sm text-center mb-5 text-muted-foreground uppercase tracking-wider">
            Construído por
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {team.map((member) => (
              <a
                key={member.name}
                href={member.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-accent/50 transition-colors"
              >
                {/* <Linkedin className="h-3.5 w-3.5 text-accent" /> */}
                {member.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border/60 mt-8 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Feito com 🐾
      </div>
    </footer>
  );
}
