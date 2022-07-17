import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createMangaTable1658027388504 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "manga",
                columns: [
                    {
                        name: "id",
                        type: "string",
                        isPrimary: true
                    },
                    {
                        name: "daysToNextChapt",
                        type: "int"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
