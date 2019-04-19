module.exports = (logoutFun) => {
    logoutFun
        .click('@navProfile')
        .assert.visible('@profileBanner', 'welcome ')
        .click('@btnLogout')
        .waitForElementNotPresent('@btnLogout', 5000)
    return logoutFun
}
