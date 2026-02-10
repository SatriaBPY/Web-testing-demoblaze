import { test } from "../src/fixture";
import * as allure from "allure-js-commons";
import { ContentType } from "allure-js-commons";

test.describe('Dashboard Tests', () => {
  test('Carousal Test', async ({ page, dashboard, basePage }) => {
    
    await test.step('Navigate to the website', async () => {
      await basePage.gotoUrl('https://www.demoblaze.com/')
    });
    
    await test.step('User can click next Carousal', async () => {
      await dashboard.carousalValidation('Next');
    })
    
    await test.step('User can click prev Carousal', async () => {
      await dashboard.carousalValidation('Prev');
    })
  })
  
  
  test('Pagination Test', async ({ page, dashboard, basePage }) => {
    await test.step('Navigate to the website', async () => {
      await basePage.gotoUrl('https://www.demoblaze.com/')
    });
    
    await test.step('User can click next page', async () => {
      await dashboard.pageValidation('Next');
    });
    
    await test.step('User can click prev page', async () => {
      await dashboard.pageValidation('Prev');
    })
  })
  
  
  test('Category Test', async ({ page, basePage, dashboard }) => {
    await test.step('User can navigate to website', async () => {
      await basePage.gotoUrl('https://www.demoblaze.com/')
    })
    
    await test.step('User should be able to click Phones Category', async () => {
      await dashboard.categoryValidation('Phones')
    })
    
    await test.step('User should be able to click Laptops Category', async () => {
      await dashboard.categoryValidation('Laptops')
    })
    
    await test.step('User should be able to click Monitors Category', async () => {
      await dashboard.categoryValidation('Monitors')
    })
  })

});