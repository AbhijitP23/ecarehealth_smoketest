import { test, expect, defineConfig } from '@playwright/test'

async function waitForMilliseconds(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

test.only("Provider Portal", async ({ page },) => {
  //await page.setViewportSize({ width: 1530, height: 750 });

  const testTimeout = 18000000;
  test.setTimeout(testTimeout);

  await page.goto('https://dev.app.ecarehealth.com/auth/login');
  //await page.pause();

  const fs = require('fs');
  var folderName = 'PSmokeTest_Screenshot_' + Date.now() + '\\';
  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }
  } catch (err) {
    console.error(err);
  }

  folderName = folderName + '\\';

  //Login 
  await page.screenshot({ path: folderName + 'Login.png', fullPage: true })
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('provider@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').press('CapsLock');
  await page.getByPlaceholder('Password').fill('P');
  await page.getByPlaceholder('Password').press('CapsLock');
  await page.getByPlaceholder('Password').fill('Pass1234');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByLabel('Username or email').click();
  await page.getByLabel('Username or email').fill('admin');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Switch to Provider' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Dashboard.png' })

  //Dashboard
  await page.getByRole('button', { name: 'Provider Admin' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'ProviderAdminDashboard.png' })

  //Scheduling Module
  await page.locator('#root button').filter({ hasText: 'Scheduling' }).click();
  await page.getByRole('button', { name: 'Calendar' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Calendar.png', fullPage: true })
  await page.getByRole('button', { name: 'Schedule New Appoinment' }).click();
  await page.getByRole('menuitem', { name: 'New Appointment' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'AddAppoinment.png', fullPage: true })
  await page.getByRole('heading', { name: 'New Patient' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'AddPatient.png' })
  await page.getByRole('heading', { name: 'New Patient' }).getByTestId('CloseIcon').click();
  await page.getByRole('button', { name: 'Save and Close' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('button', { name: 'Schedule New Appoinment' }).click();
  await page.getByRole('menuitem', { name: 'Instant Appointment' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'AddInstant.png' })
  await page.getByTestId('CloseIcon').click();
  await page.locator('#root button').filter({ hasText: 'Scheduling' }).click();
  await page.getByRole('button', { name: 'Appointments' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Appointments List.png' })
  await page.getByRole('button', { name: 'Schedule New Appoinment' }).click();
  await page.getByRole('menuitem', { name: 'New Appointment' }).click();
  await page.getByTestId('CloseIcon').click();
  await page.getByRole('button', { name: 'Schedule New Appoinment' }).click();
  await page.getByRole('menuitem', { name: 'Instant Appointment' }).click();
  await page.getByTestId('CloseIcon').click();
  await page.locator('#root button').filter({ hasText: 'Scheduling' }).click();
  await page.getByRole('button', { name: 'Availability' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Availability.png' })
  await page.locator('#root button').filter({ hasText: 'Scheduling' }).click();
  await page.getByRole('button', { name: 'Open Task' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Open Task.png' })

  // Patient Module
  await page.locator('#root button').filter({ hasText: 'Patients' }).click();
  await page.getByRole('button', { name: 'Patient List' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Patient List.png' })
  await page.getByRole('button', { name: 'Add New Patient' }).click();
  await page.getByRole('button', { name: 'Save Patient' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.locator('#root button').filter({ hasText: 'Patients' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Patients.png' })
  await page.locator('#root button').filter({ hasText: 'Patients' }).click();
  await page.getByRole('button', { name: 'Consent Forms' }).click();
  await page.getByRole('button', { name: 'Add Consent Forms' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Consent Forms.png' })
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();

  //Billing Module
  await page.locator('#root button').filter({ hasText: 'Billing' }).click();
  await page.getByRole('button', { name: 'Super Bill' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'SuperBill.png' })
  await page.getByRole('button', { name: 'Create Super Bill' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'AddSuperBill.png' })
  await page.getByRole('button', { name: 'Create Super Bill' }).click();
  await page.getByRole('button', { name: 'Filters' }).click();
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('button', { name: 'Ready For Billing' }).click();
  await page.locator('#root button').filter({ hasText: /^Billing$/ }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Billing.png' })
  await page.getByRole('button', { name: 'Claims' }).click();
  // await waitForMilliseconds(4000);
  //await page.screenshot({ path: folderName + 'Claims.png' })
  await page.locator('#root button').filter({ hasText: 'Billing' }).click();
  await page.getByRole('button', { name: 'Account Receivable' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Account Receivable.png' })
  await page.getByRole('button', { name: 'Patient', exact: true }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Patient.png' })
  await page.getByRole('button', { name: 'Insurance' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Insurance.png' })
  await page.locator('#root button').filter({ hasText: 'Billing' }).click();
  await page.getByRole('button', { name: 'Patient Payment' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Patient Payment.png' })
  await page.getByRole('button', { name: 'Add Payment' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Add Payment.png' })
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('button', { name: 'Filters' }).click();
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.locator('#root button').filter({ hasText: 'Billing' }).click();
  await page.getByRole('button', { name: 'Insurance Payment' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Insurance Payment.png' })
  await page.getByRole('button', { name: 'Add Payment' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Add Payment.png' })
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('button', { name: 'Filters' }).click();
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.locator('#root button').filter({ hasText: 'Billing' }).click();
  await page.getByRole('button', { name: 'Fee Schedule' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Fee Schedule.png' })
  await page.getByRole('button', { name: 'Add New Fee Schedule' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'scheduling.png' })
  await page.getByRole('button', { name: 'Save Fee Schedule' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();

  //Settings Module
  await page.locator('button').filter({ hasText: 'Settings' }).click();
  await page.getByRole('button', { name: 'Account Settings' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Profile.png' })
  await page.getByRole('button', { name: 'Provider Group' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Provider Group.png' })
  await page.getByRole('button', { name: 'Notification' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Notification.png' })
  await page.locator('button').filter({ hasText: 'Settings' }).click();
  await page.getByRole('button', { name: 'Education Materials' }).click();
  await page.locator('button').filter({ hasText: 'Settings' }).click();
  await page.getByRole('button', { name: 'Users Settings' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Users Settings.png' })
  await page.getByRole('button', { name: 'Add Provider User' }).click()
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Add Provider User.png' })
  await page.getByTestId('CloseIcon').click();
  await page.getByRole('button', { name: 'Add Staff User' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Add Staff User.png' })
  await page.getByTestId('CloseIcon').click();
  await page.getByRole('button', { name: 'Roles and Responsibility' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Roles and Responsibility.png' })
  await page.getByRole('button', { name: 'Add New Role' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Add New Role.png' })
  await page.getByTestId('CloseIcon').locator('path').click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.locator('button').filter({ hasText: 'Settings' }).click();
  await page.getByRole('button', { name: 'Templates' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Templates.png' })
  await page.getByRole('button', { name: 'Create New Visit Note' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'New Visit Note.png' })
  await page.getByRole('button', { name: 'Review Of System (ROS)' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'ROS.png' })
  await page.getByRole('button', { name: 'Create New ROS' }).click();
  await page.getByRole('button', { name: 'Physical Exam (PE)' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'PE.png' })
  await page.getByRole('button', { name: 'Create New PE' }).click();
  await page.getByRole('button', { name: 'Screening Assessments' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Assessments.png' })
  await page.getByRole('button', { name: 'Create New Assessments' }).click();
  await page.locator('button').filter({ hasText: 'Settings' }).click();
  await page.getByRole('button', { name: 'Form Builder' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Form Builder.png' })
  await page.getByRole('button', { name: 'Create New Intake Plan' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'New Intake Plan.png' })
  await page.locator('div').filter({ hasText: /^Custom Intake Plan$/ }).getByRole('button').click();
  await page.getByRole('button', { name: 'Visit Notes' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Visit Notes.png' })
  await page.locator('button').filter({ hasText: 'Settings' }).click();
  await page.getByRole('button', { name: 'Masters' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Masters.png' })
  await page.getByRole('button', { name: 'LOINC Code Catalog' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'LOINC.png' })
  await page.getByRole('button', { name: 'Add LOINC Code' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Add LOINC.png' })
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('button', { name: 'Drug Catalog' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Drug Catalog.png' })
  await page.getByRole('button', { name: 'Add Drug Catalog' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Add Drug.png' })
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('link', { name: 'ICD 10 Code Catalog' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'ICD.png' })
  await page.getByRole('button', { name: 'Add ICD 10 Code' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Add ICD.png' })
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('button', { name: 'CPT Code Catalog' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'CPT.png' })
  await page.getByRole('button', { name: 'Add CPT Code' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Add CPT.png' })
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('button', { name: 'HCPCS Code Catalog' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'HCPCS.png' })
  await page.getByRole('button', { name: 'Add HCPCS Code' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Add HCPCS.png' })
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();

  /*
    //Communications Module
   // await waitForMilliseconds(2000);
  //await page.screenshot({ path: 'tests/Smoke Test/screenshot' + Date.now() + 'Communications.png' });
   await page.locator('#root button').filter({ hasText: 'Communications' }).click();
   await page.getByRole('button', { name: 'Tasks' }).click(); 
   
   //Reports Module
   // await waitForMilliseconds(2000);
  //await page.screenshot({ path: 'tests/Smoke Test/screenshot' + Date.now() + 'Reports.png' });
   await page.locator('#root button').filter({ hasText: 'Reports' }).click();
   await page.getByRole('button', { name: 'Account/User Reports' }).click();
 
  //Help Module
   // await waitForMilliseconds(2000);
  //await page.screenshot({ path: 'tests/Smoke Test/screenshot' + Date.now() + 'Help.png' });
   await page.locator('#root button').filter({ hasText: 'Help' }).click();
 */

  //Profile
  await page.locator("//button[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk'][2]").click();
  await waitForMilliseconds(4000);
  await page.getByText('Profile').click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Profile.png' })
  await page.getByRole('button', { name: 'Provider Group' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Provider Group.png' })
  await page.getByRole('button', { name: 'Notification' }).click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Notification.png' })

  //Logout
  await page.getByLabel('search').nth(1).click();
  await page.getByText('Logout').click();
  await waitForMilliseconds(4000);
  await page.screenshot({ path: folderName + 'Logout.png' })
  await page.getByRole('button', { name: 'Yes, Log me Out' }).click();

})

