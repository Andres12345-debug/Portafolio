import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  animations: [
    trigger('fadeInAnimation', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate('1s ease-out', style({
          opacity: 1
        }))
      ])
    ])
  ]
  
})
export class InicioComponent implements OnInit {
  animationState = 'void'

  // Puedes definir las rutas de tus imágenes aquí
  defaultImage = '../../../../assets/img/julianMontanez.png';
  hoverImage = '../../../../assets/img/Ghibli.png';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.animationState = 'visible';
    }, 100);
    // Aquí puedes agregar la lógica que deseas ejecutar al inicializar el componente
  }


}
