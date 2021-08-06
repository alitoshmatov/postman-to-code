import { JsonToType } from "json-to-type";
import _ from "lodash";
import { Api, Request, Response } from "./types";

export const extractType = (item: Api): string | null => {
  if (item) {
    let result = "";

    if (item.request) {
      const body = extractFromRequest(item.request);
      if (body) {
        const name = PascalCase(`${item.name} Request Body`);

        result = result.concat(
          `\n//Request types \n type ${name} = ${body} \n`
        );
      }
    }

    if (item.response) {
      let responseTypes = "";
      item.response.forEach((res) => {
        const name = PascalCase(
          `${item.name} ${res.name === item.name ? "" : res.name} Response Body`
        );

        const body = extractFromResponse(res);
        responseTypes = responseTypes.concat(` type ${name} = ${body} \n`);
      });

      if (responseTypes) {
        result = result.concat(`\n //Response types \n ${responseTypes}`);
      }
    }
    if (result) {
      return result;
    }
  }
  return null;
};

export const extractFromRequest = (req: Request): string | null => {
  if (req.body) {
    if (req.body.raw) {
      const body = JsonToType(req.body.raw);
      if (body) {
        return body;
      }
    }
  }
  return null;
};

export const extractFromResponse = (res: Response): string | null => {
  if (res.body) {
    const body = JsonToType(res.body);

    if (body) {
      return body;
    }
  }

  return null;
};

export const PascalCase = (str: string): string =>
  _.upperFirst(_.camelCase(str));
