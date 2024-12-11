//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proximas-atividades',
  templateUrl: './proximas-atividades.component.html',
  styleUrl: './proximas-atividades.component.scss',
})
export class ProximasAtividadesComponent implements OnInit {
  progress: number = 0;
  //constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadProgress();
  }

  //  O CÓDIGO A BAIXO TEM QUE ESTÁ DENTRO DESSA FUNÇÃO E COM O ENDPOINT DO BACKEND
  loadProgress(): void {}
  /*
    // Substitua pelo seu endpoint real
    this.http.get<{ progress: number }>('/api/progress').subscribe({
      next: (data) => {
        this.progress = data.progress;
      },
      error: (err) => {
        console.error('Erro ao carregar o progresso:', err);
      },
    });
  }*/
}
