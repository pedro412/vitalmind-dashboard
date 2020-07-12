import { Component, OnInit } from '@angular/core';

export interface Contacto {
  id: number;
  nombre: string;
  correo: string;
  telefono: string;
  fechaCreacion: Date;
  visto: boolean;
  cuestionarioId: number;
}

const CONTACTOS_DATA: Contacto[] = [
  {
    id: 1,
    nombre: 'Pedro Alvarez',
    correo: 'pedro@gmail.com',
    telefono: '',
    fechaCreacion: new Date(),
    visto: false,
    cuestionarioId: 1,
  },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'numero',
    'nombre',
    'correo',
    'telefono',
    'fechaCreacion',
  ];
  dataSource = CONTACTOS_DATA;

  constructor() {}

  ngOnInit(): void {}

  handleSelect(): void {
    console.log('algo');
  }
}
