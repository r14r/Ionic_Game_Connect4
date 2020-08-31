import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { Page2Component } from './page';

@NgModule({
	imports: [
		CommonModule, FormsModule, IonicModule,
		RouterModule.forChild([{ path: '', component: Page2Component }])
	],
	declarations: [Page2Component]
})
export class Page2ComponentModule { }
