import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateBranding1780000000000 implements MigrationInterface {
  name = 'CreateBranding1780000000000';
  async up(queryRunner: QueryRunner): Promise<void> { await queryRunner.query(`CREATE TABLE IF NOT EXISTS "branding" ("id" integer PRIMARY KEY NOT NULL, "productName" varchar(100) NOT NULL DEFAULT ('OpenWA'), "logoUrl" varchar(500), "faviconUrl" varchar(500), "primaryColor" varchar(7) NOT NULL DEFAULT ('#25D366'), "accentColor" varchar(7) NOT NULL DEFAULT ('#128C7E'), "loginTitle" varchar(200), "loginMessage" varchar(500), "websiteUrl" varchar(500), "supportUrl" varchar(500), "docsUrl" varchar(500), "swaggerTitle" varchar(200), "swaggerDescription" varchar(2000), "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')))`); }
  async down(queryRunner: QueryRunner): Promise<void> { await queryRunner.query(`DROP TABLE IF EXISTS "branding"`); }
}
