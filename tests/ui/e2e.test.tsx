import { chromium } from "playwright"

describe("Lillys e2e tests", () => {
  let browser = null, page = null

  beforeAll(async () => {
    browser = await chromium.launch({ headless: false })
    page = await browser.newPage()

    await page.goto("http://localhost:3000/")
  })

  it("Chinese Eggrolls", async () => {
    await page.click("text='Menu'")
    await page.click("#chinese_eggrolls")
    await page.hover("#chinese_eggrolls")
    await page.screenshot({ path: "tests/screenshots/ChineseEggrolls.png" })
  }, 5000)

  it("Contact", async () => {
    await page.click("text='Contact'")
    await page.hover("#mapView")
    await page.screenshot({ path: "tests/screenshots/ContactPage.png" })
  }, 5000)

  it("About", async () => {
    await page.click("text='About'")
    await page.hover("#aboutImage")
    await page.screenshot({ path: "tests/screenshots/AboutPage.png" })
  }, 5000)

  it("Back button ", async () => {
    await page.click("text='About'")
    await page.hover("#aboutImage")
    await page.click(".footer a")
    await page.hover("#carousel")
    await page.screenshot({ path: "tests/screenshots/HomePage.png" })
  }, 5000)

  afterAll(async () => {
    await browser.close()
  })
})