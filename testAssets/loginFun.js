module.exports = (loginFun, location, email, password, assertThat, pickleValue) => {
    loginFun
        .click(location)
        .waitForElementPresent('@btnLogin', 5000)
        .setValue('@emailInput', email)
        .setValue('@passwordInput', password)
        .click('@btnLogin')
        .pause(2000)
     .assert.containsText(assertThat, pickleValue);
    return loginFun
}