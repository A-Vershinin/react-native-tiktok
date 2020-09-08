// Utils
import { MAIN_URL } from "./config";

export const api = Object.freeze({
  movies: {
    fetch: () => {
      return Promise.resolve({
        status: 200,
        json: () => ({
          subscriptions: [
            {
              id: 0,
              poster: require("../../assets/poster/04.jpg"),
              video: require("../../assets/videos/04.mp4"),
              user: {
                username: "samrobins 1",
                description: "Your best track from TikTok and long some text",
                music: "new origin",
                avatar: require("../../assets/avatar/02.jpg")
              },
              count: {
                like: "432K",
                comment: 143
              },
              music: {
                avatar: require("../../assets/avatar/02.jpg")
              }
            },
            {
              id: 1,
              poster: require("../../assets/poster/05.jpg"),
              video: require("../../assets/videos/05.mp4"),
              user: {
                username: "samrobins 2",
                description: "Your best track from TikTok and long some text",
                music: "summer",
                avatar: require("../../assets/avatar/01.jpg")
              },
              count: {
                like: "33K",
                comment: 32
              },
              music: {
                avatar: require("../../assets/avatar/01.jpg")
              }
            },
            {
              id: 2,
              poster: require("../../assets/poster/06.jpg"),
              video: require("../../assets/videos/06.mp4"),
              user: {
                username: "samrobins 3",
                description: "Lorem impsun",
                music: "new video",
                avatar: require("../../assets/avatar/01.jpg")
              },
              count: {
                like: "16K",
                comment: 54
              },
              music: {
                avatar: require("../../assets/avatar/01.jpg")
              }
            }
          ],
          favories: [
            {
              id: 0,
              poster: require("../../assets/poster/01.jpg"),
              video: require("../../assets/videos/01.mp4"),
              user: {
                username: "jondoe",
                description: "Some track description",
                music: "some origin",
                avatar: require("../../assets/avatar/01.jpg")
              },
              count: {
                like: "144K",
                comment: 3312
              },
              music: {
                avatar: require("../../assets/avatar/01.jpg")
              }
            },
            {
              id: 1,
              poster: require("../../assets/poster/02.jpg"),
              video: require("../../assets/videos/02.mp4"),
              user: {
                username: "samrobins",
                description: "Your best track from TikTok and long some text",
                music: "some origin from album",
                avatar: require("../../assets/avatar/02.jpg")
              },
              count: {
                like: "77K",
                comment: 1684
              },
              music: {
                avatar: require("../../assets/avatar/02.jpg")
              }
            },
            {
              id: 2,
              poster: require("../../assets/poster/03.jpg"),
              video: require("../../assets/videos/03.mp4"),
              user: {
                username: "secondauthor",
                description: "Your best track from TikTok and long some text",
                music: "some origin from album",
                avatar: require("../../assets/avatar/01.jpg")
              },
              count: {
                like: "55K",
                comment: 7777
              },
              music: {
                avatar: require("../../assets/avatar/01.jpg")
              }
            }
          ]
        })
      });
    }
  }
});
