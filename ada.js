import { remote } from 'webdriverio';

async function runTest() {
    // Konfigurasi Appium
    const driver = await remote({
        path: '/wd/hub',
        port: 4725, // Sesuaikan port dengan pengaturan server Appium Anda
        capabilities: {
            platformName: 'Android',
            platformVersion: '13.0', // Sesuaikan versi Android
            deviceName: 'android13', // Sesuaikan nama device
            automationName: 'UiAutomator2',
            app: 'C:/Users/Neuron NB-129/Downloads/STAGGINGDEBUGPGNMobile_v1_0_5_build11_update206_September_2024.apk' // Path ke APK Anda
        }
    });

    try {
        // Menemukan dan klik tombol "Catat Meter Mandiri"
        const catatMeterButton = await driver.$('android=new UiSelector().description("Catat Meter Mandiri")');
        await catatMeterButton.click();

        // Menemukan dan klik tombol "Selanjutnya"
        const selanjutnyaButton1 = await driver.$('android=new UiSelector().description("Selanjutnya")');
        await selanjutnyaButton1.click();

        // Menemukan dan klik opsi "Tentukan Tanggal Pencatatan Nanti Saja, Masuk Ke Halaman Utama"
        const tentukanTanggalButton = await driver.$('android=new UiSelector().description("Tentukan Tanggal Pencatatan Nanti Saja, Masuk Ke Halaman Utama")');
        await tentukanTanggalButton.click();

        // Menemukan dan pilih tanggal "18"
        const tanggal18 = await driver.$('android=new UiSelector().description("18")');
        await tanggal18.click();

        // Menemukan dan klik tombol "Selanjutnya" lagi
        const selanjutnyaButton2 = await driver.$('android=new UiSelector().description("Selanjutnya")');
        await selanjutnyaButton2.click();

        // Menemukan dan klik tombol "Lanjut ke Halaman Catat Meter Mandiri"
        const lanjutButton = await driver.$('android=new UiSelector().description("Lanjut ke Halaman Catat Meter Mandiri")');
        await lanjutButton.click();

    } catch (error) {
        console.error("Error during test:", error);
    } finally {
        // Menghentikan sesi Appium
        await driver.deleteSession();
    }
}

// Jalankan fungsi
runTest();