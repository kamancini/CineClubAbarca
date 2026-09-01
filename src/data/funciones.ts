export interface Funcion {
  id: string;
  ciclo: string;
  titulo: string;
  director: string;
  anio: number;
  fecha: string;
  hora: string;
  lugar: string;
  nota: string;
  inscripcionAbierta: boolean;
  formularioUrl: string;
}

export const funciones: Funcion[] = [
  {
    id: "orlando",
    ciclo: "Cine Club de Lectura",
    titulo: "Orlando",
    director: "Sally Potter",
    anio: 1992,
    fecha: "Por confirmar",
    hora: "16:00",
    lugar: "Tegualda 1871, Ñuñoa",
    nota: "",
    inscripcionAbierta: true,
    formularioUrl: "https://forms.gle/SozjvtL2WaQYXn7Q8",
  },
];