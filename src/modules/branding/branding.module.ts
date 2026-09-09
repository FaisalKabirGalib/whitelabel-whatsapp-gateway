import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandingController } from './branding.controller';
import { Branding } from './entities/branding.entity';
import { BrandingService } from './branding.service';

@Module({ imports: [TypeOrmModule.forFeature([Branding], 'main')], controllers: [BrandingController], providers: [BrandingService] })
export class BrandingModule {}
