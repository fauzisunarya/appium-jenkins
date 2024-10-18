import {remote} from 'webdriverio';
async function main () {
  const caps = {
  "appium:automationName": "UIautomator2",
  "appium:platformName": "Android",
  "appium:platformVersion": "13",
  "appium:deviceName": "emulator-5554",
  "appium:newCommandTimeout": 3600,
  "appium:disableIdLocatorAutocompletion": true,
  "appium:connectHardwareKeyboard": true
}
  const driver = await remote({
    protocol: "http",
    hostname: "127.0.0.1",
    port: 4723,
    path: "/",
    capabilities: caps
  });


  //Allow Permission
  // const el1 = await driver.$("id:com.android.permissioncontroller:id/permission_allow_foreground_only_button");
  // await el1.waitForDisplayed({ timeout: 30000 }); // Tunggu sampai elemen muncul
  // await el1.click();
  
  // //Allow Permission
  // const el2 = await driver.$("id:com.android.permissioncontroller:id/permission_allow_button");
  // await el2.waitForDisplayed({ timeout: 30000 }); // Tunggu sampai elemen muncul
  // await el2.click();
  
  // //Allow Permission
  // const el3 = await driver.$("id:com.android.permissioncontroller:id/permission_allow_foreground_only_button");
  // await el3.waitForDisplayed({ timeout: 30000 }); // Tunggu sampai elemen muncul
  // await el3.click();
  
  //Klik Button Daftar
  const el4 = await driver.$("id:daftar pak eko");
  await el4.waitForDisplayed({ timeout: 30000 }); // Tunggu sampai elemen muncul
  await el4.click();
  
  //Input data nomor HP
  const el5 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.EditText\").instance(0)");
  await el5.waitForDisplayed({ timeout: 30000 }); // Tunggu sampai elemen muncul
  await el5.click();
  await el5.addValue("82261543919");
  
  //Input password
  const el6 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.EditText\").instance(2)");
  await el6.waitForDisplayed({ timeout: 30000 }); // Tunggu sampai elemen muncul
  await el6.click();
  await el6.addValue("Fauzi@1999");
  
  //Klik button selanjutnya
  const el7 = await driver.$("accessibility id:Selanjutnya");
  await el7.waitForDisplayed({ timeout: 30000 }); // Tunggu sampai elemen muncul
  await el7.click();
  
  //Muncul alert Nomor telepon sudah terdaftar
  const el8 = await driver.$("accessibility id:Nomor telepon sudah terdaftar");
  await el8.waitForDisplayed({ timeout: 30000 }); // Tunggu sampai elemen muncul
  await el8.click();
  
  //Klik button close alert
  const el9 = await driver.$("class name:android.widget.Button");
  await el9.waitForDisplayed({ timeout: 30000 }); // Tunggu sampai elemen muncul
  await el9.click();
  
  await driver.deleteSession();
}

main().catch(console.log);