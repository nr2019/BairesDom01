export interface IGaleriaFull {
    id: number;
    titulo: string;
    galeria: IGaleria[];
}

export interface IGaleria {
    id: number;
    titulo: string;
    subtitulo: string;
    imagen: string;
}

