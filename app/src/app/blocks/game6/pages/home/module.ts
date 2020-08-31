import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { Page6Component } from './page';

@NgModule({
	imports: [
		CommonModule, FormsModule, IonicModule,
		RouterModule.forChild([{ path: '', component: Page6Component }])
	],
	declarations: [Page6Component]
})
export class Page6ComponentModule { }
