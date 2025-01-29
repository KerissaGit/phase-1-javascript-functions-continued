// code your solution here

function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun('I want to bathe my dog');

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(wraps){
    return function(activity){
        return `You are ${wraps}${activity}${wraps}!`
    }
}

const encouragingPromptFunction = wrapAdjective("*")

