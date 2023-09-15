import { test, expect } from '@playwright/test';
//  Screenshot
test('page screenshot', async ({ page }) => {

  await page.goto('http://admin-dev.vitals360.com/login');
  
  const now = new Date();const formattedDate = `${now.getDate()}${now.getMonth() + 1}${now.getFullYear() % 100}`;

  const formattedTime = `${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}`;

  const fileName = `${formattedDate}_${formattedTime}`.replace(/\\/g, '_'); 

  await page.screenshot({ path: `${fileName}-login_screen.png` });

  //Page has url
  await expect(page).toHaveURL('https://admin-dev.vitals360.com/login')

  // Page has title
 await expect(page).toHaveTitle('Admin')

// Element is visible
   const logoElement = await page.locator('.product_logo'); // Use a proper selector here
  await expect(logoElement).toBeVisible();

    await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('admin@vocare.com');
 await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Vocare@2022');
await page.getByText('Remember me?').click();

//const signinbutton= await page.locator('Sign-in-btn')
//await expect(signinbutton).toHaveAttribute('type','submit')
//await page.getByRole('button', { name: 'Sign In' }).click();

 //await page.getByRole('link', { name: 'Sign Out' }).click();
})