import {useMutation} from "@tanstack/react-query";
import { User } from "@/types/user"
import {RegisterUser} from "@/services/fetch";

const UseRegisterUser = () => {
   return useMutation({
      mutationFn: RegisterUser,
       }
   );
}

export { UseRegisterUser };