var picklePOM = {}
var loginFun = require('../testAssets/loginFun')
var logoutFun = require('../testAssets/logoutFun')
var matchFun = require('../testAssets/matchFun')
var email = 'TestingBob@blah.com'
var password = 'Trial123'

module.exports = {
    beforeEach: browser => {
        picklePOM = browser.page.picklePOM()
        picklePOM.navigate()
            .waitForElementPresent('#root', 5000)
    },
    after: browser => {
        picklePOM.end()
    },

    //Login/logout through multiple places
    'Logging in': browser => {
        loginFun(picklePOM, '@navProfile', email, password, '@profileBanner', 'welcome Bob')
        logoutFun(picklePOM)
        loginFun(picklePOM, '@navAddMatch', email, password, '@newMatchBanner', 'New Match')
        logoutFun(picklePOM)
        loginFun(picklePOM, '@btnAddMatch', email, password, '@newMatchBanner', 'New Match')
        logoutFun(picklePOM)
        //need to add logging in through messages
    },

    // Login and create match
    'Do the radial buttons concurr with the created match?': browser => {
        loginFun(picklePOM, '@navProfile', email, password,'@profileBanner', 'welcome Bob')
        matchFun(picklePOM, 'Test 42', '9001', 'Doubles', 'Mixed', 'Five', 'teens')
        matchFun(picklePOM, 'Test 75', '8999', 'Singles', 'Mens', 'Open', 'fifty')

    // Site stalls with more than two tests in a row.
    // matchFun(picklePOM, 'Test 03', '28', 'Doubles', 'Mixed', 'Senior', 'notApplicable')
    // matchFun(picklePOM, 'Test 04', '40000', 'Singles', 'Womens', 'Five', 'ninetyFive')
    },
    //Add automated testing for realtime verification
}

