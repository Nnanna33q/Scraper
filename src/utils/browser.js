import puppeteer from "puppeteer";

export const browser = await puppeteer.launch({ headless: false, slowMo: 1000, devtools: true });
export const page = await browser.newPage();