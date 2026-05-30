import { Router } from "express";

const router = Router();

const therians = [
  {
    id: 1,
    nome: "Aurora",
    theriotype: "Lobo Cinzento",
    idade: 19,
    cidade: "Presidente Venceslau",
    estado: "Sao Paulo",
    status: true,
  },
  {
    id: 2,
    nome: "Raven",
    theriotype: "Corvo",
    idade: 24,
    cidade: "Campinas",
    estado: "Sao Paulo",
    status: true,
  },
];

router.get("/", (req, res) => {
  res.json(therians);
});

router.get("/:id", (req, res) => {
  const therian = therians.find((item) => item.id === Number(req.params.id));

  if (!therian) {
    res.status(404).json({ message: "Therian nao encontrado" });
    return;
  }

  res.json(therian);
});

export default router;
