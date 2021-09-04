import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import YOUTUBE_API from "../api/API_KEY.json";
import { QueryDataContext } from "../context/QueryContext";

function Video() {
  const [query] = useContext(QueryDataContext);
  const [video, setVideo] = useState();
  useEffect(() => {
    console.log(query.q);
    axios
      .get
      // `https://youtube.googleapis.com/youtube/v3/search?part=id&maxResults=1&q=${query.q}&regionCode=US&key=${YOUTUBE_API.API}`
      ()
      .then((res) => {
        setVideo({ list: res.data });
      });
  }, [query]);

  const printOutput = () => {
    if (video !== undefined) {
      return video.list.items.map((e) => (
        <iframe
          className="rounded-md"
          width="1280"
          height="450"
          src={`https://www.youtube.com/embed/${e.id.videoId}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      ));
    } else return;
  };

  return (
    <div className="mb-4">
      <ul>{printOutput()}</ul>
    </div>
  );
}

export default Video;
