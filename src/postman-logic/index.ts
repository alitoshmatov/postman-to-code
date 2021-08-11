import _ from "lodash";
import { JsonToType } from "json-to-type";

import { PostmanObject, isFolderType, Api } from "./types/index";
import { extractType, PascalCase } from "./helpers";

const PostmanToCode = (Admin: PostmanObject): string | null => {
  const requestFunctions: string[] = [];

  Admin.item.forEach((item) => {
    if (isFolderType(item)) {
      item.item.forEach((api) => {
        const reqString = apiToRequest(api, item.name);
        requestFunctions.push(reqString);
      });
    }

    if (!isFolderType(item)) {
      const reqString = apiToRequest(item, "");
      requestFunctions.push(reqString);
    }
  });

  if (requestFunctions.length) {
    return requestFunctions.join("\n");
  }
  return null;
};

const apiToRequest = (api: Api, name: string): string => {
  let reqString = "";
  const type = extractType(api, name);

  const requestBody =
    type?.name.request && type.type ? `data:${type.name.request}` : "";

  reqString = `${type?.type ? type.type : ""}\nexport const ${PascalCase(
    `${name} ${api.name}`
  )} = (${requestBody})=>
        \trequest.${_.toLower(api.request.method)}${
    type?.name.response?.length ? `<${type.name.response[0]}>` : ""
  }("${api.request.url.raw}" ${
    requestBody && api.request.method !== "GET" ? `, data` : ""
  })`;

  return reqString;
};

export default PostmanToCode;
