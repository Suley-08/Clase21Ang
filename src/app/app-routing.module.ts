import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MyAppComponent } from './pages/my-app/my-app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PostComponent } from './pages/post/post.component';
NotFoundComponent

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: '/my-app'
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
