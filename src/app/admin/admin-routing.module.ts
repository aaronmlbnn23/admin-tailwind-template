import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainAppComponent } from './main-app/main-app.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PaymentComponent } from './modules/payment/payment.component';
import { SettingsComponent } from './modules/settings/settings.component';



const routes: Routes = [
    {
        path: '',
        component: MainAppComponent, children:[
        {
            path: 'dashboard',
            component: DashboardComponent
        },
        {
            path: 'payment',
            component: PaymentComponent
        },
        {
            path: 'settings',
            component: SettingsComponent
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
