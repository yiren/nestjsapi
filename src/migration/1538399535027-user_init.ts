import {MigrationInterface, QueryRunner} from "typeorm";

export class userInit1538399535027 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "group" ("groupId" SERIAL NOT NULL, CONSTRAINT "PK_52a5b0126abd6ad70828290e822" PRIMARY KEY ("groupId"))`);
        await queryRunner.query(`CREATE TABLE "role" ("roleId" SERIAL NOT NULL, CONSTRAINT "PK_703705ba862c2bb45250962c9e1" PRIMARY KEY ("roleId"))`);
        await queryRunner.query(`CREATE TABLE "Users" ("userId" SERIAL NOT NULL, "username" character varying NOT NULL, "title" character varying(50) NOT NULL, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_a06d29e81a4b836dddfd684ab87" PRIMARY KEY ("userId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "Users"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TABLE "group"`);
    }

}
