import {ElementRef, ViewChild} from "@angular/core";
import {Animation, NavController, NavParams, Page, Transition, TransitionOptions, ViewController} from "ionic-angular";

import {UnsplashItUtil} from "../../utils/UnsplashItUtil";
import {ImageEntity} from "../../utils/ImageEntity";

import {SwipeToClose} from "../../components/SwipeToClose";

@Page({
  directives: [SwipeToClose],
  styles: [
      `
        .pv-btn-container{
            float: right;
        }

        .pv-show-cursor{
            cursor: pointer;
        }

        .pv-img{
            width: 100%;
            display: inline-block;
        }
      `
  ],
  template: `
    <ion-content>
        <swipe-to-close (dismiss)="dismissView()">
            <div class="pv-btn-container" >
                <button large clear class="pv-show-cursor" (click)="dismissView()">
                    <ion-icon name="close"></ion-icon>
                </button>
            </div>
            <img class="pv-image" [src]="imageEntity?.mediumSizeUrl"/>

        </swipe-to-close>
    </ion-content>
  `
})
export class PhotoViewer {

    private imageDisplayStyle:string;
    private imageEntity:ImageEntity;

    constructor(private navController:NavController, private navParams:NavParams, private viewController:ViewController){
      console.log("this.navParams.data.imageEntity: ", this.navParams.data.imageEntity);
      this.imageEntity = this.navParams.data.imageEntity;
    }

    onPageWillEnter(){
        console.log("onPageWillEnter: ", (new Date()).getTime());
    }

    onPageDidEnter(){
      console.log("On Page Did Enter");

    }


    dismissView(){
        this.viewController.dismiss();
    }

    imageLoaded(event){
        /*var imageAspectRatio = event.target.height/event.target.width;
        var swipeToCloseElement = (<any>document.querySelector("swipe-to-close")).children[0];
        var buttonContainer = document.querySelector(".pv-btn-container");
        var image = <HTMLElement> document.querySelector(".pv-image");
        var imageHeight = Math.floor(imageAspectRatio * swipeToCloseElement.clientWidth);
        var imageStartY = swipeToCloseElement.clientHeight/2 - imageHeight/2 - buttonContainer.clientHeight;
        image.style.transform = `translate3d(0px, ${imageStartY}px, 0px)`;
        this.imageDisplayStyle = "inline";
        */
    }
}

class TouchCoordinate {
    constructor(public x:number, public y:number){
    }
}
