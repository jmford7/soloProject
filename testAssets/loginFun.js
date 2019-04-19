module.exports = (loginFun, email, password) => {
    loginFun
        .click('@navProfile')
        .waitForElementPresent('@btnLogin')
        .click('@btnLogin')
        .assert.visible('@loginBanner')
        .setValue('@emailInput', email)
        .setValue('@passwordInput', password)
        .click('@btnLogin')
        .pause(2000)
        .assert.containsText('@profileBanner', 'welcome ');
    return loginFun
}