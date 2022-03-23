import { Component, EventEmitter, Output } from "@angular/core";
import { Transferencia } from "src/app/services/transferencia.service";
@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<Transferencia>();

  valor: number;
  destino: string;

  transferir() {
    console.log('Solicitado nova transferência');

    this.aoTransferir.emit({valor: this.valor, destino: this.destino});

    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = '';
  }
}
