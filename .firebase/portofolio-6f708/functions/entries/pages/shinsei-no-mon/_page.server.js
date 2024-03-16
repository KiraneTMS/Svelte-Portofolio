const actions = {
  default: async ({ cookies, request }) => {
    console.log("Debugging started...");
    try {
      console.log("Processing form data...");
      const formData = await request.formData();
      const id = formData.get("id");
      const password = formData.get("password");
      if (id === "101666" && password === "1811011191189145") {
        cookies.set("access_token", "true", { path: "/zettai-ryouiki", sameSite: "strict" });
        console.log("Access token set in cookie.");
        return {
          redirect: "/zettai-ryouiki",
          status: 302
        };
      } else {
        console.log("Invalid credentials.");
        return { error: "Invalid username or password." };
      }
    } catch (error) {
      console.error("An error occurred:", error);
      return { error: "An unexpected error occurred." };
    }
  }
};
export {
  actions
};
