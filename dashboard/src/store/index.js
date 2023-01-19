import { readonly } from "vue";
import  UserModule from "./user";
import { useGlobalLoading } from "./global";

export default readonly({
  User: UserModule,
  Global: useGlobalLoading(),
});
