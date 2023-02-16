import { render, screen } from "@testing-library/react";
import EpisodesList from "./EpisodesList";
import { MemoryRouter as Router } from "react-router-dom";

describe("EpisodesList", () => {
  it("renders props validation", () => {
    render(
      <Router>
        <EpisodesList
          {...{
            dataEpisodes: [
              {
                artworkUrl60:
                  "https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.jpg",
                artistViewUrl:
                  "https://itunes.apple.com/us/artist/the-joe-budden-network/1535844019?mt=2&uo=4",
                artworkUrl160:
                  "https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/160x160bb.jpg",
                episodeContentType: "audio",
                contentAdvisoryRating: "Explicit",
                trackViewUrl:
                  "https://podcasts.apple.com/us/podcast/episode-602-the-honey-pack/id1535809341?i=1000599713875&uo=4",
                episodeFileExtension: "mp3",
                genres: [
                  {
                    name: "Music",
                    id: "1310",
                  },
                ],
                episodeGuid: "8d4a62b2-ae92-4283-abc9-0cebef99e201",
                description:
                  "Friend of the Show and Colts Linebacker Zaire Franklin returns to the JBP as the gang starts by recapping the Chiefs/Eagles Super Bowl (20:31) before turning their attention to Rihanna’s halftime performance (47:20). Floyd Mayweather Jr. has agreed to an exhibition boxing match (1:30:28), everyone shares their thoughts on the red boots (1:38:15), and have the aliens arrived on earth (1:44:00)? Also, a train derailment in Ohio has caused an environmental disaster (1:52:55), Rest in Peace to Dave Jolicoeur of De La Soul, aka Trugoy the Dove (2:16:15), and will Damar Hamlin play in the NFL ever again? (2:23:25) + MORE! \n  \n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP.: Tap in here www.patreon.com/JoeBudden\n  \n Sleeper Picks:\n Joe | RINI (feat. Bibi Bourelly) - “My Luv”\n Ice | Shotgun Suge - “I Dont Party”\n Parks | De La Soul, Handsome Boy Modeling School, & Starchild Excalibur - “If It Wasn’t for You”\n Ish | Sabrina Claudio - “Nurture”\n Melyssa Ford | Adi Oasis - “Whisper My Name”\n Zaire | Babyface Ray - “Ashanti”",
                artistIds: [1535844019],
                shortDescription:
                  "Friend of the Show and Colts Linebacker Zaire Franklin returns to the JBP as the gang starts by recapping the Chiefs/Eagles Super Bowl (20:31) before turning their attention to Rihanna’s halftime performance (47:20). Floyd Mayweather Jr. has agreed...",
                releaseDate: "2023-02-15T08:30:00Z",
                feedUrl: "https://jbpod.libsyn.com/applepodcast",
                closedCaptioning: "none",
                collectionId: 1535809341,
                collectionName: "The Joe Budden Podcast",
                trackId: 1000599713875,
                trackName: 'Episode 602 | "The Honey Pack"',
                artworkUrl600:
                  "https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/600x600bb.jpg",
                previewUrl:
                  "https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_602.mp3?dest-id=2422538",
                kind: "podcast-episode",
                wrapperType: "podcastEpisode",
                episodeUrl:
                  "https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_602.mp3?dest-id=2422538",
                trackTimeMillis: 11029000,
                collectionViewUrl:
                  "https://itunes.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?mt=2&uo=4",
                country: "USA",
              },
              {
                artworkUrl60:
                  "https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.jpg",
                artistViewUrl:
                  "https://itunes.apple.com/us/artist/the-joe-budden-network/1535844019?mt=2&uo=4",
                artworkUrl160:
                  "https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/160x160bb.jpg",
                episodeContentType: "audio",
                contentAdvisoryRating: "Clean",
                trackViewUrl:
                  "https://podcasts.apple.com/us/podcast/episode-601-press-pay-to-play/id1535809341?i=1000599125603&uo=4",
                episodeFileExtension: "mp3",
                genres: [
                  {
                    name: "Music",
                    id: "1310",
                  },
                ],
                episodeGuid: "8a866f59-2eb6-405f-91f7-aab968e67873",
                description:
                  "The Bionic Six is back. With the Super Bowl coming up this weekend, the gang opens up this episode with their predictions for the Eagles & Chiefs matchup as well as their reactions to Billboard’s Top-10 Halftime Performances (12:11). LeBron James passes Kareem Abdul-Jabbar on the NBA’s all-time scoring list (22:07), HYBE America acquires Quality Control Music for $300 million (43:55), and Billboard/Vibe also wrap up their Top-50 Rappers of All-Time list (52:48). The XXXTENTACION trial is underway and Drake is ordered to sit for deposition (1:01:30), why the Grammy’s missed on naming Beyoncé’s “Renaissance” as Album of the Year (1:14:20), GloRilla’s recent club appearance (1:28:33), Valentine’s Day plans (2:08:48), + MORE!\n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP.: Tap in here www.patreon.com/JoeBudden\n Sleeper Picks:\n Joe |  Secily - “Gah Damn”\n Ice | Kash Doll & Payroll Giovanni - “LEGIT”\n Parks | Marlon Craft - “Human First”\n Ish | Libianca - “People”\n Melyssa Ford | Little Dragon - “Water”",
                artistIds: [1535844019],
                shortDescription:
                  "The Bionic Six is back. With the Super Bowl coming up this weekend, the gang opens up this episode with their predictions for the Eagles & Chiefs matchup as well as their reactions to Billboard’s Top-10 Halftime Performances (12:11). LeBron...",
                releaseDate: "2023-02-11T08:00:00Z",
                feedUrl: "https://jbpod.libsyn.com/applepodcast",
                closedCaptioning: "none",
                collectionId: 1535809341,
                collectionName: "The Joe Budden Podcast",
                trackId: 1000599125603,
                trackName: 'Episode 601 | "“Press Pay To Play”"',
                artworkUrl600:
                  "https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/600x600bb.jpg",
                previewUrl:
                  "https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_601.mp3?dest-id=2422538",
                kind: "podcast-episode",
                wrapperType: "podcastEpisode",
                episodeUrl:
                  "https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_601.mp3?dest-id=2422538",
                trackTimeMillis: 9698000,
                collectionViewUrl:
                  "https://itunes.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?mt=2&uo=4",
                country: "USA",
              },
            ],
            dataPodcastTrackCard: {
              wrapperType: "track",
              kind: "podcast",
              artistId: 1535844019,
              collectionId: 1535809341,
              trackId: 1535809341,
              artistName: "The Joe Budden Network",
              collectionName: "The Joe Budden Podcast",
              trackName: "The Joe Budden Podcast",
              collectionCensoredName: "The Joe Budden Podcast",
              trackCensoredName: "The Joe Budden Podcast",
              artistViewUrl:
                "https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=4",
              collectionViewUrl:
                "https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=4",
              feedUrl: "https://jbpod.libsyn.com/applepodcast",
              trackViewUrl:
                "https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=4",
              artworkUrl30:
                "https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/30x30bb.jpg",
              artworkUrl60:
                "https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.jpg",
              artworkUrl100:
                "https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/100x100bb.jpg",
              collectionPrice: 0,
              trackPrice: 0,
              collectionHdPrice: 0,
              releaseDate: "2023-02-11T08:00:00Z",
              collectionExplicitness: "notExplicit",
              trackExplicitness: "explicit",
              trackCount: 364,
              trackTimeMillis: 9698,
              country: "USA",
              currency: "USD",
              primaryGenreName: "Music",
              contentAdvisoryRating: "Explicit",
              artworkUrl600:
                "https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/600x600bb.jpg",
              genreIds: ["1310", "26"],
              genres: ["Music", "Podcasts"],
            },
            handleClickEpisode: () => {},
          }}
        />
      </Router>
    );
    // screen.debug();
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(
      screen.getByText(`Episode 602 | "The Honey Pack"`)
    ).toBeInTheDocument();
  });
});
