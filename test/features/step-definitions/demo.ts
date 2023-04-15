import { Given,When,Then } from "@wdio/cucumber-framework"
import chai from "chai"


Given("navigate to google page", function () {
    browser.url("http://the-internet.herokuapp.com/checkboxes");
    browser.pause(10000);
    $("(//input[@type='checkbox'])[1]").click();

    chai.expect("").to.equal("")
})