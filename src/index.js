import dotenv from 'dotenv';
dotenv.config();
import { browser, page } from './utils/browser';
import scrape from './utils/scrape';

await page.goto(`https://www.instagram.com/salsamanthaa`);

try {
    let numOfFollowers = await page.evaluate(async () => {
        const elem = document.querySelector('#mount_0_0_J8 > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div:nth-child(2) > div > div.xvc5jky.xh8yej3.x10o80wk.x14k21rp.x17snn68.x6osk4m.x1porb0y.x8vgawa > section > main > div > header > section.xc3tme8.x1xdureb.x18wylqe.x13vxnyz.xvxrpd7 > ul > li:nth-child(2) > div > a > span > span > span');
        return elem.textContent
    })

    if(numOfFollowers !== null) {
        // Main logic. Should be abstracted away into a function
        scrape()
    }

    // Authenticate puppeteer
    await page.locator('#mount_0_0_il > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div:nth-child(2) > div > div.x10o80wk.x14k21rp.xh8yej3.x8vgawa > section > div > div > div._acuq._acur > div > div > div > div:nth-child(1) > a').click();
    await page.type('//*[@id="loginForm"]/div[1]/div[1]/div/label/input', process.env.USERNAME, { delay: 500 });
    await page.type('//*[@id="loginForm"]/div[1]/div[2]/div/label/input', process.env.PASSWORD, { delay: 500 });
    await page.locator('//*[@id="loginForm"]/div[1]/div[3]/button/div').click();

    scrape();

} catch(error) {
    console.log(error);
    page.close();
}