import { readonly } from "vue";
import { useUserStore } from "./user";
import { useGlobalLoading } from "./global";

export default readonly({
  User: useUserStore(),
  Global: useGlobalLoading(),
});
