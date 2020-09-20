import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
    imports: [CommonModule,BrowserModule ],
    exports: [CardComponent],
    declarations: [
        CardComponent
    ]
})
export class SharedModule { }
