import { Button } from "@/components/ui/button";
import "./Header.css";
import { Link } from "lucide-react";
export default function Header() {
  return (
    <header className="header-container">
      <div className="header-wrapper">
        <Link to="/" className="logo-link">
          <span className="logo-icon-wrapper">
            {/* Aqui você pode colocar um ícone ou imagem para o logo */}
          </span>
          Therian Haven
        </Link>

        {/* Navegação */}
        <nav className="nav-menu">
          <Link
            to="/"
            className="nav-link"
            activeProps={{ className: "text-foreground" }}
            activeOptions={{ exact: true }}
          >
            Início
          </Link>
          <Link
            to="/agendamento"
            className="nav-link"
            activeProps={{ className: "text-foreground" }}
          >
            Agendamento
          </Link>
          <Link
            to="/adocao"
            className="nav-link"
            activeProps={{ className: "text-foreground" }}
          >
            Adoção
          </Link>
          <a href="#contato" className="nav-link">
            Contato
          </a>
        </nav>

        {/* Call to Action */}
        <Button asChild size="sm" className="btn-agendar">
          <Link to="/agendamento">Agendar banho</Link>
        </Button>
      </div>
    </header>
  );
}
