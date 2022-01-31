import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor(private http: HttpClient) {
    this.getAgents();
  }

  URL_API = "https://valorant-api.com/v1"

  getAgents() {
    return this.http.get(`${this.URL_API}/agents`)
  }
}
