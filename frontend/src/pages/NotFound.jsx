import { NavLink } from "react-router-dom";
import therianVini from "@/assets/therian-images/therianvini.png";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center gap-6">
      <img
        src={therianVini}
        alt="Therianvini confuso"
        className="w-64 h-64 object-cover rounded-[60px] rounded-bl-[120px]"
      />

      <div>
        <p className="font-display font-black text-8xl text-accent leading-none">
          404
        </p>
        <p className="font-display font-bold text-3xl mt-2 text-foreground">
          Woof Woof!
        </p>
        <p className="mt-3 text-muted-foreground max-w-xs mx-auto">
          Esse therianZinho farejou em todo lugar mas não encontrou a página que
          você procura.
        </p>
      </div>

      <Button asChild className="rounded-full px-8">
        <NavLink to="/">Voltar para o início</NavLink>
      </Button>
    </section>
  );
}
