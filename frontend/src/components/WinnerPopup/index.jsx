import { useState } from "react";
import { Trophy } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

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

export default function WinnerPopup() {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md text-center">
        <DialogHeader className="items-center">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent/15 border border-accent/30 mb-2 mx-auto">
            <Trophy className="h-8 w-8 text-accent" />
          </div>
          <DialogTitle className="font-display text-2xl font-bold">
            Vencedor do CodeCon
          </DialogTitle>
          <DialogDescription className="text-base">
            Este projeto conquistou o 1º lugar na{" "}
            <span className="font-semibold text-foreground">2ª Edição</span> do
            CodeCon — hackathon de desenvolvimento web.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-2">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3 font-semibold">
            Equipe
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {team.map((member) => (
              <a
                key={member.name}
                href={member.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-accent/50 transition-colors"
              >
                {/* <Linkedin className="h-3 w-3 text-accent" /> */}
                {member.name}
              </a>
            ))}
          </div>
        </div>

        <Button
          onClick={() => setOpen(false)}
          className="mt-2 w-full rounded-full"
        >
          Explorar o projeto
        </Button>
      </DialogContent>
    </Dialog>
  );
}
