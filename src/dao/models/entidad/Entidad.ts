import { MongoDAOBase } from "@dao/MongoDAOBase";
import { IDBConnection } from "@server/dao/IDBConnection";
import { IEntidad } from "./IEntidad";

export class EmpresasDao extends MongoDAOBase<IEntidad>{
  constructor(conexion: IDBConnection){
      super("entidad", conexion);
  }
}
 