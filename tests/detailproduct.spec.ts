import { test } from "../src/fixture";


test.describe('Detail Product Test', () => {
  test.beforeEach(async ({ page, basePage, detailProdcutPage }) => {
    await basePage.gotoUrl('https://www.demoblaze.com/');
    await detailProdcutPage.producCapture();
  })
  test('Product description must be same with click Product', async ({ page, basePage, detailProdcutPage, dashboard}) => {
    await test.step('User should be able to click product', async () => {
      await dashboard.clickProduct();
    })
    
    await test.step('Product title must be same with click Product', async () => {
      await detailProdcutPage.productHeaderValidation();
    })
    
    await test.step('Product price must be same with click Product', async () => {
      await detailProdcutPage.productPriceValidation();
    })
  })
})