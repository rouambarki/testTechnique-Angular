import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgentService {
  agentsUrl: string = 'http://localhost:8080/api/v1/agents';

  constructor(private http: HttpClient) {}

  getAgents(): Observable<any> {
    return this.http.get(this.agentsUrl);
  }
}
