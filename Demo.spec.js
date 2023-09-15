import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://dev.app.ecarehealth.com/');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('admin@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Pass1234');
  await page.getByPlaceholder('Password').press('Enter');
  await page.getByRole('button', { name: 'Provider Groups' }).click();
  await page.getByRole('button', { name: 'Add New Provider Group' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('heading', { name: 'Jupiter Hospital' }).click();
  await page.getByRole('button', { name: 'Locations' }).click();
  await page.getByRole('heading', { name: 'Beachwood' }).click();
  await page.getByText('DetailsDepartmentPatientsUsers').click();
  await page.getByRole('button', { name: 'Department' }).click();
  await page.getByRole('button', { name: 'Patients' }).click();
  await page.getByRole('button', { name: 'Users' }).click();
  await page.locator('div').filter({ hasText: /^Location$/ }).locator('path').click();
  await page.getByRole('button', { name: 'Departments' }).click();
  await page.waitForSelector('button', { name: 'Add Departments' });
  await page.getByRole('button', { name: 'Add Departments' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
});
 