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
//////////////////////////////////////////////////////////////////
  ngOnInit() {
  }
  toggleLike() {
    this.item.isLike = !this.item.isLike;
    if (this.item.isLike) {
        this.item.likes += 1;
    } else {
        this.item.likes -= 1;
    }
}

toggleHeart(item) {
    item.isFavorite = !item.isFavorite;
}

categoryIcon() {
    switch (this.item.categoryTag) {
        case "Burger":
            return String.fromCharCode(0xf0f5); //"fa-cutlery";
            break;
        case "Beer":
            return String.fromCharCode(0xf0fc); //"fa-beer";
            break;
        case "Pancake":
            return String.fromCharCode(0xf0f4); //"fa-coffee";
            break;
        case "Cake":
            return String.fromCharCode(0xf1fd); //"fa-birthday-cake";
            break;
        default:
            return String.fromCharCode(0xf06d); //"fa-fire";
            break;
    }
}

onCloseTap(): void {
    this.routerExtensions.back();
}

}
