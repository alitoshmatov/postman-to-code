import { isFolderType, PostmanObject, Api } from "./types/index";
export const ExtractHost = (postman: PostmanObject): string[] => {
  let hosts: string[] = [];

  postman.item.map((item) => {
    if (isFolderType(item)) {
      item.item.map((api) => {
        const host = api.request.url.host;
        host.forEach((host) => {
          if (!hosts.find((item) => item === host)) {
            hosts.push(host);
          }
        });
      });
    } else {
      const host = item.request.url.host;
      host.forEach((host) => {
        if (!hosts.find((item) => item === host)) {
          hosts.push(host);
        }
      });
    }
  });
  console.log({ hosts });
  return hosts;
};

const handleHosts = (hosts: string[], api: Api) => {
  return hosts;
};
