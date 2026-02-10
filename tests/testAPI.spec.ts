import CartServices  from "../src/services/cartservices_api";
import test, { request } from "@playwright/test";
import UserApi from "../src/services/users_api";

test('Cart Services', async ({ request }) => {
  const services = new UserApi(request);
  const userRoles = {
     admin: 1,    // User ID 1 sebagai admin
     user: 2      // User ID 2 sebagai regular user
   } as const;
  
  await services.saveUsersToFile(userRoles);
})