import React from "react";
import { BsPlayCircle } from "react-icons/bs";
import { CiTimer } from "react-icons/ci";
import { parseISO, format } from "date-fns";
import "./EpisodesList.scss";

const EpisodesList = ({
  dataPodcastTrackCard,
  dataEpisodes,
  handleClickEpisode,
}) => {
  return (
    <div className="episodes-container">
      <div className="episodes-container_header">
        #Episodes: {dataPodcastTrackCard?.trackCount}
      </div>
      <div className="episodes-container_table">
        <table>
          <thead>
            <tr>
              <th scope="col">title</th>
              <th scope="col">date</th>
              <th scope="col">duration</th>
            </tr>
          </thead>
          <tbody>
            {dataEpisodes?.map(
              ({ trackName, releaseDate, trackTimeMillis, trackId, collectionId }, key) => (
                <tr
                  className={`bg-white border-b cursor-pointer group ${(key % 2) ? 'bg-gray-50' : ''}`}
                  key={trackId}
                  onClick={() => handleClickEpisode(collectionId, trackId)}
                >
                  <td className="text-blue-500 group-hover:text-blue-700 px-6 py-4 inline-flex whitespace-nowrap">
                    <BsPlayCircle className="text-lg mt-[2px] mr-2" />
                    {trackName}.
                  </td>
                  <td className="text-gray-500 group-hover:text-gray-700 px-6 py-4 whitespace-nowrap">
                    {format(parseISO(releaseDate), "PPPP")}.
                  </td>
                  <td className="text-gray-500 group-hover:text-gray-700 px-6 py-4 inline-flex whitespace-nowrap">
                    <CiTimer className="text-lg mt-[2px] mr-2" />
                    {(trackTimeMillis / 1000 / 60).toFixed(0)} Min.
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EpisodesList;
