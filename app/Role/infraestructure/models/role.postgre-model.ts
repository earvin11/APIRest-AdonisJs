import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm';
import { DateTime } from 'luxon';
import { GenerateUuid } from 'App/Shared/adapters/uuid.adapter';

export default class Role extends BaseModel {
    public static connection = 'pg';
    public static selfAssignPrimaryKey = true;

    @column({ isPrimary: true })
    public id: string;

    @column()
    name: string;

    @column()
    status: boolean;

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime;

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime;

    @beforeCreate()
    public static assignUuid(role: Role) {
      role.id = new GenerateUuid().uuid;
    }

};