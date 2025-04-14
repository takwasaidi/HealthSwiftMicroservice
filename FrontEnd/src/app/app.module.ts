import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// Import Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { UseTabComponent } from './components/use-tab/use-tab.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './pipes/filter.pipe';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { CalendarModule } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './guards/auth.guard';
import { NgxPaginationModule } from 'ngx-pagination';
import { CampagneComponent } from './components/campagne/campagne.component';
import { CampagneDetailsComponent } from './components/campagne-details/campagne-details.component';
import { CampagneEditComponent } from './components/campagne-edit/campagne-edit.component';
import { AddDonComponent } from './components/add-don/add-don.component';
import { DatePipe } from '@angular/common';
import { DonComponent } from './components/don/don.component';
import { EditDonComponent } from './components/edit-don/edit-don.component';
import { EvenementComponent } from './components/evenement/evenement.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    NavbarComponent,
    FooterComponent,
    UseTabComponent,
    CampagneComponent,
    CampagneDetailsComponent,
    CampagneEditComponent,
    AddDonComponent,
    DonComponent,
    EditDonComponent,
    EvenementComponent
  ],
  imports:[
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule,
    FullCalendarModule,
    MatNativeDateModule,
    CalendarModule.forRoot({ provide: DateAdapter, useClass: MatNativeDateModule }),
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule // Ajoutez FormsModule ici
  ],
  providers: [
    DatePipe, // ✅ Ajouté proprement ici
  
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
  ,
  bootstrap: [AppComponent]
})
export class AppModule {
}
