import { http, HttpResponse } from "msw";
import { LoginBody } from "../login";

export const login = http.post<never, LoginBody>("http://localhost:8080/login", async ({ request }) => {
  const { email, password } = await request.json();

  if (email === "alerrandro2@gmail.com" && password === "N9b0qxko") {
    return HttpResponse.json({
      status: true,
      message: "Login feito com sucesso!",
    });
  }

  return HttpResponse.error();
});
