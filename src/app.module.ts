import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BlogModule } from './blog/blog.module';
import { SurveyModule } from './survey/survey.module';


@Module({
  imports: [PrismaModule, AuthModule, UserModule,BlogModule, SurveyModule],
})
export class AppModule {}
