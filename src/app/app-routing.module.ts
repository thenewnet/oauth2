import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./_module/main/main.module').then((m) => m.MainModule),
    // data: {
    //   functionCode: 'BYPASS',
    // },
    // canActivate: [AuthGuard],
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./_module/main/main.module').then((m) => m.MainModule),
    // data: {
    //   functionCode: 'BYPASS',
    // },
    // canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./_module/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'callback',
    loadChildren: () =>
      import('./_module/callback/callback.module').then(
        (m) => m.CallbackModule
      ),
  },
  {
    path: 'logout_successful',
    loadChildren: () =>
      import('./_module/logout/logout.module').then(
        (m) => m.LogoutModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
