function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`)
}

function mondayWork(activity = "go to the office") {
    return (`This Monday, I will ${activity}.`)
}

function wrapAdjective(flair = "*") {
    return function (num1 = "special") {
        return (`You are ${flair}${num1}${flair}!`)
    }
}
