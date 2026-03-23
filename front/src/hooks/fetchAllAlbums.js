import axios from "axios";
import { useNotification } from "../contexts/NotificationContext/index.js";
import { useCallback, useEffect, useState } from "react";

function useFetchAllAlbums() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const openNotification = useNotification();

  const fetchAlbum = useCallback(async () => {
   
    setLoading(true);
    try {
      const res = await axios.get("/fetch-all-albums",);
      if (res.data.success) {
        setAlbums(res.data.albums);
      }
    } catch (error) {
      console.log("Error fetching albums", error);
      openNotification(
        "error",
        "There was an error fetching albums. Please try again later.",
        "Error",
      );
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshKey, openNotification]);

  useEffect(() => {
    fetchAlbum();
  }, [fetchAlbum]);

  return {
    albums,
    loading,
    refresh: () => setRefreshKey((prev) => prev + 1),
  };
}

export default useFetchAllAlbums;
