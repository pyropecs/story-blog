import { getJWTauthCookies } from "../../utils/getauthCookies";

interface FormState {
  username: string;
  email: string;
  password: string;
}

export default async function postData(FormData: FormState, path: string) {
  const result = await fetch(`${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(FormData),
    credentials: "include",
  });

  const json = await result.json();
  const cookie = getJWTauthCookies();
  console.log(cookie);
  return json.status;
}
