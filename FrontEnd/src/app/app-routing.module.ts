import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UseTabComponent } from './components/use-tab/use-tab.component';
import { AuthGuard } from './guards/auth.guard';
import { DonComponent } from './components/don/don.component';
import { CampagneComponent } from './components/campagne/campagne.component';
import { CampagneDetailsComponent } from './components/campagne-details/campagne-details.component';
import { CampagneEditComponent } from './components/campagne-edit/campagne-edit.component';
import { AddDonComponent } from './components/add-don/add-don.component';
import { EditDonComponent } from './components/edit-don/edit-don.component';
import { MaterialComponent } from './components/material/material.component';
import { MaterialDetailsComponent } from './components/material-details/material-details.component';
import { EditMaterialComponent } from './components/edit-material/edit-material.component';
import { AddMaterialsComponent } from './components/add-materials/add-materials.component';
import { ReclamationListComponent } from './components/reclamation-list/reclamation-list.component';
import { ReclamationAddComponent } from './components/reclamation-add/reclamation-add.component';
import { ReclamationEditComponent } from './components/reclamation-edit/reclamation-edit.component';
import { ReclamationDetailComponent } from './components/reclamation-details/reclamation-details.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'don', component: DonComponent },
  { path: 'campagne', component: CampagneComponent },
  { path: 'campagnes/:id', component: CampagneDetailsComponent },
  {
    path: 'campagnes/update/:id',
    component: CampagneEditComponent 
  },
  {
    path: 'dons',
    component: DonComponent
  },
  {
    path: 'donsAdd',
    component: AddDonComponent
  },
  { path: 'don/update/:id', component: EditDonComponent },
  { path: 'materials', component: MaterialComponent },
  { path: 'materials/:id', component: MaterialDetailsComponent },
  { path: 'materialsUpdate/:id', component: EditMaterialComponent },
  { path: 'materialsAdd', component: AddMaterialsComponent },

  { path: '', redirectTo: 'reclamations', pathMatch: 'full' },
  { path: 'reclamations', component: ReclamationListComponent },
  { path: 'reclamations/add', component: ReclamationAddComponent },
  { path: 'reclamations/edit/:id', component: ReclamationEditComponent},
  { path: 'reclamations/:id', component: ReclamationDetailComponent },

  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
