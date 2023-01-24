import { User } from "../Types";
import { UserAlbum } from "../Types";
import { UserPhoto } from "../Types";

function getData<T>(endpoint: string): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      fetch(endpoint).then((res) => {
        resolve(res.json());
      });
    }, 500);
  });
}

export async function getUsers(endPoint: string) {
  const users = await getData<User[]>(endPoint);
  return users;
}

export async function getUsersAlbums(endPoint: string) {
  const usersAlbums = await getData<UserAlbum[]>(endPoint);
  return usersAlbums;
}

export async function getUsersPhotos(endPoint: string) {
  const usersAlbums = await getData<UserPhoto[]>(endPoint);
  return usersAlbums;
}
