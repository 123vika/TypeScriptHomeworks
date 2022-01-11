// export const userData = [
//   {
//     userName: "Galina",
//     userAvatar: "/img/avatar.png",
//     favoriteItemsAmount: 0,
//   },

//   {
//     userName: "Irina",
//     userAvatar: "/img/avatar.png",
//     favoriteItemsAmount: 2,
//   },
//   {
//     userName: "Pavel",
//     userAvatar: "/img/avatar.png",
//     favoriteItemsAmount: 3,
//   },
// ];

localStorage.setItem(
  "user",
  JSON.stringify({ userName: "Irina", userAvatar: "/img/avatar.png" })
);
localStorage.setItem("favoriteAmount", "5");

const getUserData = (): unknown =>
  JSON.parse(localStorage.getItem("user")) || {
    userName: "User",
    userAvatar: "/img/avatar.png",
  };

const getFavoritesAmount = (): unknown =>
  JSON.parse(localStorage.getItem("favoriteAmount"));

interface User {
  userName: string;
  userAvatar: string;
  favoriteItemsAmount?: number;
}

export { getUserData, getFavoritesAmount, User };
