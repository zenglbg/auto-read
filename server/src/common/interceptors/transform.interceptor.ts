import { Logger } from '@common/utils/log4js';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map(data => {
      const ctx = context.switchToHttp();
      const response = ctx.getResponse();
      const request = ctx.getRequest();
      const statusCode = response.statusCode;
      const url = request.originalUrl;
      const res = {
        code: statusCode,
        msg: null,
        success: true,
        data,
      };

      Logger.info(url, res)
      return res
    }));
  }
}
