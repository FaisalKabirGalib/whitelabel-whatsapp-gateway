import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuditAction } from '../audit/entities/audit-log.entity';
import { AuditService } from '../audit/audit.service';
import { applySwaggerBranding } from '../../config/swagger.config';
import type { OpenAPIObject } from '@nestjs/swagger';
import { UpdateBrandingDto } from './dto/update-branding.dto';
import { Branding } from './entities/branding.entity';

@Injectable()
export class BrandingService {
  private swaggerDocument?: OpenAPIObject;
  constructor(@InjectRepository(Branding, 'main') private readonly repository: Repository<Branding>, private readonly audit: AuditService) {}
  async get(): Promise<Branding> {
    let branding = await this.repository.findOneBy({ id: 1 });
    if (!branding) branding = await this.repository.save(this.repository.create({ id: 1 }));
    return branding;
  }
  async update(dto: UpdateBrandingDto): Promise<Branding> {
    const branding = await this.get();
    Object.assign(branding, dto);
    await this.repository.save(branding);
    const saved = await this.get();
    if (this.swaggerDocument) applySwaggerBranding(this.swaggerDocument, saved);
    await this.audit.log(AuditAction.BRANDING_UPDATED, { metadata: { fields: Object.keys(dto) } });
    return saved;
  }

  setSwaggerDocument(document: OpenAPIObject): void {
    this.swaggerDocument = document;
  }
}
