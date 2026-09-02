import datosFunciones from "./funciones.json";

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
  afiche: string;
  inscripcionAbierta: boolean;
  formularioUrl: string;
}

export const funciones = datosFunciones as Funcion[];