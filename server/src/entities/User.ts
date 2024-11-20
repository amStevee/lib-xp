export class User {
    constructor(
      public id?: string,
      public google_Id?: string | null,
      public firstname?: string,
      public lastname?: string,
      public displayname?: string | null,
      public address?: string | null,
      public contact?: string,
      public email?: string,
      public password?: string | null,
      public profile_img?: string | null,
    ) {}
  }
  