import { Component, OnInit } from '@angular/core';
import { Transferencia, TransferenciaService } from 'src/app/services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: Transferencia[];

  constructor(private transferenciaService: TransferenciaService) {

  }

  ngOnInit(): void {
    this.transferencias = this.transferenciaService.getTransferencias;
  }
}
