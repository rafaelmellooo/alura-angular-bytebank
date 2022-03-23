import { Injectable } from '@angular/core';

export interface Transferencia {
  valor: number;
  destino: string;
  data?: Date;
};

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  transferencias: Transferencia[];

  constructor() {
    this.transferencias = [];
  }

  get getTransferencias() {
    return this.transferencias;
  }

  adicionarTransferencia(transferencia: Transferencia) {
    transferencia.data = new Date();
    this.transferencias.push(transferencia);
  }
}
