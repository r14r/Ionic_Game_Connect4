import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Page2Component } from './page';

describe('Page2Component', () => {
	let component: Page2Component;
	let fixture: ComponentFixture<Page2Component>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [Page2Component],
			imports: [IonicModule.forRoot()]
		}).compileComponents();

		fixture = TestBed.createComponent(Page2Component);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
