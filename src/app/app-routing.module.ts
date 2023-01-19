import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './pages/login/login.component';
import { MyAppComponent } from './pages/my-app/my-app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PostComponent } from './pages/post/post.component';


const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  { 
    path: 'my-app', 
    component: MyAppComponent,
  },

  { 
    path: 'login', 
    component: LoginComponent,
  },
  { 
    path: 'post', 
    component: PostComponent,
    canActivate: [LoginGuard],
  },
  
  { 
    path: '**', 
    component: NotFoundComponent,
  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
