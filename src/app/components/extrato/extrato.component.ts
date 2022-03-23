import { Component, OnInit } from '@angular/core';
import { Transferencia } from 'src/app/models/transferencia.model';
import { TransferenciaService } from 'src/app/services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  // @Input() transferencias: Transferencia[];
  transferencias: Transferencia[];

  constructor(private transferenciaService: TransferenciaService) {

  }

  ngOnInit(): void {
    this.transferenciaService.obterTransferencias().subscribe(transferencias => {
      console.table(transferencias);
      this.transferencias = transferencias;
    });
  }
}
