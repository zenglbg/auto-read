import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';

/** common */
import { ApiParamsValidationPipe } from './common/pipes/api-params-validation.pipe';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { AnyExceptionFilter } from '@common/filters/any-exception.filter';
import { LoggingInterceptor } from './common/interceptors/Logging.interceptor';
import { ValidationPipe } from './common/pipes/validation.pipe';
/** common */

/** module */
import { configModule } from './modules/config/config.module';
import { RasModule } from './modules/ras/ras.module';
import { orm } from './modules/database/database.module';
import { AuthModule } from '@modules/auth/auth.module';
import { UserModule } from '@modules/user/user.module';
import { TransformInterceptor } from '@common/interceptors/transform.interceptor';
import { PlatformModule } from './modules/platform/platform.module';
import { FileModule } from './modules/file/file.module';
import { SettingModule } from './modules/setting/setting.module';

/** module */
@Module({
  imports: [
    configModule(),
    orm(),
    AuthModule,
    UserModule,
    RasModule,
    PlatformModule,
    FileModule,
    SettingModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AnyExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    // {
    //   provide: APP_PIPE,
    //   useClass: ApiParamsValidationPipe,
    // },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
