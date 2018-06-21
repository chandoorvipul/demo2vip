import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from 'src/app/page1/page1.component';
import { Page2Component } from 'src/app/page2/page2.component';
import { LastPageComponent } from 'src/app/last-page/last-page.component';


const routes: Routes = [
  { path: '',component: Page1Component },
  { path: 'part2',component: Page2Component },
  { path: 'feedback',component: LastPageComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }