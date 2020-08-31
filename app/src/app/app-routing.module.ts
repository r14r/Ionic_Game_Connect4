import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', loadChildren: () => import('./pages.base/home/module').then(m => m.HomePageModule) },
	{ path: 'list', loadChildren: () => import('./pages.base/list/module').then(m => m.ListPageModule) },
	{ path: 'game/1', loadChildren: () => import('./blocks/game1/pages/home/module').then(m => m.Page1ComponentModule) },
	{ path: 'game/2', loadChildren: () => import('./blocks/game2/pages/home/module').then(m => m.Page2ComponentModule) },
	{ path: 'game/3', loadChildren: () => import('./blocks/game3/pages/home/module').then(m => m.Page3ComponentModule) },
	{ path: 'game/4', loadChildren: () => import('./blocks/game4/pages/home/module').then(m => m.Page4ComponentModule) },
	{ path: 'game/5', loadChildren: () => import('./blocks/game5/pages/home/module').then(m => m.Page5ComponentModule) },
	{ path: 'game/6', loadChildren: () => import('./blocks/game6/pages/home/module').then(m => m.Page6ComponentModule) },
	{ path: 'game/7', loadChildren: () => import('./blocks/game7/pages/home/module').then(m => m.Page7ComponentModule) },
	{ path: 'game/8', loadChildren: () => import('./blocks/game8/pages/home/module').then(m => m.Page8ComponentModule) },
	{ path: 'game/9', loadChildren: () => import('./blocks/game9/pages/home/module').then(m => m.Page9ComponentModule) },

];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
