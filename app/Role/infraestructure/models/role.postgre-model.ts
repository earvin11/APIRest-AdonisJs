import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm';
import { DateTime } from 'luxon';
import UserPgModel from 'App/User/infraestructure/models/user.postgre-model';

export default class Role extends BaseModel {
    public static connection = 'pg';
    public static selfAssignPrimaryKey = true;

    @column({ isPrimary: true })
    public id: string;

    @column()
    name: string;

    @column()
    status: boolean;

    @hasMany(() => UserPgModel)
    public users: HasMany<typeof UserPgModel>;

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime;

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime;
};