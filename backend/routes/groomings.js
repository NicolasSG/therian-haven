import { Router } from "express";

const router = Router();

const services = [
  { id: "banho", nome: "Banho", duracao: "45 min", preco: 70 },
  { id: "tosa", nome: "Tosa completa", duracao: "1h 30", preco: 120 },
  { id: "hidratacao", nome: "Hidratacao", duracao: "1h", preco: 90 },
  { id: "combo", nome: "Combo banho + tosa", duracao: "2h", preco: 170 },
];

router.get("/", (req, res) => {
  res.json(services);
});

router.post("/", (req, res) => {
  const { servico, horario, pet, tutor, telefone, data } = req.body;

  if (!servico || !horario || !pet || !tutor || !telefone || !data) {
    res.status(400).json({ message: "Preencha todos os campos obrigatorios" });
    return;
  }

  res.status(201).json({
    message: "Agendamento criado com sucesso",
    appointment: { servico, horario, pet, tutor, telefone, data },
  });
});

export default router;
