var picklePOM = {}
var loginFun = require('../testAssets/loginFun')
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
    //Login and create match
    'Do the radial buttons concurr with the created match?': browser => {
        loginFun(picklePOM, email, password)
        matchFun(picklePOM, 'Test 05', '26', 'Doubles', 'Mixed', 'Five', 'teens')
        matchFun(picklePOM, 'Test 06', '27', 'Singles', 'Mens', 'Open', 'fifty')
  
        //Site stalls with more than two tests in a row.
        // matchFun(picklePOM, 'Test 03', '28', 'Doubles', 'Mixed', 'Senior', 'notApplicable')
        // matchFun(picklePOM, 'Test 04', '40000', 'Singles', 'Womens', 'Five', 'ninetyFive')
    },
    //Add automated testing for realtime verification


}

