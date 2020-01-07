export interface IMiContacto {
    calle: string;
    numero: number;
    partido: string;
    cp: string;
    telefono: IMiTelefono[];
    provincia: string;
    pais: string;
    mail?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;

}

export interface IMiTelefono {
    id: number;
    tipo: string;
    numero: string;
}
