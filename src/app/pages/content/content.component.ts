import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  photoCover:string = "https://observatoriodocinema.uol.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?width=1400&height=800&format=webp&quality=91&imagick=/wp-content/uploads/2021/02/homem-de-ferro-tony-divulgacao.jpg";
  @Input()
  contentTitle:string = "MINHA NOTÍCIA";
  @Input()
  contentDescription:string = "Olá mundo";
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )
  }

  setValuesToComponent (id:string) {
    const result = dataFake.filter(article => article.id == id)
  }

}
