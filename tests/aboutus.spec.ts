import { test } from "../src/fixture";

test.describe('About Us Test', () => {
  test('User Should be able to click on About us Menu', async ({ aboutusPage , basePage, dashboard}) => {
    await test.step('Navigate to Dashboard', async () => {
      await basePage.gotoUrl('https://www.demoblaze.com/');
    });
    
    await test.step('Click on About Us menu', async () => {
      await dashboard.menu('About Us');
    })
    
   await test.step('Verify About Us modal is visible and video can be opened', async () => {
      await aboutusPage.openVideo();
    })
    
  })
  
})