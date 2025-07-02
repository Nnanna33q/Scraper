import { page } from './browser.js';
const usernameMap = new Map();

export default async function scrape(numOfFollowers) {
    try {
        console.log('Ready for scraping');
        console.log(numOfFollowers);
        for (let i = 0; i < numOfFollowers; i++) {
            await page.locator('//*[@id="mount_0_0_0u"]/div/div/div[2]/div/div/div[1]/div[2]/div/div[1]/section/main/div/header/section[3]/ul/li[2]/div/a/span/span/span').click();
            console.log('Clicked followers btn');
            const username = await page.evaluate(() => {
                const followersContainer = document.querySelector('body > div.x1n2onr6.xzkaem6 > div:nth-child(2) > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div.x7r02ix.x1bphaa0.x18nydb4.xcm95gh.x1vsb9q8.xb88tzc.xw2csxc.x1odjw0f.x5fp0pe > div > div > div.x6nl9eh.x1a5l9x9.x7vuprf.x1mg3h75.x1lliihq.x1iyjqo2.xs83m0k.xz65tgg.x1rife3k.x1n2onr6 > div:nth-child(1) > div');
                return followersContainer.children[i].querySelector('body > div.x1n2onr6.xzkaem6 > div:nth-child(2) > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div.x7r02ix.x1bphaa0.x18nydb4.xcm95gh.x1vsb9q8.xb88tzc.xw2csxc.x1odjw0f.x5fp0pe > div > div > div.x6nl9eh.x1a5l9x9.x7vuprf.x1mg3h75.x1lliihq.x1iyjqo2.xs83m0k.xz65tgg.x1rife3k.x1n2onr6 > div:nth-child(1) > div > div:nth-child(1) > div > div > div > div.x9f619.x1ja2u2z.x78zum5.x1n2onr6.x1iyjqo2.xs83m0k.xeuugli.x1qughib.x6s0dn4.x1a02dak.x1q0g3np.xdl72j9 > div > div > div > div > span > div > a > div > div > span').textContent;
            })
            if(!usernameMap.get(username)) {
                // New username scrape bio
                await page.locator('body > div.x1n2onr6.xzkaem6 > div:nth-child(2) > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div.x7r02ix.x1bphaa0.x18nydb4.xcm95gh.x1vsb9q8.xb88tzc.xw2csxc.x1odjw0f.x5fp0pe > div > div > div.x6nl9eh.x1a5l9x9.x7vuprf.x1mg3h75.x1lliihq.x1iyjqo2.xs83m0k.xz65tgg.x1rife3k.x1n2onr6 > div:nth-child(1) > div > div:nth-child(1) > div > div > div > div.x9f619.x1ja2u2z.x78zum5.x1n2onr6.x1iyjqo2.xs83m0k.xeuugli.x1qughib.x6s0dn4.x1a02dak.x1q0g3np.xdl72j9 > div > div > div > div > span > div > a > div > div > span').click();
                const bio = await page.evaluate(() => {
                    return document.querySelector('#mount_0_0_SG > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div:nth-child(2) > div > div.xvc5jky.xh8yej3.x10o80wk.x14k21rp.x17snn68.x6osk4m.x1porb0y.x8vgawa > section > main > div > header > section.xc3tme8.x1xdureb.x18wylqe.x1vnunu7.x1iom2gc.x172qv1o.x1jfgfrl.x69nqbv.x2wt2w.x6ikm8r.x10wlt62 > div > span > div > span')?.textContent();
                })
                // Check if bio contains an email. then store username in map
            }
        }

    } catch (error) {
        console.error(error);
    }
}