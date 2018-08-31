import Vue from 'vue'
import { distanceInWordsToNow } from 'date-fns'
import { parse } from 'url'

Vue.filter('timeSince', timestamp => {
    const time = timestamp.slice(-9, -1)
    return time
})
Vue.filter('day', daystamp => {
    const date = daystamp.slice(1, 10)
    return date
})

Vue.filter('hostname', url => parse(url).hostname.replace(/^www\./, ''))