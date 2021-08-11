import { JsonToType } from "json-to-type";
import _ from "lodash";
import { Api, Request, Response } from "./types";

interface result {
  type: string;
  name: {
    request?: string;
    response?: string[];
  };
}

export const extractType = (item: Api, folderName: string): result | null => {
  if (item) {
    let result = "";
    const resultName: {
      request: string;
      response: string[];
    } = { request: "", response: [] };

    if (item.request) {
      const body = extractFromRequest(item.request);
      if (body) {
        const name = PascalCase(`${folderName} ${item.name} Request Body`);

        result = result.concat(
          `\n//Request types \n type ${name} = ${body} \n`
        );
        resultName.request = name;
      }
    }

    if (item.response) {
      let responseTypes = "";
      item.response.forEach((res) => {
        const name = PascalCase(
          `${folderName} ${item.name} ${
            res.name === item.name ? "" : res.name
          } Response Body`
        );

        const body = extractFromResponse(res);
        responseTypes = responseTypes.concat(` type ${name} = ${body} \n`);

        resultName.response.push(name);
      });

      if (responseTypes) {
        result = result.concat(`\n //Response types \n ${responseTypes}`);
      }
    }
    if (result) {
      return { type: result, name: resultName };
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
