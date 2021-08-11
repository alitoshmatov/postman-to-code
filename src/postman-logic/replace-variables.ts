export const ReplaceVariables =
  (body: string) =>
  (hosts: { variable: string; value: string }[]): string => {
    console.log(hosts);
    hosts.forEach(({ value, variable }) => {
      body = body.replaceAll(variable, value);
    });
    return body;
  };
