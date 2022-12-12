import { Component, OnInit } from '@angular/core';
import { AgentService } from '../services/agent.service';
@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css'],
})
export class AgentComponent implements OnInit {
  constructor(private agentService: AgentService) {}
  countAgents: any;
  ngOnInit(): void {
    this.agentService.getAgents().subscribe((data) => {
      let newAgents = data.results.filter(
        (el: { id: string }) => el.id != '000'
      );
      this.countAgents = {
        total: newAgents.length,
        Neverconnected_agents: 0,
        Active_agents: 0,
        Disconnected_agents: 0,
        Pending_agents: 0,
      };

      newAgents.forEach((element: { status: string }) => {
        if (element.status == 'active') {
          this.countAgents['Active_agents']++;
        } else if (element.status == 'never_connected') {
          this.countAgents['Neverconnected_agents']++;
        } else if (element.status == 'pending') {
          this.countAgents['Pending_agents']++;
        } else if (element.status == 'disconnected') {
          this.countAgents['Disconnected_agents']++;
        }
      });

      console.log('countAgents', this.countAgents);

      console.log('new agents', newAgents);
    });
  }
}
