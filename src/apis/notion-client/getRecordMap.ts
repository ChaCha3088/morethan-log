import { NotionAPI } from "notion-client"

export const getRecordMap = async (pageId: string) => {
  const api = new NotionAPI()
  const recordMap = await api.getPage(pageId, {
    gotOptions: {
      hooks: {
        beforeRequest: [
          (options: { url: { pathname: string; }; }) => {
            if (options.url.pathname === "/api/v3/syncRecordValues") {
              options.url.pathname = "/api/v3/syncRecordValuesMain";
            }
          },
        ],
      },
    },
  });
  return recordMap
}
