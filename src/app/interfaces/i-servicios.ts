import { IGaleria } from './i-galeria';

export interface IServicios {
    id: number;
    titulo: string;
    subtitulo: string;
    descripcion: string;
    imagen: string;
    galeria?: IGaleria[];
}
