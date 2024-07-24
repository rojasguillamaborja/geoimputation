//modelo de datos de imputacion de tiempos en geoposición con id, hora de inicio, hora de fin, id de usuario y coordenadas
import { Geoposition } from './geoposition';
export interface Imputation {
  id: number;
  start_time: string;
  end_time: string;
  start_coordinates: Geoposition;
  end_coordinates: Geoposition;
  address: string;
  status: string;
  comments: string;
}
