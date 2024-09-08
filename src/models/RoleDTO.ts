export class RoleDTO {
  id?: number;
  nomRole: string;

  constructor(id: number | undefined, nomRole: string) {
    this.id = id;
    this.nomRole = nomRole;
  }
}
