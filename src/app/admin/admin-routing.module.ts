import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainAppComponent } from './main-app/main-app.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';



const routes: Routes = [
    {
        path: '',
        component: MainAppComponent, children:[
        {
            path: 'dashboard',
            component: DashboardComponent
        },
        {
            path:'',
            redirectTo: '/admin/dashboard',
            pathMatch: 'full'
        }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
