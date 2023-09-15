import { test, expect,playwright } from '@playwright/test';

test('ecare health', async ({ page }) => { 
  const testTimeout = 9000000; //  seconds
  await page.setDefaultTimeout(testTimeout);
 // await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('https://dev.app.ecarehealth.com/');
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'SignIn.png' });
  //login
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('admin@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Pass1234');
  await page.getByRole('button', { name: 'Lets get started' }).click();


  //settings
  await page.locator('button').filter({ hasText: /^Settings$/ }).click();
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'Settings.png' });
  await page.getByRole('button', { name: 'Profile' }).click();
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'Profile.png' });
  await page.getByRole('button', { name: 'Edit Profile' }).click();
  await page.getByTestId('CloseIcon').click();
  await page.getByRole('button', { name: 'Change Password' }).click();
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'Changepassword.png' });
  await page.getByRole('button', { name: 'Update Password' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.locator('button').filter({ hasText: /^Settings$/ }).click();
  await page.getByRole('button', { name: 'Users Settings' }).click();
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'UserSettings.png' });
  await page.getByRole('button', { name: 'Add User' }).click();
  await page.getByTestId('CloseIcon').click();
  await page.getByRole('button', { name: 'Roles and Responsibility' }).click();
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'rolesResponsibilities.png' });
  await page.getByRole('button', { name: 'Add New Role' }).click();
  await page.getByTestId('CloseIcon').click();
  await page.getByLabel('search').nth(1).click();
  await page.getByText('Logout').click();
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'Logout.png' });
  await page.getByRole('button', { name: 'Yes, Log me Out' }).click();

  //Masters
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('admin@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Pass1234');
  await page.getByRole('button', { name: 'Lets get started' }).click();
  await page.getByRole('button', { name: 'Master' }).click();
  await page.getByRole('button', { name: 'LOINC Code Catalog' }).click();
  await page.getByRole('button', { name: 'Add LOINC Code' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('button', { name: 'Drug Catalog' }).click();
  await page.getByRole('button', { name: 'Add Drug Catalog' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('button', { name: 'ICD 10 Code Catalog' }).click();
  await page.getByRole('button', { name: 'Add ICD 10 Code' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('button', { name: 'CPT Code Catalog' }).click();
  await page.getByRole('button', { name: 'Add CPT Code' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('button', { name: 'HCPCS Code Catalog' }).click();
  await page.getByRole('button', { name: 'Add HCPCS Code' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByLabel('search').nth(1).click();
  await page.getByText('Logout').click();
  await page.getByRole('button', { name: 'Yes, Log me Out' }).click();

  
 
});
