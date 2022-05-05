export interface RegisterUserDTO {
  name: string;
  email: string;
  password: string;
  birthdate?: Date;
}

export interface RegisterUserResponse {
  id: string | number;
  name: string;
  email: string;
  password: string;
  birthdate: Date | null;
}

export interface LoginUserDTO {
  email: string;
  password: string;
}

export interface LoginUserResponse {
  token: string;
}
