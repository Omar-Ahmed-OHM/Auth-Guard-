import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  const email=localStorage.getItem('email');
  debugger;
  if(email!=null){
    return true;
  }
  else{
    router.navigateByUrl('/dashpoard');
    return false;
  }
};
