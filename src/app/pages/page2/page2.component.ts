import { Component, OnInit } from '@angular/core';


interface datosSecciones{
  titulo: string;
  imgSec: string ;
  parrafo: string;
}

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  subtitulo : string = ''
  tituloPrincipal: String = '';
  imagenPrincipal: String = '';

  constructor() { }

  ngOnInit(): void {
  }

  secciones : Array<datosSecciones> = [
    {
      titulo : "soy un titulo con Un Switch444",
      imgSec : "../../../assets/img/102291825_590345768252505_2729692350740692992_n.jpg",
      parrafo : "soy un parafoLorem ipsum dolor sit amet consectetur adipisicing elit. Nam autem tempora, quaerat aut quae et enim perferendis libero maxime cum eaque neque facere architecto sit est saepe consectetur modi temporibus?"

    },
    {
      titulo : "soy un titulo con Un segundo Switch",
      imgSec : "../../../assets/img/102291825_590345768252505_2729692350740692992_n.jpg",
      parrafo : "soy un parrafo Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam autem tempora, quaerat aut quae et enim perferendis libero maxime cum eaque neque facere architecto sit est saepe consectetur modi temporibus?"
    },
    {
      titulo : "null",
      imgSec : "../../../assets/img/102291825_590345768252505_2729692350740692992_n.jpg",
      parrafo : "soy un parrafo Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam autem tempora, quaerat aut quae et enim perferendis libero maxime cum eaque neque facere architecto sit est saepe consectetur modi temporibus?"
    }
    ,
    {
      titulo : "nulaaaaaaaal",
      imgSec : "../../../assets/img/102291825_590345768252505_2729692350740692992_n.jpg",
      parrafo : "null"


    }
    ,
    {
      titulo : "null",
      imgSec : "../../../assets/img/102291825_590345768252505_2729692350740692992_n.jpg",
      parrafo : "soy un parrafo Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam autem tempora, quaerat aut quae et enim perferendis libero maxime cum eaque neque facere architecto sit est saepe consectetur modi temporibus?"
    }
  ]


}
