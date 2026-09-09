import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MaxLength, ValidateIf } from 'class-validator';

export class UpdateBrandingDto {
  @ApiPropertyOptional() @ValidateIf((_, value) => value !== undefined) @IsString() @IsNotEmpty() @MaxLength(100) productName?: string;
  @ApiPropertyOptional({ nullable: true }) @IsOptional() @IsUrl({ protocols: ['https'], require_protocol: true }) @MaxLength(500) logoUrl?: string | null;
  @ApiPropertyOptional({ nullable: true }) @IsOptional() @IsUrl({ protocols: ['https'], require_protocol: true }) @MaxLength(500) faviconUrl?: string | null;
  @ApiPropertyOptional({ example: '#25D366', pattern: '^#[0-9A-Fa-f]{6}$' }) @ValidateIf((_, value) => value !== undefined) @Matches(/^#[0-9A-Fa-f]{6}$/) primaryColor?: string;
  @ApiPropertyOptional({ example: '#128C7E', pattern: '^#[0-9A-Fa-f]{6}$' }) @ValidateIf((_, value) => value !== undefined) @Matches(/^#[0-9A-Fa-f]{6}$/) accentColor?: string;
  @ApiPropertyOptional({ nullable: true }) @IsOptional() @IsString() @MaxLength(200) loginTitle?: string | null;
  @ApiPropertyOptional({ nullable: true }) @IsOptional() @IsString() @MaxLength(500) loginMessage?: string | null;
  @ApiPropertyOptional({ nullable: true }) @IsOptional() @IsUrl({ protocols: ['https'], require_protocol: true }) @MaxLength(500) websiteUrl?: string | null;
  @ApiPropertyOptional({ nullable: true }) @IsOptional() @IsUrl({ protocols: ['https'], require_protocol: true }) @MaxLength(500) supportUrl?: string | null;
  @ApiPropertyOptional({ nullable: true }) @IsOptional() @IsUrl({ protocols: ['https'], require_protocol: true }) @MaxLength(500) docsUrl?: string | null;
  @ApiPropertyOptional({ nullable: true }) @IsOptional() @IsString() @MaxLength(200) swaggerTitle?: string | null;
  @ApiPropertyOptional({ nullable: true }) @IsOptional() @IsString() @MaxLength(2000) swaggerDescription?: string | null;
}
