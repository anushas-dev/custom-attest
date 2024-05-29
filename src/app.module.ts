import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AttestationModule } from './attestation/attestation.module';

@Module({
  imports: [AttestationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
