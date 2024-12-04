import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const email = localStorage.getItem('email');
  const userType = localStorage.getItem('userType'); // Assuming user type is stored in local storage
  const requestedRoute = state.url;
  debugger;

  if (email !== null) {
    if (userType === 'admin') {
      return true;
    } else if (userType === 'type1') {
      if (requestedRoute === '/first-page') {
        return true;
      }
    } else if (userType === 'type2') {
      if (requestedRoute === '/second-page') {
        return true;
      }
    }

    router.navigateByUrl('/dashboard');
    return false;
  } else {
    router.navigateByUrl('/login');
    return false;
  }
};
