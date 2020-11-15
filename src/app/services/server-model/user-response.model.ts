export interface UserData {
  userId: string;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface UserResponse {
  user: UserData;
}
