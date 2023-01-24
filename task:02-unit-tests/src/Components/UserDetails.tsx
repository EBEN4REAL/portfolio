import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { getUsersAlbums, getUsersPhotos } from "../Services/users";
import { config } from "../config";
import { UserAlbum, UserPhoto } from "../Types";
import Loader from "../Components/Loader";

const UserDetails = () => {
  const { id: userId } = useParams();

  const [userAlbums, setUserAlbums] = useState<UserAlbum[]>([]);
  const [userPhotos, setUserPhotos] = useState<UserPhoto[]>([]);
  const [photosLoader, setPhotosLoader] = useState<boolean>(true);
  const [albumsLoader, setAlbumsLoader] = useState<boolean>(true);

  useEffect(() => {
    getUsersAlbums(`${config.APP_BASE_URL}/albums`).then(($usersAlbums) => {
      const userFilteredAlbums = $usersAlbums.filter(
        (album) => album.userId === Number(userId)
      );

      setUserAlbums(userFilteredAlbums);
      setAlbumsLoader(false);
    });
  }, [userId]);

  useEffect(() => {
    getUsersPhotos(`${config.APP_BASE_URL}/photos`).then(($usersPhotos) => {
      setUserPhotos($usersPhotos);
      setPhotosLoader(false);
    });
  }, []);

  const computedUserPhotos = useMemo(() => {
    let newUserPhotos: UserPhoto[] = [];
    const clonedUserAlbums = [...userAlbums];
    const clonedPhotos = [...userPhotos];

    clonedUserAlbums.forEach((album) => {
      const photos = clonedPhotos.filter((photo) => photo.albumId === album.id);
      newUserPhotos = newUserPhotos.concat(photos);
    });

    return newUserPhotos;
  }, [userAlbums, userPhotos]);

  const renderUserAlbums = () =>
    userAlbums.map((album) => {
      return <li key={album.id}>{album?.title}</li>;
    });

  return (
    <div className="container">
      <div className="user-details-wrapper">
        <div className="user-albums">
          <h3>User Albums</h3>
          <ul>
            {!albumsLoader && renderUserAlbums()}
            {albumsLoader && <Loader />}
          </ul>
        </div>
        <div>
          <h3>User Photos</h3>
          <div>
            <div className="user-photos">
              {!albumsLoader &&
                computedUserPhotos.map((photo) => (
                  <div className="user-photo" key={photo?.id}>
                    <img src={photo?.thumbnailUrl} alt={photo?.title} />
                  </div>
                ))}
              {photosLoader && <Loader />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
