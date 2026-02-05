export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  // Campos agregados por CR-004
  lote: string; 
  fechaCaducidad: Date;
  esPerecible: boolean;
}
