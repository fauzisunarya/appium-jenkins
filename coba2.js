// This sample code supports WebdriverIO client >=7
// (npm i --save webdriverio)
// Then paste this into a .js file and run with Node:
// node <file>.js

import {remote} from 'webdriverio';

import { execSync } from 'child_process';

async function isAppInstalled(bundleId) {
    try {
        // Menjalankan perintah adb untuk memeriksa apakah aplikasi sudah terinstal
        execSync(`adb shell pm list packages | grep com.pgn.customer`);
        return true; // Aplikasi terinstal
    } catch (error) {
        return false; // Aplikasi tidak terinstal
    }
}

async function main () {
  const bundleId = "com.pgn.customer"; // Ganti dengan bundle ID aplikasi Anda
  const appPath = "E:\\Neuron\\Testing Mobile\\Apk\\PGN.apk";

const caps = {
  "appium:automationName": "UiAutomator2",
  "appium:platformName": "Android",
  "appium:platformVersion": "13",
  "appium:deviceName": "emulator-5554",
  "appium:app": null,
  "appium:newCommandTimeout": 3600,
  "appium:connectHardwareKeyboard": true
}
const driver = await remote({
  protocol: "http",
  hostname: "127.0.0.1",
  port: 4723,
  path: "/",
  capabilities: caps
});

      // Pengecekan apakah aplikasi sudah terinstal
      const installed = await isAppInstalled(driver, bundleId);
      if (!installed) {
          // Jika tidak terinstal, set appPath
          await driver.updateCapabilities({ "appium:app": appPath });
        } else {
          // Jika sudah terinstal, luncurkan aplikasi
          await driver.execute('mobile: activateApp', { appId: bundleId });

          
      }


  // const el1 = await driver.$("id:com.android.permissioncontroller:id/permission_allow_foreground_only_button");
  // await el1.waitForDisplayed({ timeout: 30000 }); // Tunggu sampai elemen muncul
  // await el1.click();
  
  // const el2 = await driver.$("id:com.android.permissioncontroller:id/permission_allow_button");
  // await el2.waitForDisplayed({ timeout: 30000 }); // Tunggu sampai elemen muncul
  // await el2.click();
  
  // const el3 = await driver.$("id:com.android.permissioncontroller:id/permission_allow_foreground_only_button");
  // await el3.waitForDisplayed({ timeout: 30000 }); // Tunggu sampai elemen muncul
  // await el3.click();
  
  const el4 = await driver.$("accessibility id:Daftar");
  await el4.waitForDisplayed({ timeout: 80000 }); // Tunggu sampai elemen muncul
  await el4.click();
  
  const el5 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.EditText\").instance(0)");
  await el5.waitForDisplayed({ timeout: 30000 }); // Tunggu sampai elemen muncul
  await el5.click();
  await el5.addValue("82261543919");
  
  const el6 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.EditText\").instance(2)");
  await el6.waitForDisplayed({ timeout: 30000 }); // Tunggu sampai elemen muncul
  await el6.click();
  await el6.addValue("Fauzi@1999");
  
  const el7 = await driver.$("accessibility id:Selanjutnya");
  await el7.waitForDisplayed({ timeout: 30000 }); // Tunggu sampai elemen muncul
  await el7.click();
  
  const el8 = await driver.$("accessibility id:Nomor telepon sudah terdaftar");
  await el8.waitForDisplayed({ timeout: 30000 }); // Tunggu sampai elemen muncul
  await el8.click();
  
  const el9 = await driver.$("class name:android.widget.Button");
  await el9.waitForDisplayed({ timeout: 30000 }); // Tunggu sampai elemen muncul
  await el9.click();
  
  await driver.deleteSession();
}

main().catch(console.log);