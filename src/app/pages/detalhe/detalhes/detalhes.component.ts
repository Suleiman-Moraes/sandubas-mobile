import { Component, OnInit } from '@angular/core';
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { switchMap } from 'rxjs/operators';
import { Mercadoria } from '~/app/shared/models/mercadoria.model';
import { MercadoriaService } from '~/app/shared/mercadoria.service';
import { ResponseApi } from '~/app/shared/models/Response-api.model';


@Component({
    selector: 'ns-detalhes',
    templateUrl: './detalhes.component.html',
    styleUrls: ['./detalhes.component.css'],
    moduleId: module.id,
})
export class DetalhesComponent implements OnInit {

    itemId: number;
    item: Mercadoria;
    qtd: number = 0;

    constructor(
        private pageRoute: PageRoute,
        private routerExtensions: RouterExtensions,
        private page: Page,
        private mercadoriaService: MercadoriaService
    ){
        this.page.actionBarHidden = true;
        this.pageRoute.activatedRoute.pipe(
            switchMap(activatedRoute => activatedRoute.params)
        ).forEach((params) => {
            this.itemId = +params["id"];
            this.loadReasource(this.itemId);
        });
    }

    ngOnInit(): void{}

    plus(): void{
        this.qtd += 1;
    }

    minus():void{
        if(this.qtd > 0){
            this.qtd -= 1;
        }
    }

    toggleLike(): void{}

    toggleHeart(item): void{}

    categoryIcon(): void{}

    onCloseTap(): void{
        this.routerExtensions.back();
    }

    private loadReasource(id:number){
        this.mercadoriaService.findById(id).subscribe((response: ResponseApi)=>{
            if(response != null){
                if(response.data != null){
                    this.item = response.data;
                }else{
                    response.erros.forEach(x => alert(x));
                }
            }else{
                alert('Ocorreu um erro inesperado, tente novamente mais tarde!!!');
            }
        });
    }
}
