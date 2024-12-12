//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proximas-atividades',
  templateUrl: './proximas-atividades.component.html',
  styleUrl: './proximas-atividades.component.scss',
})
export class ProximasAtividadesComponent implements OnInit {
  progress: number = 0;
  title: string = 'últimos 7 dias';

  days = [
    { label: 'Qua 06', time: '1h:30', height: '30%', isSelected: false },
    { label: 'Qui 07', time: '2h:18', height: '65%', isSelected: false },
    { label: 'Sex 08', time: '1h:40', height: '55%', isSelected: false },
    { label: 'Sab 09', time: '1h:20', height: '40%', isSelected: false },
    { label: 'Dom 10', time: '4h:00', height: '100%', isSelected: false },
    { label: 'Seg 11', time: '2h:01', height: '50%', isSelected: false },
    { label: 'Ter 12', time: '1h:45', height: '45%', isSelected: true },
  ];
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
