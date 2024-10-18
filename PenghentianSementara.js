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

      // meng clik layanan teknis
      // const LayananTeknisButton = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.ImageView\").instance(5)");
      const LayananTeknisButton = await driver.$("//android.widget.ScrollView/android.view.View[2]/android.widget.ImageView")
      await LayananTeknisButton.waitForDisplayed({ timeout: 50000 });
      await LayananTeknisButton.click();

      // meng klik aliran dan meter gas
      const AliranMeterGas = await driver.$("accessibility id:Aliran dan Meter Gas");
      await AliranMeterGas.waitForDisplayed({ timeout: 100000 });
      await AliranMeterGas.click();

      // meng klik pengaliran kembali harus ditambahkan 0 di cliknya
      const PengaliranKembali = await driver.$(
        '-android uiautomator:new UiSelector().descriptionContains("Pengaliran Kembali")'
      );
      
      if (PengaliranKembali) {
        await PengaliranKembali.waitForDisplayed({ timeout: 50000 });
        await PengaliranKembali.click();
      } else {
        console.log("Element not found");
      }

      // meng klik rencana pengaliran kembali
      const elemenRencanaPengaliranKembali = await driver.$$(
        '//android.widget.ScrollView/android.view.View[7]'
      );
      
      // Klik elemen pertama langsung dengan [0]
      await elemenRencanaPengaliranKembali[0].waitForDisplayed({ timeout: 50000 });
      await elemenRencanaPengaliranKembali[0].click();
      

      // memilih tanggal 
      const MemilihTanggal = await driver.$$("accessibility id:Friday, September 27, 2024");
      await MemilihTanggal[0].waitForDisplayed({ timeout: 100000 });
      await MemilihTanggal[0].click();

      // meng klik pilih
      const Simpan = await driver.$$('(//android.view.View[@content-desc="Pilih"])[2]');
      await Simpan[0].waitForDisplayed({ timeout: 50000 });
      await Simpan[0].click();

      // alasan pengajuan
      const AlasanPengajuan = await driver.$$("class name:android.widget.EditText");
      await AlasanPengajuan[0].waitForDisplayed({ timeout: 50000 });
      await AlasanPengajuan[0].click();
      await AlasanPengajuan[0].addValue("Testing");

      const el3 = await driver.$("~Mohon konfirmasi kepada customer service PGN melalui chat WhatsApp jika Anda ingin melakukan pengaliran kembali");
      await el3.waitForDisplayed({ timeout: 50000 });
      await el3.click();
          
      // meng clik Tanda tangan
      const TandaTangan = await driver.$$("accessibility id:Klik untuk buat tanda tangan");
      await TandaTangan[0].waitForDisplayed({ timeout: 100000 });
      await TandaTangan[0].click();

      // tanda tangan
      // const mentandaTangan = await driver.$('-android uiautomator:new UiSelector().className("android.view.View").instance(3)');

      // Tunggu sampai elemen terlihat dengan timeout yang disesuaikan
      // await mentandaTangan.waitForDisplayed({ timeout: 100000 });

      await driver.action('pointer')
        .move({ duration: 0, x: 355, y: 474 })
        .down({ button: 0 })
        .move({ duration: 1000, x: 1851, y: 474 })
        .up({ button: 0 })
        .perform();



      // simpan tanda tangan
      const SimpanTandatangan = await driver.$$("accessibility id:Simpan");
      await SimpanTandatangan[0].waitForDisplayed({ timeout: 50000 });
      await SimpanTandatangan[0].click();

      const el4 = await driver.$("~Mohon konfirmasi kepada customer service PGN melalui chat WhatsApp jika Anda ingin melakukan pengaliran kembali");
      await el4.waitForDisplayed({ timeout: 50000 });
      await el4.click();

      // simpan dan lanjutkan
      // const SimpandanLanjutkan = await driver.$("//android.view.View[@content-desc='Pengaliran Kembali Simpan dan Lanjutkan']/android.view.View[3]");
      // await SimpandanLanjutkan.waitForDisplayed({ timeout: 50000 });
      // await SimpandanLanjutkan.click();

      // alamat sesuai ktp
      const AlamatSesuaiKtp = await driver.$("//android.widget.ScrollView/android.widget.EditText[1]");
      await AlamatSesuaiKtp.waitForDisplayed({ timeout: 50000 });
      await AlamatSesuaiKtp.click();
      await AlamatSesuaiKtp.addValue("Bandung");

      // const el5 = await driver.$("accessibility id:Ukuran file maksimal 5 MB");
      // await el5.waitForDisplayed({ timeout: 50000 });
      // await el5.click();

      // npwp
      const NPWP = await driver.$("//android.widget.ScrollView/android.widget.EditText[2]");
      await NPWP.waitForDisplayed({ timeout: 50000 });
      await NPWP.click();
      await NPWP.addValue("2222222222222222");

      // simpan dan lanjutkan
      const SIMPAN = await driver.$('//android.view.View[@content-desc="Pengaliran Kembali Kembali Simpan dan Kirim"]/android.view.View[4]');
      await SIMPAN.waitForDisplayed({ timeout: 50000 });
      await SIMPAN.click();

      await driver.deleteSession();


}

// Jalankan fungsi
main().catch(console.log);