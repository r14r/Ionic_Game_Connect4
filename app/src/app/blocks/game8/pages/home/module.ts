import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { Page8Component } from './page';

@NgModule({
	imports: [
		CommonModule, FormsModule, IonicModule,
		RouterModule.forChild([{ path: '', component: Page8Component }])
	],
	declarations: [Page8Component]
})
export class Page8ComponentModule { }
