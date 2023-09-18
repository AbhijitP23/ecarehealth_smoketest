
import { test, expect } from '@playwright/test';

test('page screenshot', async ({ page },testInfo) => {
  await page.goto('https://qa.trsthealth.com/login');
  await page.waitForTimeout(3000);

    //Screenshot
  const now = new Date();const formattedDate = `${now.getDate()}${now.getMonth() + 1}${now.getFullYear() % 100}`;

  const formattedTime = `${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}`;

  const fileName = `${formattedDate}_${formattedTime}`.replace(/\\/g, '_'); 

  const screenshotPath = `demotest\TrstLogin\\${fileName}`;  // Giving path to save the screenshots  await page.screenshot({ path: `${screenshotPath}-login_screen.png` });

  await page.screenshot({ path: `${screenshotPath}-login_screen.png` });
  //Generate html report screenshot
  const screenshot = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });

    //Page has url
  await expect(page).toHaveURL('https://qa.trsthealth.com/login')
  
 await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('super_admin');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('Super1@trst');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForTimeout(5000);
 /* await page.getByTestId('addPatient').click();
  await page.getByPlaceholder('Enter Your First Name').click();
  //await page.screenshot({ path:`tests\TrstLogin\\ ${fileName}'-homepage.png` });
  
  
  //Add patient 
  
  await page.getByPlaceholder('Enter Your First Name').fill('Indrajeet');
  await page.getByPlaceholder('Enter Your Last Name').click();
  await page.getByPlaceholder('Enter Your Last Name').fill('Deshmukh');
  await page.getByTestId('gender').getByLabel('​').click();
  await page.getByRole('option', { name: 'Male', exact: true }).click();
  await page.getByPlaceholder('dd/mm/yyyy').click();
  await page.getByPlaceholder('dd/mm/yyyy').fill('10/04/1995');
  await page.getByPlaceholder('Enter Your E-mail Address').click();
  await page.getByPlaceholder('Enter Your E-mail Address').fill('bth17@gmail.com');
  await page.getByTestId('phoneNumber').getByPlaceholder('91').click();
  await page.getByTestId('phoneNumber').getByPlaceholder('91').fill('91');
  await page.getByPlaceholder('Enter Your Phone Number').click();
  await page.getByPlaceholder('Enter Your Phone Number').fill('7010913416');
  await page.getByTestId('secondaryNumber').getByPlaceholder('91').click();
  await page.getByTestId('secondaryNumber').getByPlaceholder('91').fill('91');
  await page.getByPlaceholder('Enter Your Secondary Phone Number').click();
  await page.getByPlaceholder('Enter Your Secondary Phone Number').fill('7641160653');
  await page.getByTestId('maritalStatus').getByLabel('Male').click();
  await page.getByRole('option', { name: 'Married' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Finish' }).click();
  await page.getByText('Patient created successfully.').click();*/


  await page.waitForTimeout(6000);
  //Sign Out
  await page.getByRole('button', { name: 'Sign Out' }).click();
  const signout = `demotest\TrstLogin\\${fileName}`;  // Giving path to save the screenshots  await page.screenshot({ path: `${screenshotPath}-login_screen.png` });
  await page.screenshot({ path: `${screenshotPath}-signout.png` });
});