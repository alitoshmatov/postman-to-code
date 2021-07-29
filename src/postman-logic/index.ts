import _ from "lodash";
import { JsonToType } from "json-to-type";

import { PostmanObject, isFolderType } from "./types/index";

const PostmanToCode = (Admin: PostmanObject) => {
  const requestBody: string[] = [];
  const responseBody: string[] = [];

  Admin.item.forEach((item) => {
    if (isFolderType(item)) {
      item.item.forEach((api) => {
        if (api.response) {
          api.response.forEach((res) => {
            if (res.body) {
              const name = _.upperFirst(
                _.camelCase(
                  `${item.name} ${api.name} ${
                    res.name !== api.name ? res.name : ""
                  } response`
                )
              );
              const body = JsonToType(res.body);

              responseBody.push(`type ${name} = ${body}`);
            }
          });
        }

        if (api.request.method === "POST" || api.request.method === "PUT")
          if (api.request.body) {
            if (api.request.body.raw) {
              const name = _.upperFirst(
                _.camelCase(`${item.name} ${api.name} body`)
              );
              const body = JsonToType(api.request.body.raw);
              requestBody.push(`type ${name} = ${body}`);
            }
          }
      });
    }

    if (!isFolderType(item)) {
      if (item.request.method === "POST" || item.request.method === "PUT")
        if (item.request.body) {
          if (item.request.body.raw) {
            const name = _.upperFirst(_.camelCase(`${item.name} body`));
            const body = JsonToType(item.request.body.raw);
            requestBody.push(`type ${name} = ${body}`);
          }
        }
      if (item.response) {
        item.response.forEach((res) => {
          if (res.body) {
            const name = _.upperFirst(
              _.camelCase(
                `${item.name} ${
                  res.name !== item.name ? res.name : ""
                } response`
              )
            );
            const body = JsonToType(res.body);

            responseBody.push(`type ${name} = ${body}`);
          }
        });
      }
    }
  });

  return `\n//REQUEST \n${requestBody.join(
    "\n"
  )} \n\n //RESPONSE \n ${responseBody.join("\n")}`;
};

export default PostmanToCode;
