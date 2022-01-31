import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.component.html',
  styleUrls: ['./agentes.component.css']
})
export class AgentesComponent implements OnInit {
  agentes: any;

  constructor(private principalService: PrincipalService) { }

  ngOnInit(): void {
    this.getAgents();
    this.show();
  }

  getAgents() {
    this.principalService.getAgents().toPromise().then(res => this.agentes = res)
  }

  show() {
    console.log(this.agentes)
  }
}
