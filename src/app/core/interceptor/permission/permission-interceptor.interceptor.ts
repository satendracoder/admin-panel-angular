import { HttpInterceptorFn } from '@angular/common/http';

export const permissionInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
