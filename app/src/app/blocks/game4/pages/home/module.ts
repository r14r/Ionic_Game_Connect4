import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { Page4Component } from './page';

@NgModule({
	imports: [
		CommonModule, FormsModule, IonicModule,
		RouterModule.forChild([{ path: '', component: Page4Component }])
	],
	declarations: [Page4Component]
})
export class Page4ComponentModule { }
