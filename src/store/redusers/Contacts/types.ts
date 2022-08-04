import { IContact } from "../../../models/IContact";

export interface ContactState {
  contacts: IContact[];
  isLoading: boolean;
  error: string;
}
