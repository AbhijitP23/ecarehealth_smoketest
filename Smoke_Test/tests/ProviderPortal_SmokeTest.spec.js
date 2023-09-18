import { test, expect , defineConfig} from '@playwright/test'
export default defineConfig ({
  use: {
    video: 'on',
  },
});
async function waitForMilliseconds(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

test.only("Demo Login", async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 1536, height: 800 });

  const testTimeout = 18000000; // 70 seconds  
  test.setTimeout(testTimeout);

  await page.goto('https://dev.app.ecarehealth.com/auth/login');
  // await page.pause();

  // console.log(await page.viewportSize().width);
  // console.log(await page.viewportSize().height);

  /*
    await page.screenshot({ path: 'tests/Smoke Test/screenshot' + Date.now() + 'Login.png' });
  
    const utcTimestamp = Date.now(); // Replace with your UTC timestamp
    const date = new Date(utcTimestamp); // Convert UTC timestamp to a Date object
  
    // Get the components of the date (day, month, year)
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // Month is 0-based, so add 1
    const year = date.getUTCFullYear();
  
    // Create a formatted date string in DD/MM/YY format
    const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year.toString().slice(-2)}`;
  
    const screenshot = await page.screenshot();
    await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' }); 
    */

  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('provider@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').press('CapsLock');
  await page.getByPlaceholder('Password').fill('P');
  await page.getByPlaceholder('Password').press('CapsLock');
  await page.getByPlaceholder('Password').fill('Pass1234');
  await page.getByRole('button').first().click();
  await page.getByRole('button', { name: 'Lets get started' }).click();

  //Dashboard
  await waitForMilliseconds(4000);
  // await page.screenshot({ path: 'tests/Smoke Test/screenshot' + Date.now() + 'Dashboard.png' });
  await page.getByRole('button', { name: 'Provider Admin' }).click();
  await waitForMilliseconds(4000);
  // await page.screenshot({ path: 'tests/Smoke Test/screenshot' + Date.now() + 'ProviderAdminDashboard.png' });

  //scheduling
  await page.locator('#root button').filter({ hasText: 'Scheduling' }).click();
  await page.getByRole('button', { name: 'Calendar' }).click();
  await waitForMilliseconds(4000);
  //await page.screenshot({ path: 'tests/Smoke Test/screenshot' + Date.now() + 'Calendar.png' });
  await page.getByRole('button', { name: 'Schedule New Appoinment' }).click();
  await page.getByRole('menuitem', { name: 'New Appointment' }).click();
  await waitForMilliseconds(4000);
  //await page.screenshot({ path: 'tests/Smoke Test/screenshot' + Date.now() + 'AddAppoinment.png' });
  await page.getByRole('heading', { name: 'New Patient' }).click();
  await waitForMilliseconds(4000);
  //await page.screenshot({ path: 'tests/Smoke Test/screenshot' + Date.now() + 'AddPatient.png' });
  await page.getByRole('heading', { name: 'New Patient' }).getByTestId('CloseIcon').click();
  await page.getByTestId('CloseIcon').click();
  await page.getByRole('button', { name: 'Schedule New Appoinment' }).click();
  await page.getByRole('menuitem', { name: 'Instant Appointment' }).click();
  await waitForMilliseconds(4000);
  //await page.screenshot({ path: 'tests/Smoke Test/screenshot' + Date.now() + 'AddInstant.png' });
  await page.getByTestId('CloseIcon').click();
  await page.locator('#root button').filter({ hasText: 'Scheduling' }).click();
  await page.getByRole('button', { name: 'Appointments' }).click();
  await page.getByRole('button', { name: 'Schedule New Appoinment' }).click();
  await page.getByRole('menuitem', { name: 'New Appointment' }).click();
  await page.getByTestId('CloseIcon').click();
  await page.getByRole('button', { name: 'Schedule New Appoinment' }).click();
  await page.getByRole('menuitem', { name: 'Instant Appointment' }).click();
  await page.getByTestId('CloseIcon').click();
  await page.locator('#root button').filter({ hasText: 'Scheduling' }).click();
  await page.getByRole('button', { name: 'Availability' }).click();
  await waitForMilliseconds(4000);
  //await page.screenshot({ path: 'tests/Smoke Test/screenshot' + Date.now() + 'Availability.png' });
  await page.locator('#root button').filter({ hasText: 'Scheduling' }).click();
  await page.getByRole('button', { name: 'Open Task' }).click();
  await waitForMilliseconds(4000);
  //await page.screenshot({ path: 'tests/Smoke Test/screenshot' + Date.now() + 'Open Task.png' });
  await page.locator('#root button').filter({ hasText: 'Patients' }).click();
  await page.getByRole('button', { name: 'Patient List' }).click();
  await page.getByRole('button', { name: 'Add New Patient' }).click();
  await page.locator('.jss342 > .MuiButtonBase-root').click();
  await page.locator('#root button').filter({ hasText: 'Patients' }).click();
  await waitForMilliseconds(4000);
  //await page.screenshot({ path: 'tests/Smoke Test/screenshot' + Date.now() + 'Patients.png' });
  await page.getByRole('button', { name: 'Consent Forms' }).click();
  await page.getByRole('button', { name: 'Add Consent Forms' }).click();
  await waitForMilliseconds(4000);
  //await page.screenshot({ path: 'tests/Smoke Test/screenshot' + Date.now() + 'Consent Forms.png' });
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();

  // patient
  await page.locator('#root button').filter({ hasText: 'Patients' }).click();
  await page.getByRole('button', { name: 'Patient List' }).click();
  await waitForMilliseconds(4000);
  // await page.screenshot({ path: 'tests/Smoke Test/screenshot' + Date.now() + 'Patient List.png' });
  await page.getByRole('button', { name: 'Add New Patient' }).click();
  await page.getByRole('button', { name: 'Save Patient' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.locator('#root button').filter({ hasText: 'Patients' }).click();
  await page.getByRole('button', { name: 'Consent Forms' }).click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'Add Consent Forms' }).click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();

  //Billing
  await page.locator('#root button').filter({ hasText: 'Billing' }).click();
  await page.getByRole('button', { name: 'Super Bill' }).click();
  await waitForMilliseconds(4000);
  //await page.screenshot({ path: 'tests/Smoke Test/screenshot' + Date.now() + 'SuperBill.png' });
  await page.getByRole('button', { name: 'Create Super Bill' }).click();
  //await page.locator('//*[@id="root"]/div/div[2]/div/div/div/div[2]/div[1]/div[18]/button').click();
  await page.getByRole('button', { name: 'Save Bill' }).click();
  await page.getByRole('heading', { name: 'Super bill successfully Created!' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  //await page.locator('/html/body/div[2]/div[3]/div/div[3]/button/h5').click();   //OK button
  await waitForMilliseconds(4000);
  //await page.screenshot({ path: 'tests/Smoke Test/screenshot' + Date.now() + 'AddSuperBill.png' });
  await page.getByRole('button', { name: 'Filters' }).click();
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('button', { name: 'Ready For Billing' }).click();
  await page.locator('//*[@id="root"]/div/div[1]/header/div/div/div[1]/div/div[3]/div/button[5]/h5').click();
  await waitForMilliseconds(4000);
  //await page.screenshot({ path: 'tests/Smoke Test/screenshot' + Date.now() + 'Billing.png' });
  await page.getByRole('button', { name: 'Claims' }).click();
  await page.locator('#root button').filter({ hasText: 'Billing' }).click();
  await page.getByRole('button', { name: 'Account Receivable' }).click();
  await waitForMilliseconds(4000);
  //await page.screenshot({ path: 'tests/Smoke Test/screenshot' + Date.now() + 'Account Receivable.png' });
  await page.getByRole('button', { name: 'Patient', exact: true }).click();
  await page.getByRole('button', { name: 'Insurance' }).click();
  await waitForMilliseconds(4000);
  await page.locator('#root button').filter({ hasText: 'Billing' }).click();
  await page.getByRole('button', { name: 'Patient Payment' }).click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'Add Payment' }).click();
  await page.getByRole('button').first().click();
  await page.getByRole('button', { name: 'Filters' }).click();
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.locator('#root button').filter({ hasText: 'Billing' }).click();
  await page.getByRole('button', { name: 'Insurance Payment' }).click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'Add Payment' }).click();
  await waitForMilliseconds(4000);
  //await page.screenshot({ path: 'tests/Smoke Test/screenshot' + Date.now() + 'Add Payment.png' });
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('button', { name: 'Filters' }).click();
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.locator('#root button').filter({ hasText: 'Billing' }).click();
  await page.getByRole('button', { name: 'Fee Schedule' }).click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'Add New Fee Schedule' }).click();
  await waitForMilliseconds(4000);
  //await page.screenshot({ path: 'tests/Smoke Test/screenshot' + Date.now() + 'scheduling.png' });
  await page.getByRole('button', { name: 'Save Fee Schedule' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();

  //Settings
  await page.locator('button').filter({ hasText: 'Settings' }).click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'Account Settings' }).click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'Provider Group' }).click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'Notification' }).click();
  await waitForMilliseconds(4000);
  await page.locator('button').filter({ hasText: 'Settings' }).click();
  await page.getByRole('button', { name: 'Education Materials' }).click();
  await waitForMilliseconds(4000);
  await page.locator('button').filter({ hasText: 'Settings' }).click();
  await page.getByRole('button', { name: 'Users Settings' }).click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'Add Provider User' }).click()
  await waitForMilliseconds(4000);;
  await page.getByTestId('CloseIcon').click();
  await page.getByRole('button', { name: 'Add Staff User' }).click();
  await waitForMilliseconds(4000);
  await page.getByTestId('CloseIcon').click();
  await page.getByRole('button', { name: 'Roles and Responsibility' }).click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'Add New Role' }).click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.locator('button').filter({ hasText: 'Settings' }).click();
  await page.getByRole('button', { name: 'Templates' }).click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'Create New Visit Note' }).click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'Review Of System (ROS)' }).click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'Physical Exam (PE)' }).click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'Screening Assessments' }).click();
  await waitForMilliseconds(4000);
  await page.locator('button').filter({ hasText: 'Settings' }).click();
  await page.getByRole('button', { name: 'Form Builder' }).click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'Visit Notes' }).click();
  await waitForMilliseconds(4000);
  await page.locator('button').filter({ hasText: 'Settings' }).click();
  await page.getByRole('button', { name: 'Masters' }).click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'LOINC Code Catalog' }).click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'Add LOINC Code' }).click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'Add' }).click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('button', { name: 'Drug Catalog' }).click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'Add Drug Catalog' }).click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('link', { name: 'ICD 10 Code Catalog' }).click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'Add ICD 10 Code' }).click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('button', { name: 'CPT Code Catalog' }).click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'Add CPT Code' }).click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('button', { name: 'HCPCS Code Catalog' }).click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'Add HCPCS Code' }).click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();

  /*
    //Communications
   // await waitForMilliseconds(2000);
               //await page.screenshot({ path: 'tests/Smoke Test/screenshot' + Date.now() + 'Communications.png' });
   await page.locator('#root button').filter({ hasText: 'Communications' }).click();
   await page.getByRole('button', { name: 'Tasks' }).click(); 
   
   //Reports
   // await waitForMilliseconds(2000);
                    //await page.screenshot({ path: 'tests/Smoke Test/screenshot' + Date.now() + 'Reports.png' });
   await page.locator('#root button').filter({ hasText: 'Reports' }).click();
   await page.getByRole('button', { name: 'Account/User Reports' }).click();
 
  //Help
   // await waitForMilliseconds(2000);
                         //await page.screenshot({ path: 'tests/Smoke Test/screenshot' + Date.now() + 'Help.png' });
   await page.locator('#root button').filter({ hasText: 'Help' }).click();
 */

  //Profile
  await page.locator("//button[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk'][2]").click();
  await waitForMilliseconds(4000);
  await page.getByText('Profile').click();
  await waitForMilliseconds(4000);
  //await page.screenshot({ path: 'tests/Smoke Test/screenshot' + Date.now() + 'Profile.png' });
  await page.getByRole('button', { name: 'Provider Group' }).click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'Notification' }).click();
  await waitForMilliseconds(4000);


  //Logout
  await page.getByLabel('search').nth(1).click();
  await page.getByText('Logout').click();
  await waitForMilliseconds(4000);
  await page.getByRole('button', { name: 'Yes, Log me Out' }).click();


})

