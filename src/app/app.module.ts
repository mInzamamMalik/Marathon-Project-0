import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { NgReduxModule } from 'ng2-redux';
import { StoreModule } from './store'

import { AngularFireModule } from 'angularfire2';
import { FireService } from './providers/fire.service'

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PostsComponent } from './components/posts/posts.component';

import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';

import { UserSignupComponent } from './components/user/user-signup/user-signup.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './components/user/profile/profile.component';

import { CompanySignupComponent } from './components/company/company-signup/company-signup.component';
import { CompanyDashboardComponent } from './components/company/company-dashboard/company-dashboard.component';

import { ReversePipe } from './pipes/reverse';
import { onlyStudents } from './pipes/students-only';
import { studentAndCompany } from './pipes/studentAndCompany-only';

import { UserListComponent } from './components/admin/user-list/user-list.component';
import { StudentsListComponent } from './components/company/students-list/students-list.component';
import { ViewResumeComponent } from './components/view-resume/view-resume.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'view-resume', component: ViewResumeComponent },
    { path: 'admin-dashboard', component: AdminDashboardComponent },

    { path: 'user-signup', component: UserSignupComponent },
    { path: 'user-dahsboard', component: UserDashboardComponent },
    { path: 'user-profile', component: ProfileComponent },

    { path: 'company-signup', component: CompanySignupComponent },
    { path: 'company-dashboard', component: CompanyDashboardComponent },
    // {
    //     path: 'heroes',
    //     component: HeroListComponent,
    //     data: { title: 'Heroes List' }
    // },
    // {
    //     path: '',
    //     redirectTo: '/heroes',
    //     pathMatch: 'full'
    // },
    // { path: '**', component: LoginComponent }
];

export const firebaseConfig = {
    apiKey: "AIzaSyA7oL1XQpXGVAtgnY3S7rb1bZ4wHwnWdJU",
    authDomain: "campus-c7a4c.firebaseapp.com",
    databaseURL: "https://campus-c7a4c.firebaseio.com",
    storageBucket: "campus-c7a4c.appspot.com",
    messagingSenderId: "148754352997"
};


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        AdminDashboardComponent,
        UserDashboardComponent,
        CompanyDashboardComponent,
        UserSignupComponent,
        CompanySignupComponent,
        PostsComponent,
        ProfileComponent,
        UserListComponent,
        StudentsListComponent,
        ReversePipe,
        onlyStudents,
        studentAndCompany,
        ViewResumeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        NgReduxModule,
        StoreModule,
        AngularFireModule.initializeApp(firebaseConfig)

    ],
    providers: [FireService],
    bootstrap: [AppComponent]
})
export class AppModule { }
