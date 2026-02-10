import { test } from "../src/fixture";

test.describe('Contact Us Tests', () => {
  
  test.beforeEach(async ({ basePage, contactPage, dashboard }) => {
    await basePage.gotoUrl('https://www.demoblaze.com/');
    await dashboard.menu('Contact')
    await contactPage.pages();
  })
  
  test('User can Fill email form', async ({ contactPage }) => {
    await test.step('User should be able to fill email form', async () => {
      await contactPage.fillContactEmail('test@example.com')
    })
  });
  
  test('User can Fill name form', async ({ contactPage }) => {
    await test.step('User should be able to fill name form', async () => {
      await contactPage.fillContactName('John Doe')
    })
  });
  
  test('User can Fill message form', async ({ contactPage }) => {
    await test.step('User should be able to fill message form', async () => {
      await contactPage.fillContactMessage('Hello World')
    })
  });
  
  test('User can Submit form', async ({ contactPage }) => {
    await test.step('User should be able to submit form', async () => {
      await contactPage.fillContactEmail('test@example.com')
      await contactPage.fillContactName('John Doe')
       await contactPage.fillContactMessage('Hello World')
      await contactPage.sendContactMessage();
    })
  });
  
})
