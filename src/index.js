import dotenv from 'dotenv';
dotenv.config();
import { browser, page } from './utils/browser.js';
import scrape from './utils/scrape.js';

await page.goto(`https://www.instagram.com/salsamanthaa`);

try {
    let numOfFollowers = await page.evaluate(async () => {
        const elem = document.querySelector('#mount_0_0_J8 > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div:nth-child(2) > div > div.xvc5jky.xh8yej3.x10o80wk.x14k21rp.x17snn68.x6osk4m.x1porb0y.x8vgawa > section > main > div > header > section.xc3tme8.x1xdureb.x18wylqe.x13vxnyz.xvxrpd7 > ul > li:nth-child(2) > div > a > span > span > span');
        return elem ? elem.textContent : null;
    })

    if(numOfFollowers !== null) {
        // Main logic. Should be abstracted away into a function
        console.log('Puppeteer is authenticated');
        scrape(Number(numOfFollowers));
        process.exit(0)
    }

    // Authenticate puppeteer
    console.log('Puppeteer is trying to authenticate');
    await page.goto('https://instagram.com');
    console.log('Navigated to login page')
    await page.type('#loginForm > div.x9f619.xjbqb8w.x78zum5.x15mokao.x1ga7v0g.x16uus16.xbiv7yw.xqui205.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1 > div:nth-child(1) > div > label > input', process.env.USERNAME, { delay: 500 });
    console.log('Filled username field');
    await page.type('#loginForm > div.x9f619.xjbqb8w.x78zum5.x15mokao.x1ga7v0g.x16uus16.xbiv7yw.xqui205.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1 > div:nth-child(2) > div > label > input', process.env.PASSWORD, { delay: 500 });
    console.log('Filled password field');
    await page.evaluate(() => {
        document.querySelector('#loginForm > div.x9f619.xjbqb8w.x78zum5.x15mokao.x1ga7v0g.x16uus16.xbiv7yw.xqui205.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1 > div:nth-child(3) > button').click()
    })
    console.log('Clicked login button');
    await page.waitForNavigation();
    await page.goto('https://www.instagram.com/salsamanthaa');
    console.log('User is now authenticted');
    const elem = await page.evaluate(() => {
        return document.querySelector('#mount_0_0_J8 > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div:nth-child(2) > div > div.xvc5jky.xh8yej3.x10o80wk.x14k21rp.x17snn68.x6osk4m.x1porb0y.x8vgawa > section > main > div > header > section.xc3tme8.x1xdureb.x18wylqe.x13vxnyz.xvxrpd7 > ul > li:nth-child(2) > div > a > span > span > span');
    })
    scrape(Number(elem.textContent));

} catch(error) {
    console.log(error);
    page.close();
}