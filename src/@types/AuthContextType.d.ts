export type AuthContextType = {
  user: string | null;
  login: (
    branchId: number,
    username: string,
    password: string,
    state: State
  ) => string | boolean;
  logout: () => void;
};
