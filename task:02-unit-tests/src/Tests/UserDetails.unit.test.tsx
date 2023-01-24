import React from "react";
import { render, screen } from "@testing-library/react";
import UserDetails from "../Components/UserDetails";
import { config } from "../config";
import { getUsersAlbums, getUsersPhotos } from "../Services/users";
import { UserAlbum, UserPhoto } from "../Types";

let userAlbums: UserAlbum[] = []

describe("User details component", () => {
  it("renders user details components succesfully", () => {
    render(<UserDetails />);
  });

  it("contains neccessary text headers", () => {
    render(<UserDetails />);
    const userAlbumsHeader = screen.getByText(/User Albums/i);
    const userPhotosHeader = screen.getByText(/User Photos/i);
    expect(userAlbumsHeader).toBeInTheDocument();
    expect(userPhotosHeader).toBeInTheDocument();
  });

  it("Fetches a user albums list from the API", async () => {
    const userId = 2;

    const albums = await getUsersAlbums(`${config.APP_BASE_URL}/albums`);

    const userFilteredAlbums = albums.filter(
      (album) => album.userId === userId
    );
    
    userAlbums = userFilteredAlbums
    expect(userFilteredAlbums.length).toBeGreaterThan(0);

  });

  it("Fetches a user's photos list from the  API", async () => {
    let newUserPhotos: UserPhoto[] = [];

    const photos: UserPhoto[]  = await getUsersPhotos(`${config.APP_BASE_URL}/photos`);
     
    userAlbums.forEach((album) => {
        const userPhotos = photos.filter((photo) => photo.albumId === album.id);
        newUserPhotos = newUserPhotos.concat(userPhotos);
    });

    expect(newUserPhotos.length).toBeGreaterThan(0);

  });
});
