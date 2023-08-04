import { MigrationInterface, QueryRunner } from 'typeorm';

export class AnotherMigration1686879984551 implements MigrationInterface {
  name = 'AnotherMigration1686879984551';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "item" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isArchived" boolean NOT NULL DEFAULT false, "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" character varying(300) NOT NULL, "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "lastChangedBy" character varying(300) NOT NULL, "internalComment" character varying(300), "name" character varying(300) NOT NULL, "description" character varying(300) NOT NULL, CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "item"`);
  }
}
