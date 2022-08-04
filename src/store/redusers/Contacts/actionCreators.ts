import axios from "axios";
import { AppDispatch } from "../..";
import { IContact } from "../../../models/IContact";
import { contactsFetching, contactsFetchingSuccess, contactsFetchingError } from "./contactsSlice";

export const fetchContacts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(contactsFetching())
    const responese = await axios.get<IContact[]>("./contacts.json")
    dispatch(contactsFetchingSuccess(responese.data))
  } catch (err) {
    if (err instanceof Error) {
      dispatch(contactsFetchingError(err.message))
    } else {
      dispatch(contactsFetchingError("Unexpected error"))
    }
  }
}
