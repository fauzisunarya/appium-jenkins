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
    const appPath = "E:\\Neuron\\Bypass SSL Pining\\Rumah\\Mytech\\PGN.apk";

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

      // Menemukan dan klik tombol "Catat Meter Mandiri"
      const catatMeterButton = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.ImageView\").instance(4)");
      await catatMeterButton.waitForDisplayed({ timeout: 30000 }); // Tunggu sampai elemen muncul
      await catatMeterButton.click();

      // Menemukan dan klik tombol "Selanjutnya"
      const selanjutnyaButton1 = await driver.$("-android uiautomator:new UiSelector().className(\"android.view.View\").instance(7)");
      await selanjutnyaButton1.waitForDisplayed({ timeout: 30000 }); // Tunggu sampai elemen muncul
      await selanjutnyaButton1.click();

      // Menemukan dan klik opsi "Tentukan Tanggal Pencatatan Nanti Saja, Masuk Ke Halaman Utama"
      const tentukanTanggalButton = await driver.$("-android uiautomator:new UiSelector().className(\"android.view.View\").instance(7)");
      await tentukanTanggalButton.waitForDisplayed({ timeout: 30000 }); // Tunggu sampai elemen muncul
      await tentukanTanggalButton.click();

      // Menemukan dan pilih tanggal "18"
      const tanggal18 = await driver.$("accessibility id:18");
      await tanggal18.waitForDisplayed({ timeout: 30000 }); // Tunggu sampai elemen muncul
      await tanggal18.click();

      // Menemukan dan klik tombol "Selanjutnya" lagi
      const selanjutnyaButton2 = await driver.$("accessibility id:Selanjutnya");
      await selanjutnyaButton2.waitForDisplayed({ timeout: 30000 }); // Tunggu sampai elemen muncul
      await selanjutnyaButton2.click();

      // Menemukan dan klik tombol "Tetapkan Tanggal"
      const tetapkanTanggal = await driver.$("accessibility id:Tetapkan Tanggal");
      await tetapkanTanggal.waitForDisplayed({ timeout: 30000 }); // Tunggu sampai elemen muncul
      await tetapkanTanggal.click();

      // Menemukan dan klik tombol "Lanjut ke Halaman Catat Meter Mandiri"
      const lanjutButton = await driver.$("accessibility id:Lanjut ke Halaman Catat Meter Mandiri");
      await lanjutButton.waitForDisplayed({ timeout: 30000 }); // Tunggu sampai elemen muncul
      await lanjutButton.click();

      // Back
      const back = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.Button\").instance(0)");
      await back.waitForDisplayed({ timeout: 30000 }); // Tunggu sampai elemen muncul
      await back.click();

      await driver.deleteSession();

}

// Jalankan fungsi
main().catch(console.log);