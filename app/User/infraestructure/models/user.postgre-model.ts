import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'
import { GenerateUuid } from 'App/Shared/adapters/uuid.adapter';
import { DateTime } from 'luxon';

export default class User extends BaseModel {
  // Indique al modelo que utilice una conexión de base de datos
  // personalizada definida dentro del config/databasearchivo.
  // public static connection = 'pg';
  public static selfAssignPrimaryKey = true;

  @column({ isPrimary: true })
  public id: string;

  @column()
  public userName: string;

  @column()
  public name: string;
  
  @column()
  public email: string;

  @column({ serializeAs: null }) // Elimina la prop cuando se serializa a JSON
  public password: string;

  @column()
  public img: string;

  @column()
  public role: string;

  // //TODO:
  // @hasOne(() => RolePgModel)
  // public role: HasOne<typeof RolePgModel>;

  @column()
  public status: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @beforeCreate()// Reemplaza el id por uuid
  public static assignUuid(user: User) {
    user.id = new GenerateUuid().uuid;
  }
};