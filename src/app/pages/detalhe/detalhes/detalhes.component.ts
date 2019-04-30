import { Component, OnInit } from '@angular/core';
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { switchMap } from 'rxjs/operators';
import { Mercadoria } from '~/app/shared/models/mercadoria.model';

@Component({
  selector: 'ns-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css'],
  moduleId: module.id,
})
export class DetalhesComponent implements OnInit {

  itemId: number;
  item: Mercadoria;

  constructor(
    private pageRoute: PageRoute,
    private routerExtensions: RouterExtensions,
    private page: Page
  ){
    this.page.actionBarHidden = true;

    this.pageRoute.activatedRoute.pipe(
      switchMap(activatedRoute => activatedRoute.params)
    ).forEach((params) => {
      this.itemId = +params["id"];
    });
  }

  ngOnInit() {
  }

}
