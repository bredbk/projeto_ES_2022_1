interface ICreateResidentDTO {
  name: string;
  ethnicity?: string;
  nationality?: string;
  crm: string;
  cpf: string;
  residence_date: Date;
  password: string;
  marital_status?: string;
  birth_date: Date;
  address?: string;
  city?: string;
  state?: string;
  gender: string;
  especialization: string;
  phone_number?: string;
  id?: string;
}

export { ICreateResidentDTO };
