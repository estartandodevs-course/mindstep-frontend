import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-profissional',
  templateUrl: './perfil-profissional.component.html',
  styleUrl: './perfil-profissional.component.scss',
})
export class PerfilProfissionalComponent {
  /*
  @Input() maxRating = 5;
  maxRatingArr: any = [];

  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating).fill(0);
  }
  */

  title: string = 'Analista de Dados | TEA de alto funcionamento | Comunicadora | Mentoria de LinkedIn ';
  subtitle: string = 'Minas Gerais, Belo Horizonte, Brasil';
  seguidores: string = '233 seguidores';
  nivel: string = 'Nível Ouro';
  bioText: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quibusdam? Repellendus quod, accusantium deleniti temporibus, modi beatae ducimus quaerat quam labore quasi veniam inventore iure nobis accusamus magnam pariatur reprehenderit!';
}
