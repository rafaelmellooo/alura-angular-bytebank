import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private transferencias: Transferencia[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.transferencias = [];
  }

  get getTransferencias() {
    return this.transferencias;
  }

  obterTransferencias() {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionarTransferencia(transferencia: Transferencia) {
    transferencia.data = new Date();

    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }
}
