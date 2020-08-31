import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { Page7Component } from './page';

@NgModule({
	imports: [
		CommonModule, FormsModule, IonicModule,
		RouterModule.forChild([{ path: '', component: Page7Component }])
	],
	declarations: [Page7Component]
})
export class Page7ComponentModule { }
