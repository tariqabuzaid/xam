export type User = {
  branchId: number;
  userName: string;
  password: string;
  firstName: string;
  middleName: string;
  lastName: string;
  position: string;
};

export type Action = {
  type: 'ADD_USER' | 'REMOVE_USER';
  payload: User;
};

export type State = {
  users: User[];
};
