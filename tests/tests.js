var picklePOM = {}
var pickleFun = require('../testAssets/pickleFun')

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

//


}