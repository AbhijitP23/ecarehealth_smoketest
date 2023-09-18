import { defineConfig,test, expect } from '@playwright/test'
export default defineConfig({
  use: {
  video: 'on',
  },
  });
async function waitForMilliseconds(milliseconds) {
return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

test.only("SmokeTest", async ({ page }, testInfo) => {
await page.setViewportSize({ width: 1536, height: 800 });

const testTimeout = 19000000; // seconds  
test.setTimeout(testTimeout);
await page.goto('https://dev.app.ecarehealth.com/');

  //Login
  await page.waitForTimeout(4000);
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('admin@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Pass1234');
  await page.waitForTimeout(5400);
  await page.getByPlaceholder('Password').press('Enter');

  //Dashboard
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'cal 15 September 2023' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Apply' }).click();

  //Provider Group
  await page.getByRole('button', { name: 'Provider Groups' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Add New Provider Group' }).click();
  await page.waitForTimeout(4000);
  await page.getByTestId('CloseIcon').click();

  //Masters
  await page.getByRole('button', { name: 'Master' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'LOINC Code Catalog' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Add LOINC Code' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('button', { name: 'Drug Catalog' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Add Drug Catalog' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('button', { name: 'ICD 10 Code Catalog' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Add ICD 10 Code' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('button', { name: 'CPT Code Catalog' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Add CPT Code' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('button', { name: 'HCPCS Code Catalog' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Add HCPCS Code' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();

//Settings
  await page.locator('button').filter({ hasText: /^Settings$/ }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Profile' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Edit Profile' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('button', { name: 'Change Password' }).click();
  await page.waitForTimeout(4000);
  await page.getByText('Change PasswordCurrent Password*New Password*Confirm new Password* Update Passwo').click();
  await page.getByRole('button', { name: 'Update Password' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.locator('button').filter({ hasText: /^Settings$/ }).click();
  await page.getByRole('button', { name: 'Users Settings' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Add User' }).click();
  await page.waitForTimeout(4000);
  await page.getByTestId('CloseIcon').locator('path').click();
  await page.getByRole('button', { name: 'Roles and Responsibility' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Add New Role' }).click();
  await page.waitForTimeout(4000);
  await page.getByTestId('CloseIcon').click();
  await page.getByLabel('search').nth(1).click();

  // Logout
  await page.getByText('Logout').click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Yes, Log me Out' }).click();
  await page.waitForTimeout(4000);
  await page.locator('div').filter({ hasText: 'Hey, good to see youLets Sign in youForgot Password?Lets get startedDon\'t have a' }).nth(2).click();
});