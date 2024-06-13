import { LoginUser } from "../services/fetch";
import { useMutation } from "@tanstack/react-query";

const UseLoginUser = () => {
    return useMutation({
       mutationFn: LoginUser,
        }
    );
 }
 
 export { UseLoginUser };