interface FormState {
  username: string;
  email: string;
  password: string;
}

export default async function postData(FormData: FormState) {
  const result = await fetch("http://localhost:3000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(FormData),
  });
  const json = await result.json();
  return json.status;
}
