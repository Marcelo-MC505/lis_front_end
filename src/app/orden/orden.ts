
export class Orden {
    idOrden!: number;
    numeroOrden!: string;
    idEmpleado!: number;
    idPaciente!: number;
    idTipoServicio!: number;
    idTipoOrden!: number;
    asistencia!: string;
    observaciones!: string;
    fechaOrden!: Date;
    activo!: string;
    fechaImprime!: Date;
    idUsuarioImprime!: number;
    estado!: number;
    finalizado!: string;
    fechaCita!: Date;
    fechaPReporte!: Date;
}
