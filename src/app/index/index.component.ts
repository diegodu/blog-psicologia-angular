import { Component, OnInit } from '@angular/core';

interface datosTarjeta{
  imagenP: string,
  tituloPagina: string;
  textoB: string;
  idTarjeta: number;

}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tarjetas : Array<datosTarjeta> = [
    {
      imagenP: "Null",
      tituloPagina: "Jull",
      textoB: "El presente blog tiene como objetivo informar acerca de la eficacia de los tratamientos basados en Mindfulness en los trastornos de ansiedad generalizada en la adultez,Para ello se realizó una revisión bibliográfica de tipo retrospectiva, también se redactó un análisiscrítico de los resultados obtenidos en la revisión de la literatura ",
      idTarjeta: 12
    },
    {
      imagenP: "Hola mundo",
      tituloPagina: "Jull",
      textoB: "El presente blog tiene como objetivo informar acerca de la eficacia de los tratamientos basados en Mindfulness en los trastornos de ansiedad generalizada en la adultez,Para ello se realizó una revisión bibliográfica de tipo retrospectiva, también se redactó un análisiscrítico de los resultados obtenidos en la revisión de la literatura ",
      idTarjeta: 22
    },
    {
      imagenP: "Hola Christian",
      tituloPagina: "Jull",
      textoB: "El presente blog tiene como objetivo informar acerca de la eficacia de los tratamientos basados en Mindfulness en los trastornos de ansiedad generalizada en la adultez,Para ello se realizó una revisión bibliográfica de tipo retrospectiva, también se redactó un análisiscrítico de los resultados obtenidos en la revisión de la literatura ",
      idTarjeta: 23
    },
    {
      imagenP: "Hola mundo",
      tituloPagina: "Jull",
      textoB: "El presente blog tiene como objetivo informar acerca de la eficacia de los tratamientos basados en Mindfulness en los trastornos de ansiedad generalizada en la adultez,Para ello se realizó una revisión bibliográfica de tipo retrospectiva, también se redactó un análisiscrítico de los resultados obtenidos en la revisión de la literatura ",
      idTarjeta: 22
    },
    {
      imagenP: "Hola Christian",
      tituloPagina: "Jull",
      textoB: "El presente blog tiene como objetivo informar acerca de la eficacia de los tratamientos basados en Mindfulness en los trastornos de ansiedad generalizada en la adultez,Para ello se realizó una revisión bibliográfica de tipo retrospectiva, también se redactó un análisiscrítico de los resultados obtenidos en la revisión de la literatura ",
      idTarjeta: 23
    },
    {
      imagenP: "Hola Christian",
      tituloPagina: "Jull",
      textoB: "El presente blog tiene como objetivo informar acerca de la eficacia de los tratamientos basados en Mindfulness en los trastornos de ansiedad generalizada en la adultez,Para ello se realizó una revisión bibliográfica de tipo retrospectiva, también se redactó un análisiscrítico de los resultados obtenidos en la revisión de la literatura ",
      idTarjeta: 23
    }
    ,
    {
      imagenP: "Hola Christian",
      tituloPagina: "Jull",
      textoB: "El presente blog tiene como objetivo informar acerca de la eficacia de los tratamientos basados en Mindfulness en los trastornos de ansiedad generalizada en la adultez,Para ello se realizó una revisión bibliográfica de tipo retrospectiva, también se redactó un análisiscrítico de los resultados obtenidos en la revisión de la literatura ",
      idTarjeta: 23
    }



  ]

}
