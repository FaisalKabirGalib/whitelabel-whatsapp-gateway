import { Body, Controller, Get, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Public, RequireRole, RequireUnscopedKey } from '../auth/decorators/auth.decorators';
import { ApiKeyRole } from '../auth/entities/api-key.entity';
import { UpdateBrandingDto } from './dto/update-branding.dto';
import { Branding } from './entities/branding.entity';
import { BrandingService } from './branding.service';

@ApiTags('branding')
@Controller('branding')
export class BrandingController {
  constructor(private readonly branding: BrandingService) {}
  @Get()
  @Public()
  @ApiOperation({ summary: 'Get public dashboard branding' })
  get(): Promise<Branding> {
    return this.branding.get();
  }

  @Put()
  @RequireRole(ApiKeyRole.ADMIN)
  @RequireUnscopedKey()
  @ApiOperation({ summary: 'Update dashboard branding' })
  update(@Body() dto: UpdateBrandingDto): Promise<Branding> {
    return this.branding.update(dto);
  }
}
