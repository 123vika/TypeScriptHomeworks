import { renderSearchFormBlock } from "./search-form.js";
import { renderSearchStubBlock } from "./search-results.js";
import { renderUserBlock } from "./user.js";
// import { renderToast } from "./lib.js";
import { getUserData, getFavoritesAmount, User } from "./userStorege.js";

window.addEventListener("DOMContentLoaded", () => {
  const user = getUserData() as User;
  renderUserBlock(
    user.userName,
    user.userAvatar,
    getFavoritesAmount() as number
  );
  renderSearchFormBlock();
  renderSearchStubBlock();
  // renderToast(
  //   {
  //     text: "Это пример уведомления. Используйте его при необходимости",
  //     type: "success",
  //   },
  //   {
  //     name: "Понял",
  //     handler: () => {
  //       console.log("Уведомление закрыто");
  //     },
  //   }
  // );
});
