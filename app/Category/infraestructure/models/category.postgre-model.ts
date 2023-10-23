import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon';

export default class Category extends BaseModel {
    public static selfAssignPrimaryKey = true;
  
    @column({ isPrimary: true })
    public id: string;
  
    @column()
    public name: string;
  
    @column()
    public status: boolean;
  
    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime;
  
    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime;
};