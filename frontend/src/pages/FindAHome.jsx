import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

export default function FindAHome() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  }

  return (
    <div className="min-h-screen flex flex-col bg-secondary/30 font-sans py-12">
      <main className="flex-1 grid place-items-center px-6">
        <div className="w-full max-w-xl bg-card rounded-3xl shadow-lg border border-border/50 p-8">
          <h1 className="text-3xl font-bold tracking-tight text-center">
            🐾 Cadastro do Focinho
          </h1>
          <p className="text-sm text-muted-foreground mt-2 text-center">
            Vou preencher minhas informações abaixo para que os humanos possam
            me conhecer melhor.
          </p>

          <Tabs defaultValue="signup" className="mt-6">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="signin">Entrar</TabsTrigger>
              <TabsTrigger value="signup">Cadastrar</TabsTrigger>
            </TabsList>

            <TabsContent value="signin" className="mt-5">
              <div className="text-center p-6 border rounded-2xl bg-muted/20 text-sm text-muted-foreground">
                <TabsContent value="signin" className="mt-5">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="si-email">E-mail</Label>
                      <Input
                        id="si-email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="si-password">Senha</Label>
                      <Input id="si-password" type="password" required />
                    </div>
                    <Button
                      type="submit"
                      className="w-full rounded-full"
                      disabled={loading}
                    >
                      {loading ? "Entrando…" : "Entrar"}
                    </Button>
                  </form>
                </TabsContent>
              </div>
            </TabsContent>

            <TabsContent value="signup" className="mt-5 space-y-5">
              {/* Nome e Espécie */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Nome do therianZinho</Label>
                  <Input id="name" placeholder="Ex: Mel" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="species">Espécie / Theriotype</Label>
                  <Input id="species" placeholder="Ex: Cão, Husky" />
                </div>
              </div>

              {/* Raça e Gênero */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="breed">Raça específica</Label>
                  <Input id="breed" placeholder="Ex: Vira-lata" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="sex">Gênero / Sexo</Label>
                  <Input id="sex" placeholder="Ex: Fêmea" />
                </div>
              </div>

              {/* Idade, Peso e Porte */}
              <div className="grid grid-cols-3 gap-2">
                <div className="space-y-1.5">
                  <Label htmlFor="age">Idade</Label>
                  <Input id="age" placeholder="Ex: 54 anos" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="weight">O seu peso</Label>
                  <Input id="weight" placeholder="Ex: 80 kg" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="size">Porte</Label>
                  <Select defaultValue="Médio">
                    <SelectTrigger id="size">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pequeno">Pequeno</SelectItem>
                      <SelectItem value="Médio">Médio</SelectItem>
                      <SelectItem value="Grande">Grande</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Hábito Alimentar */}
              <div className="space-y-1.5">
                <Label htmlFor="habitoAlimentar">Hábito Alimentar</Label>
                <Select defaultValue="Carnívoro">
                  <SelectTrigger id="habitoAlimentar">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Carnívoro">🥩 Carnívoro</SelectItem>
                    <SelectItem value="Vegetariano">🥦 Vegetariano</SelectItem>
                    <SelectItem value="Onívoro">🍳 Onívoro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Localização */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="cidade">Cidade</Label>
                  <Input id="cidade" placeholder="Ex: Campinas" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="estado">Estado (UF)</Label>
                  <Input id="estado" placeholder="SP" maxLength={2} />
                </div>
              </div>

              {/* Imagem */}
              <div className="space-y-1.5">
                <Label htmlFor="img">URL da Imagem / Foto de Perfil</Label>
                <Input
                  id="img"
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                />
              </div>

              {/* Necessidades Básicas e Especiais */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="necessidadesBasicas">
                    Necessidades Básicas
                  </Label>
                  <Input
                    id="necessidadesBasicas"
                    placeholder="Ex: Preferencia por guarana Jesus ..."
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="necessidadesEspeciais">
                    Necessidades Especiais
                  </Label>
                  <Input
                    id="necessidadesEspeciais"
                    placeholder="Que o meu lar tenha wifi"
                  />
                </div>
              </div>

              {/* Clínico, Resgate e Adestramento */}
              <div className="p-4 border border-dashed rounded-2xl bg-muted/10 space-y-3">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                  Ficha Clínica e Histórico
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <div className="space-y-1">
                    <Label htmlFor="microchip" className="text-xs">
                      Microchip
                    </Label>
                    <Input id="microchip" placeholder="#123" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="resgate" className="text-xs">
                      Resgatado em
                    </Label>
                    <Input id="resgate" placeholder="Ex: Mai/26" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="escolaridade" className="text-xs">
                      Treinamento
                    </Label>
                    <Input id="escolaridade" placeholder="Adestrado" />
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="motivoDoResgate" className="text-xs">
                    Motivo do Resgate / Histórico de Vida
                  </Label>
                  <Input
                    id="motivoDoResgate"
                    placeholder="Ex: Abandono nas ruas"
                  />
                </div>
                <div className="flex gap-4 pt-1">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="castrado" defaultChecked />
                    <Label htmlFor="castrado" className="text-xs font-medium">
                      Castrado
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="vermifugado" defaultChecked />
                    <Label
                      htmlFor="vermifugado"
                      className="text-xs font-medium"
                    >
                      Vermifugado
                    </Label>
                  </div>
                </div>
              </div>

              {/* Carteira de Vacinação */}
              <div className="p-4 border rounded-2xl bg-primary/5 space-y-3">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider block">
                  Carteira de Vacinação
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <Label className="text-xs">Nome da Vacina</Label>
                    <Input placeholder="Ex: Múltipla V10" />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Data de Aplicação</Label>
                    <Input placeholder="Ex: 12/02/2026" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="v-aplicada" defaultChecked />
                  <Label htmlFor="v-aplicada" className="text-xs font-medium">
                    Vacina já Aplicada
                  </Label>
                </div>
              </div>

              {/* Biografia / Descrição */}
              <div className="space-y-1.5">
                <Label htmlFor="bio">Biografia do therianZinho</Label>
                <Textarea
                  id="bio"
                  placeholder="Conte a história do therianZinho, traquinagens e comportamento..."
                />
              </div>

              <Button type="button" className="w-full rounded-full mt-2">
                Salvar Cadastro 🐾
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
