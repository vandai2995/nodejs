import { MigrationInterface, QueryRunner } from "typeorm"

export class Init1692022293916 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "user" (
              "id" SERIAL PRIMARY KEY,
              "first_name" character varying(255) NOT NULL,
              "last_name" character varying(255) NOT NULL,
              "age" integer NOT NULL,
              "created_at" TIMESTAMP NOT NULL DEFAULT now(),
              "updated_at" TIMESTAMP NOT NULL DEFAULT now()
          )`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
