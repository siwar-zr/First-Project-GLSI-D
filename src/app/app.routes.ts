import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { TemplateFormComponent } from './components/forms/template-form/template-form.component';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
import { GetAPIComponent } from './components/API/get-api/get-api.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'dataBinding',
        pathMatch:'full'
    },
    {
        path:'admin',
        component:AdminComponent
    },
    {
        path:'dataBinding',
        component:DataBindingComponent
    },
    {
        path:'ng-class',
        component:NgClassComponent
    },
    {
        path:'template-form',
        component:TemplateFormComponent
    },
    {
        path:'reactive-form',
        component:ReactiveFormComponent
    },
    {
        path:'get-api',
        component:GetAPIComponent
    }
];
