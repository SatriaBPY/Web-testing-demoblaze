import { test } from "../src/fixture";

test.describe("Cart Page Test", () => {
  test("Shoould add product to cart", async ({
    page,
    basePage,
    cartPage,
    dashboard,
    loginAs,
    detailProdcutPage,
  }) => {
    await test.step("User add product to cart", async () => {
      await loginAs("user");
      await cartPage.productCupture();
      await dashboard.clickProduct();
      await detailProdcutPage.addToCart();
    });

    await test.step("User should navigate to cart page", async () => {
      await dashboard.menu("Cart");
    });

    await test.step("Title product should be same with click produc", async () => {
      await cartPage.productTitle();
    });

    await test.step("Price product should be same with click produc", async () => {
      await cartPage.priceTitle();
    });

    await test.step("Total price should be same with table", async () => {
      await cartPage.totalPrices();
    });

    await test.step("User should delete product", async () => {
      await cartPage.deleteProduct();
    });
  });

  test("Should complate order", async ({
    page,
    cartPage,
    dashboard,
    cartServices,
    loginAs,
  }) => {
    await test.step("User should navigate to place order page", async () => {
      await loginAs("admin");
      await cartServices.addToCart();
      await dashboard.menu("Cart");
      await cartPage.placeOrder();
    });

    await test.step("User Should fill name", async () => {
      await cartPage.fillName("John Doe");
    });

    await test.step("User Should fill country", async () => {
      await cartPage.fillCountry("USA");
    });

    await test.step("User Should fill city", async () => {
      await cartPage.fillCity("New York");
    });

    await test.step("User Should fill card", async () => {
      await cartPage.fillCC("1234567890123456");
    });

    await test.step("User Should fill month", async () => {
      await cartPage.fillMonth("01");
    });

    await test.step("User Should fill year", async () => {
      await cartPage.fillYear("2023");
    });

    await test.step("User Should click purchase", async () => {
      await cartPage.cliclPurchase();
      await cartPage.successMessage();
      await dashboard.menu("Cart");
    });
  });
});
