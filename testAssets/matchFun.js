module.exports = (matchFun, tourney, court, numPlayers, gender, skill, age) => {
    matchFun
        //set wizard   
        .click('@navAddMatch')
        .waitForElementVisible('@newMatchBanner', 25000)
        .verify.containsText('@newMatchBanner', 'New Match')
        .setValue('@tournamentInput', tourney)
        .clearValue('@courtNumInput')
        .setValue('@courtNumInput', court)
        .click('@rad' + numPlayers)
        .click('@rad' + gender)
        .click('@rad' + skill)
        .click('@' + age)
        .click('@btnNext')
    //select players
    setPlayers(matchFun, numPlayers) //need to add ability to select different people from the list.
        .click('@btnStart')
        //verify match card details
        .assert.containsText('@matchBanner', gender)
        .assert.containsText('@matchBanner', numPlayers)
        .assert.containsText('@courtBanner', court)
        .assert.containsText('@matchBanner', getValueSkill(skill))
        .assert.containsText('@matchBanner', getValueAge(age))
        // need to automate scoring functionality
        .pause(2000)
        .click('@btnComplete')
        .waitForElementVisible('@thanksBanner', 5000)
    return matchFun
}

function getValueSkill(skill) {
    if (skill == 'Open') {
        return 'Open/ Pro';
    } else if (skill == 'Senior') {
        return 'Sr Open/ Sr Pro';
    } else if (skill == 'Five') {
        return '5.0';
    } else if (skill == 'FourHalf') {
        return '4.5';
    } else if (skill == 'Four') {
        return '4.0';
    } else if (skill == 'ThreeHalf') {
        return '3.5';
    } else if (skill == 'Three') {
        return '3.0';
    } else if (skill == 'TwoHalf') {
        return '2.5';
    }
}

function getValueAge(age) {
    if (age == 'notApplicable') {
        return 'N/A';
    } else if (age == 'Senior') {
        return 'Senior Open';
    } else if (age == 'teens') {
        return '19-34';
    } else if (age == 'thirtyFive') {
        return '35-49';
    } else if (age == 'fifty') {
        return '50-54';
    } else if (age == 'fiftyFive') {
        return '55-59';
    } else if (age == 'sixty') {
        return '60-64';
    } else if (age == 'sixtyFive') {
        return '65-69';
    } else if (age == 'seventy') {
        return '70-74';
    } else if (age == 'seventyFive') {
        return '75-79';
    } else if (age == 'eighty') {
        return '80-84';
    } else if (age == 'eightyFive') {
        return '84-89';
    } else if (age == 'ninety') {
        return '90-94';
    } else if (age == 'ninetyFive') {
        return '95+';
    }
}

function setPlayers(matchFun, numPlayers) {

    var gameTypes = {
        "Doubles": 4,
        "Singles": 2
    }
    for (i = 0; i < gameTypes[numPlayers]; i++) {
        matchFun
            .setValue('@playerSearch', 'Ju')
            .waitForElementVisible('@playerList', 25000)
            .click('@playerList')
    }
    return matchFun
}