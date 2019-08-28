const moment = require('moment');
const timediff = (date)=> {
    let givenDate = new Date(date);
    let currDate = new Date();

    let gYear = givenDate.getFullYear();
    let gMonth = givenDate.getMonth();
    let gDate = givenDate.getDate();
    let gHour = givenDate.getHours();
    let gMin = givenDate.getMinutes();
    let gSec = givenDate.getSeconds();

    let cYear = currDate.getFullYear();
    let cMonth = currDate.getMonth();
    let cDate = currDate.getDate();
    let cHour = currDate.getHours();
    let cMin = currDate.getMinutes();
    let cSec = currDate.getSeconds();

    if(cYear != gYear){
        return moment(givenDate).format('DD MMM YYYY @ LT');
    }
    else{
        if(cMonth != gMonth){
            return moment(givenDate).format('DD MMM @ LT');
        }
        else{
            if(cDate != gDate){
                return moment(givenDate).format('DD MMM @ LT');
            }
            else{
                if(cHour != gHour){
                    let diff = cHour - gHour;
                    if(diff == 1){
                        diff += ' hour ago';
                    }
                    else{
                        diff += ' hours ago';
                    }
                    return diff;
                }
                else{
                    if(cMin != gMin){
                        let diff = cMin - gMin;
                        if(diff == 1){
                            diff += ' minute ago';
                        }
                        else{
                            diff += ' minutes ago';
                        }
                        return diff;
                    }
                    else{
                        if(cSec != gSec){
                            let diff = cSec - gSec;
                            if(diff == 1){
                                diff += ' second ago';
                            }
                            else{
                                diff += ' seconds ago';
                            }
                            return diff;
                        }
                    }
                }
            }
        }
    }
}

module.exports = timediff;