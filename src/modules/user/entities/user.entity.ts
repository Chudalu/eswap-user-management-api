import { Table, PrimaryKey, AutoIncrement, Column, DataType, UpdatedAt, CreatedAt, Model } from "sequelize-typescript";
import { EntityStatus } from "src/repository/enum/entity-status.enum";

@Table({ freezeTableName: true })
export class User extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    firstName: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    lastName: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    phoneNumber: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    email: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    dateOfBirth: Date;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;

    @Column({
        type: DataType.STRING,
        defaultValue: EntityStatus.ACTIVE
    })
    status: EntityStatus;

    @UpdatedAt
    @Column(DataType.DATE)
    updatedAt: Date;

    @CreatedAt
    @Column(DataType.DATE)
    createdAt: Date;

}