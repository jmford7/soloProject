var pickleCommands = {

}

module.exports = {
    url: 'https://www.livepickleball.com/#/',
    commands: [pickleCommands],
    elements: {

        //Navigation selectors
        navHome: {
            selector: '//div//nav//a//img',
            locateStrategy: 'xpath'
        }, navAddMatch: {
            selector: '//li//a[contains(text(),"Add Match")]',
            locateStrategy: 'xpath'
        }, navProfile: {
            selector: '//li//a[contains(text(),"Profile")]',
            locateStrategy: 'xpath'
        }, registerLink: {
            selector: '//a[contains(text(),"click here")]',
            locateStrategy: 'xpath'
        },
        //Button selectors
        btnAddMatch: {
            selector: '//button[contains(text(),"Add Match")]',
            locateStrategy: 'xpath'
        }, btnEditProfile: {
            selector: '//button[contains(text(),"Edit Profile")]',
            locateStrategy: 'xpath'
        }, btnLogout: {
            selector: '//button[contains(text(),"Logout")]',
            locateStrategy: 'xpath'
        }, btnLogin: {
            selector: '//button[contains(text(),"Login")]',
            locateStrategy: 'xpath'
        }, btnRegister: {
            selector: '//button[contains(text(),"Register")]',
            locateStrategy: 'xpath'
        }, btnCancel: {
            selector: '//button[contains(text(),"Cancel")]',
            locateStrategy: 'xpath'
        }, btnNext: {
            selector: '//button[contains(text(),"Next")]',
            locateStrategy: 'xpath'
        }, btnStart: {
            selector: '//button[contains(text(),"Start Match")]',
            locateStrategy: 'xpath'
        }, btnRemove: {
            selector: '//small[contains(text(),"Remove")]',
            locateStrategy: 'xpath'
        }, btnComplete: {
            selector: '//button[contains(text(),"Complete")]',
            locateStrategy: 'xpath'
        }, btnNextGame: {
            selector: '//button[contains(text(),"Next Game")]',
            locateStrategy: 'xpath'
        },
        //Match wizard selectors
        tournamentInput: {
            selector: '//input[@placeholder="Tournament Name"]',
            locateStrategy: 'xpath'
        }, courtNumInput: {
            selector: '//input[@placeholder="court number"]',
            locateStrategy: 'xpath'
        },
        //Radial button selectors
        doublesRad: {
            selector: '//input[contains(@value,"Doubles")]',
            locateStrategy: 'xpath'
        }, singlesRad: {
            selector: '//input[contains(@value,"Singles")]',
            locateStrategy: 'xpath'
        }, mensRad: {
            selector: '//input[contains(@value,"Mens")]',
            locateStrategy: 'xpath'
        }, mixedRad: {
            selector: '//input[contains(@value,"Mixed")]',
            locateStrategy: 'xpath'
        }, womensRad: {
            selector: '//input[contains(@value,"Womens")]',
            locateStrategy: 'xpath'
        }, openRad: {
            selector: '//input[contains(@value,"Open/ Pro")]',
            locateStrategy: 'xpath'
        }, seniorRad: {
            selector: '//input[contains(@value,"Sr Open/ Sr Pro")]',
            locateStrategy: 'xpath'
        }, fiveRad: {
            selector: '//input[contains(@value,"5.0")]',
            locateStrategy: 'xpath'
        }, fourHalfRad: {
            selector: '//input[contains(@value,"4.5")]',
            locateStrategy: 'xpath'
        }, fourRad: {
            selector: '//input[contains(@value,"4.0")]',
            locateStrategy: 'xpath'
        }, threeHalfRad: {
            selector: '//input[contains(@value,"3.5")]',
            locateStrategy: 'xpath'
        }, threeRad: {
            selector: '//input[contains(@value,"3.0")]',
            locateStrategy: 'xpath'
        }, twoHalfRad: {
            selector: '//input[contains(@value,"2.5")]',
            locateStrategy: 'xpath'
        }, notApplicableRad: {
            selector: '//input[contains(@value,"n/a")]',
            locateStrategy: 'xpath'
        }, openAgeRad: {
            selector: '//form[4]//label[2]',
            locateStrategy: 'xpath'
        }, seniorRad: {
            selector: '//input[contains(@value,"Senior")]',
            locateStrategy: 'xpath'
        }, teensToThirtyRad: {
            selector: '//input[contains(@value,"19-34")]',
            locateStrategy: 'xpath'
        }, thirtyToFourtyRad: {
            selector: '//input[contains(@value,"35-49")]',
            locateStrategy: 'xpath'
        }, fiftyToFiftyFiveRad: {
            selector: '//input[contains(@value,"50-54")]',
            locateStrategy: 'xpath'
        }, fiftyFiveToSixtyRad: {
            selector: '//input[contains(@value,"55-59")]',
            locateStrategy: 'xpath'
        }, sixtyToSixtyFiveRad: {
            selector: '//input[contains(@value,"60-64")]',
            locateStrategy: 'xpath'
        }, sixtyFiveToSeventyRad: {
            selector: '//input[contains(@value,"65-69")]',
            locateStrategy: 'xpath'
        }, seventyToSeventyFiveRad: {
            selector: '//input[contains(@value,"70-74")]',
            locateStrategy: 'xpath'
        }, seventyFiveToEightyRad: {
            selector: '//input[contains(@value,"75-79")]',
            locateStrategy: 'xpath'
        }, eightyToEightyFiveRad: {
            selector: '//input[contains(@value,"80-84")]',
            locateStrategy: 'xpath'
        }, eightyFiveToNinetyRad: {
            selector: '//input[contains(@value,"85-89")]',
            locateStrategy: 'xpath'
        }, ninetyToNinetyFiveRad: {
            selector: '//input[contains(@value,"90-94")]',
            locateStrategy: 'xpath'
        }, ninetyFivePlusRad: {
            selector: '//input[contains(@value,"95+")]',
            locateStrategy: 'xpath'
        },
        //Add player selectors.
        playerSearch: {
            selector: '//input[contains(@placeholder,"Find Name")]',
            locateStrategy: 'xpath'
        }, playerAdd: {
            selector: '//input[contains(@placeholder,"player name")]',
            locateStrategy: 'xpath'
        },
        //Scorekeeper
        matchBanner: {
            selector: '//div/div/div/div/div/div/span',
            locateStrategy: 'xpath'
        }, courtBanner: {
            selector: '(//p)[1]',
            locateStrategy: 'xpath'
        }, scoreOne: {
            selector: '(//h1)[1]',
            locateStrategy: 'xpath'
        }, scoreTwo: {
            selector: '(//h1)[2]',
            locateStrategy: 'xpath'
        }
    },
}