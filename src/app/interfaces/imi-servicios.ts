import { IMiGaleria } from './imi-galeria';

export interface IMiServicios {
    id: number;
    titulo: string;
    subtitulo: string;
    descripcion: string;
    imagen: string;
    galeria?: IMiGaleria[];
}
