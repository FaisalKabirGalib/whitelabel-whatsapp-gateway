import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity('branding')
export class Branding {
  @PrimaryColumn({ type: 'integer', default: 1 }) id!: number;
  @Column({ type: 'varchar', length: 100, default: 'OpenWA' }) productName!: string;
  @Column({ type: 'varchar', length: 500, nullable: true }) logoUrl!: string | null;
  @Column({ type: 'varchar', length: 500, nullable: true }) faviconUrl!: string | null;
  @Column({ type: 'varchar', length: 7, default: '#25D366' }) primaryColor!: string;
  @Column({ type: 'varchar', length: 7, default: '#128C7E' }) accentColor!: string;
  @Column({ type: 'varchar', length: 200, nullable: true }) loginTitle!: string | null;
  @Column({ type: 'varchar', length: 500, nullable: true }) loginMessage!: string | null;
  @Column({ type: 'varchar', length: 500, nullable: true }) websiteUrl!: string | null;
  @Column({ type: 'varchar', length: 500, nullable: true }) supportUrl!: string | null;
  @Column({ type: 'varchar', length: 500, nullable: true }) docsUrl!: string | null;
  @Column({ type: 'varchar', length: 200, nullable: true }) swaggerTitle!: string | null;
  @Column({ type: 'varchar', length: 2000, nullable: true }) swaggerDescription!: string | null;
  @CreateDateColumn() createdAt!: Date;
  @UpdateDateColumn() updatedAt!: Date;
}
