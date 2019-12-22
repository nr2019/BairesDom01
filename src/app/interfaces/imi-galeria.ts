export interface IMiGaleriaFull {
    id: number;
    titulo: string;
    galeria: IMiGaleria[];
}

export interface IMiGaleria {
    id: number;
    titulo: string;
    subtitulo: string;
    imagen: string;
}

