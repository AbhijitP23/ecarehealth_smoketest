import { test, expect } from '@playwright/test';

test('ecare health', async ({ page }) => {
 const testTimeout = 7000000; // 70 seconds
  await page.setDefaultTimeout(testTimeout);

 //await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('https://dev.app.ecarehealth.com/');
  //await page.waitForTimeout(2000);
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'SignIn.png' });
// Login page
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('admin@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Pass1234');
  await page.getByRole('button', { name: 'Lets get started' }).click();

  //Dashboard
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'Dashboard.png' });
  //await page.waitForTimeout(2000);

  //Provider group page
  await page.getByRole('button', { name: 'Provider Groups' }).click();
  //await page.waitForTimeout(2000);
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'ProviderGroup.png' });

  //Add provider group form
  await page.getByRole('button', { name: 'Add New Provider Group' }).click();
  //await page.waitForTimeout(3000);
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'AddProviderGroup.png' });
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();

  //Provider group profile
  await page.getByRole('heading', { name: 'Jupiter Hospital' }).click();
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'ProviderGroupProfile.png' });
  await page.getByRole('button', { name: 'Edit Profile' }).click();
  //await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();

  //Location Page
  await page.getByRole('button', { name: 'Locations' }).click();
  //await page.waitForTimeout(2000);
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'ProviderGroupLoc.png' });
  await page.getByRole('button', { name: 'Add Location' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('heading', { name: 'Beachwood' }).click();
  //Location department
  await page.getByRole('button', { name: 'Department' }).click();
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'LocationDepartment.png' });
  //await page.waitForTimeout(1000);

  //Location group patient
  await page.getByRole('button', { name: 'Patients' }).click();
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'LocationPatient.png' });
  //await page.waitForTimeout(1000);
  //Location group users
  await page.getByRole('button', { name: 'Users' }).click();
  await page.getByRole('button', { name: 'Users' }).click();
  await page.locator('div').filter({ hasText: /^Location$/ }).locator('path').click();


  //Department
  await page.getByRole('button', { name: 'Departments' }).click();
  await page.getByRole('button', { name: 'Add Departments' }).click(), 
  await page.getByTestId('CloseIcon').locator('path').click();
  await page.getByRole('button', { name: 'Patients' }).click();
  
  //User
  await page.getByRole('button', { name: 'Users' }).click();

 await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'ProviderGroupUser.png' });
  //await page.waitForTimeout(1500);
  await page.getByRole('button', { name: 'Add User' }).click();
  await page.getByRole('menuitem', { name: 'Staff User' }).click();
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'StaffUser.png' });
 //await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  //await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Add User' }).click();
  await page.getByRole('menuitem', { name: 'Provider User' }).click();
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'ProviderUser.png' });
  //await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  //await page.waitForTimeout(2000);
  await page.getByRole('heading', { name: 'Henna West' }).click();
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'UserProfile.png' });
  //await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Edit Profile' }).click();
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'EditUserProfile.png' });
  await page.locator('div').filter({ hasText: /^Save$/ }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByTestId('ArrowBackIcon').click();

 // await page.waitForTimeout(2000);
  await page.getByRole('heading', { name: 'Demelza Robins' }).click();
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'UserProfile.png' });
  //await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Edit Profile' }).click();
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'EditUserProfile.png' });
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByTestId('ArrowBackIcon').click();

  //Master
  await page.getByRole('button', { name: 'Master' }).click();
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'Master.png' });
  //await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'LOINC Code Catalog' }).click();
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'LONIC.png' });
  //await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Add LOINC Code' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('button', { name: 'Drug Catalog' }).click();
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'DrugCatalog.png' });
 // await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Add Drug Catalog' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('button', { name: 'ICD 10 Code Catalog' }).click();
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'ICD10CodeCatalog.png' });
  //await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Add ICD 10 Code' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('link', { name: 'CPT Code Catalog' }).click();
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'CPTCodeCatalog.png' });
  //await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Add CPT Code' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('button', { name: 'HCPCS Code Catalog' }).click();
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'HCPCSCodeCatalog.png' });
  //await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Add HCPCS Code' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();

  //Settings
  await page.locator('button').filter({ hasText: /^Settings$/ }).click();
  //await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Profile' }).click();
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'Admin Profile.png' });
  await page.getByRole('button', { name: 'Change Password' }).click();
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'ChangePassword.png' });
  await page.getByText('Change PasswordCurrent Password*New Password*Confirm new Password* Update Passwo').click();
  //await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Update Password' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('button', { name: 'Edit Profile' }).click();
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'EditAdminProfile.png' });
  //await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();


  //Add admin user 
  await page.locator('button').filter({ hasText: /^Settings$/ }).click();
  await page.getByRole('button', { name: 'Users Settings' }).click();
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'AdmiUserSetting.png' });
 //await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Add User' }).click();
 //await page.waitForTimeout(2000);
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'AddAdminUser.png' });
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.locator('div').filter({ hasText: /^Roles and Responsibility$/ }).click();
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'RolesResponsibility.png' });
  await page.getByLabel('search').nth(1).click();
 //await page.waitForTimeout(2000);

  //Logout
  await page.getByText('Logout').click();
  await page.screenshot({ path: 'tests/ecare/screenshot' + Date.now() + 'Logout.png' });
  await page.getByRole('button', { name: 'Yes, Log me Out' }).click();
});




