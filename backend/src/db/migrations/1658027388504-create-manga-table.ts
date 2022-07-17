import { MigrationInterface, QueryRunner } from "typeorm"

export class createMangaTable1658027388504 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE "manga" RENAME COLUMN "id" TO "id"')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
