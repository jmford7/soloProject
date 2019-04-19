var pickleCommands = {} // see testAssets for functions

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
        //Login selectors
        emailInput: {
            selector: '//input[contains(@placeholder,"email")]',
            locateStrategy: 'xpath'
        }, passwordInput: {
            selector: '//input[contains(@placeholder,"password")]',
            locateStrategy: 'xpath'
        }, loginBanner: {
            selector: '//h3[contains(text(),"Login")]',
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
        radDoubles: {
            selector: '//input[contains(@value,"Doubles")]',
            locateStrategy: 'xpath'
        }, radSingles: {
            selector: '//input[contains(@value,"Singles")]',
            locateStrategy: 'xpath'
        }, radMens: {
            selector: '//input[contains(@value,"Mens")]',
            locateStrategy: 'xpath'
        }, radMixed: {
            selector: '//input[contains(@value,"Mixed")]',
            locateStrategy: 'xpath'
        }, radWomens: {
            selector: '//input[contains(@value,"Womens")]',
            locateStrategy: 'xpath'
        }, radOpen: {
            selector: '//input[contains(@value,"Open/ Pro")]',
            locateStrategy: 'xpath'
        }, radSenior: {
            selector: '//input[contains(@value,"Sr Open/ Sr Pro")]',
            locateStrategy: 'xpath'
        }, radFive: {
            selector: '//input[contains(@value,"5.0")]',
            locateStrategy: 'xpath'
        }, radFourHalf: {
            selector: '//input[contains(@value,"4.5")]',
            locateStrategy: 'xpath'
        }, radFour: {
            selector: '//input[contains(@value,"4.0")]',
            locateStrategy: 'xpath'
        }, radThreeHalf: {
            selector: '//input[contains(@value,"3.5")]',
            locateStrategy: 'xpath'
        }, radThree: {
            selector: '//input[contains(@value,"3.0")]',
            locateStrategy: 'xpath'
        }, radTwoHalf: {
            selector: '//input[contains(@value,"2.5")]',
            locateStrategy: 'xpath'
        }, notApplicable: {
            selector: '//input[contains(@value,"n/a")]',
            locateStrategy: 'xpath'
        }, Open: {
            selector: '//form[4]//label[2]',
            locateStrategy: 'xpath'
        }, Senior: {
            selector: '//input[contains(@value,"Senior")]',
            locateStrategy: 'xpath'
        }, teens: {
            selector: '//input[contains(@value,"19-34")]',
            locateStrategy: 'xpath'
        }, thirtyFive: {
            selector: '//input[contains(@value,"35-49")]',
            locateStrategy: 'xpath'
        }, fifty: {
            selector: '//input[contains(@value,"50-54")]',
            locateStrategy: 'xpath'
        }, fiftyFive: {
            selector: '//input[contains(@value,"55-59")]',
            locateStrategy: 'xpath'
        }, sixty: {
            selector: '//input[contains(@value,"60-64")]',
            locateStrategy: 'xpath'
        }, sixtyFive: {
            selector: '//input[contains(@value,"65-69")]',
            locateStrategy: 'xpath'
        }, seventy: {
            selector: '//input[contains(@value,"70-74")]',
            locateStrategy: 'xpath'
        }, seventyFive: {
            selector: '//input[contains(@value,"75-79")]',
            locateStrategy: 'xpath'
        }, eighty: {
            selector: '//input[contains(@value,"80-84")]',
            locateStrategy: 'xpath'
        }, eightyFive: {
            selector: '//input[contains(@value,"85-89")]',
            locateStrategy: 'xpath'
        }, ninety: {
            selector: '//input[contains(@value,"90-94")]',
            locateStrategy: 'xpath'
        }, ninetyFive: {
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
        }, playerList: {
            selector: '//h5',
            locateStrategy: 'xpath'
        },


        //Score keeper
        matchBanner: {
            selector: '//div/div/div/div/div/div/span',
            locateStrategy: 'xpath'
        }, courtBanner: {
            selector: '(//p)[1]',
            locateStrategy: 'xpath'
        }, profileBanner: {
            selector: '//h3', //bad selector need to modify
            locateStrategy: 'xpath'
        }, newMatchBanner: {
            selector: '//h5', //bad selector need to modify
            locateStrategy: 'xpath'
        }, scoreOne: {
            selector: '(//h1)[1]',
            locateStrategy: 'xpath'
        }, scoreTwo: {
            selector: '(//h1)[2]',
            locateStrategy: 'xpath'
        }, fteamMinus: {
            selector: '(//div//div//div[2]//div//div[2]//div[2]//div//i)[1]',
            locateStrategy: 'xpath'
        }, fteamPlus: {
            selector: '(//div//div//div[2]//div//div[2]//div[2]//div//i)[2]',
            locateStrategy: 'xpath'
        }, steamMinus: {
            selector: '(//div//div//div[2]//div//div[3]//div[2]//div//i)[1]',
            locateStrategy: 'xpath'
        }, steamPlus: {
            selector: '(//div//div//div[2]//div//div[3]//div[2]//div//i)[1]',
            locateStrategy: 'xpath'
        }, thanksBanner: {
            selector: '//h3[contains(text(),"Congratulations")]',
            locateStrategy: 'xpath'
        },
    },
}