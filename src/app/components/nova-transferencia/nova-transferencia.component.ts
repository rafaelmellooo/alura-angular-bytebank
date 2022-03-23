import { Component } from "@angular/core"
import { Router } from "@angular/router";
import { TransferenciaService } from "src/app/services/transferencia.service";
@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  // @Output() aoTransferir = new EventEmitter<Transferencia>(); // evento de saída

  valor: number;
  destino: string;

  constructor(private transferenciaService: TransferenciaService, private router: Router) {
  }

  transferir() {
    console.log('Solicitado nova transferência');

    // this.aoTransferir.emit({valor: this.valor, destino: this.destino});  // emitir evento de saída

    this.transferenciaService.adicionarTransferencia({valor: this.valor, destino: this.destino}).subscribe(transferencia => {
      console.log(transferencia);
      this.router.navigateByUrl('extrato');
    }, error => console.error(error));
  }
}
