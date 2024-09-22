import { env as env_dev } from "@/environments/environment.dev";
import { env as env_prod } from "@/environments/environment.prod";
import { url_list } from "./url-collection";

const params_maker = (param: any, parent?: string): string => {
  return Object.entries(param)?.reduce(
    (pV: string, [key, val]: [string, any]) => {
      return `${pV}${pV && val ? "&" : ""}${
        typeof val === "object"
          ? params_maker(val, key)
          : `${parent ?? ""}${key}=${val}`
      }`;
    },
    ""
  );
};

export const list = async (
  api_key: string,
  parameters?: { [key: string]: any },
  addon?: string,
  show_msg?: boolean
): Promise<Response> => {
  return fetch(
    `${env_dev?.base_url}/${url_list?.[api_key]}${
      addon ? `/${addon}` : ""
    }${params_maker(parameters ?? {})}`,
    {
      method: "GET",
    }
  )?.then((response: any) => {
    console.log(response);
    return response;
  });
};
