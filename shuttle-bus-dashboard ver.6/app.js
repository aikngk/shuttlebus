// Application data
const holidayData = [
    {"date": "2025-01-01", "name": "元旦"},
    {"date": "2025-01-29", "name": "農曆年初一"},
    {"date": "2025-01-30", "name": "農曆年初二"},
    {"date": "2025-01-31", "name": "農曆年初三"},
    {"date": "2025-04-04", "name": "清明節"},
    {"date": "2025-04-18", "name": "耶穌受難節"},
    {"date": "2025-04-19", "name": "耶穌受難節翌日"},
    {"date": "2025-04-21", "name": "復活節星期一"},
    {"date": "2025-05-01", "name": "勞動節"},
    {"date": "2025-05-05", "name": "佛誕"},
    {"date": "2025-05-31", "name": "端午節"},
    {"date": "2025-07-01", "name": "香港特別行政區成立紀念日"},
    {"date": "2025-10-01", "name": "國慶日"},
    {"date": "2025-10-07", "name": "中秋節翌日"},
    {"date": "2025-10-29", "name": "重陽節"},
    {"date": "2025-12-25", "name": "聖誕節"},
    {"date": "2025-12-26", "name": "聖誕節後第一個周日"}
];

const scheduleData = {
    "route1": {
        "name": "凱弦居 → 新城市廣場",
        "weekday": ["06:15", "06:30", "06:40", "07:00", "07:10", "07:20", "07:35", "07:45", "07:55", "08:10", "08:20", "08:30", "08:45", "09:00", "09:20", "09:40", "10:00", "10:20", "10:40", "11:00", "11:20", "11:40", "12:00", "12:20", "12:40", "13:00", "13:30", "14:00", "14:30", "15:00", "15:20", "15:40", "16:00", "16:15", "16:30", "16:45", "17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45", "20:00", "20:20", "20:40", "21:00", "21:20", "21:40", "22:00", "22:20", "22:40"],
        "weekend": ["06:15", "06:35", "07:00", "07:20", "07:40", "08:00", "08:15", "08:30", "08:45", "09:00", "09:20", "09:40", "10:00", "10:20", "10:40", "11:00", "11:20", "11:40", "12:00", "12:20", "12:40", "13:00", "13:20", "13:40", "14:00", "14:20", "14:40", "15:00", "15:20", "15:40", "16:00", "16:15", "16:30", "16:45", "17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "20:00", "20:20", "20:40", "21:00", "21:20", "21:40", "22:10", "22:40"],
        "group": "newtown"
    },
    "route2": {
        "name": "新城市廣場 → 凱弦居",
        "weekday": ["06:35", "06:50", "07:00", "07:15", "07:25", "07:35", "07:50", "08:00", "08:10", "08:25", "08:35", "08:45", "09:00", "09:35", "09:55", "10:15", "10:35", "10:55", "11:15", "11:35", "11:55", "12:15", "12:35", "12:55", "13:15", "13:45", "14:20", "14:45", "15:20", "15:35", "15:55", "16:15", "16:30", "16:45", "17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "20:15", "20:40", "21:00", "21:20", "21:40", "22:00", "22:30", "23:00"],
        "weekend": ["06:35", "06:55", "07:15", "07:35", "07:55", "08:15", "08:30", "08:45", "09:00", "09:15", "09:35", "09:55", "10:15", "10:35", "10:55", "11:15", "11:35", "11:55", "12:15", "12:35", "12:55", "13:15", "13:35", "13:55", "14:15", "14:35", "14:55", "15:15", "15:35", "15:55", "16:15", "16:30", "16:45", "17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45", "20:00", "20:15", "20:35", "21:00", "21:20", "21:40", "22:00", "22:30", "23:00"],
        "group": "newtown"
    },
    "route3": {
        "name": "凱琴居 → 新港城",
        "weekday": ["06:15", "06:30", "06:40", "07:00", "07:15", "07:20", "07:30", "07:40", "07:50", "08:00", "08:10", "08:20", "08:30", "08:40", "08:50", "09:00", "09:20", "09:40", "10:00", "10:20", "10:40", "11:00", "11:20", "11:40", "12:00", "12:20", "12:40", "13:00", "13:20", "13:40", "14:00", "14:20", "14:40", "15:00", "15:20", "15:40", "16:00", "16:20", "16:40", "17:00", "17:20", "17:40", "18:00", "18:20", "18:40", "19:00", "19:20", "19:40", "20:00", "20:20", "20:40", "21:00", "21:20", "21:40", "22:10", "22:40"],
        "weekend": ["06:15", "06:35", "07:00", "07:20", "07:40", "08:00", "08:20", "08:40", "09:00", "09:20", "09:40", "10:00", "10:20", "10:40", "11:00", "11:20", "11:40", "12:00", "12:20", "12:40", "13:00", "13:20", "13:40", "14:00", "14:20", "14:40", "15:00", "15:20", "15:40", "16:00", "16:20", "16:40", "17:00", "17:20", "17:40", "18:00", "18:20", "18:40", "19:00", "19:20", "19:40", "20:00", "20:20", "20:40", "21:00", "21:20", "21:40", "22:10", "22:40"],
        "group": "sunshine"
    },
    "route4": {
        "name": "新港城 → 凱琴居",
        "weekday": ["07:10", "07:22", "07:27", "07:37", "07:47", "07:57", "08:07", "08:17", "08:27", "08:37", "08:47", "08:57", "09:10", "09:30", "09:50", "10:10", "10:30", "10:50", "11:10", "11:30", "11:50", "12:10", "12:30", "12:50", "13:10", "13:30", "13:50", "14:00", "14:30", "14:50", "15:00", "15:30", "15:50", "16:10", "16:30", "16:50", "17:10", "17:30", "17:50", "18:10", "18:30", "18:50", "19:10", "19:30", "19:50", "20:10", "20:15", "20:30", "20:55", "21:15", "21:35", "21:55", "22:15", "22:45", "23:15"],
        "weekend": ["07:10", "07:30", "07:50", "08:10", "08:30", "08:50", "09:10", "09:30", "09:50", "10:10", "10:30", "10:50", "11:10", "11:30", "11:50", "12:10", "12:30", "12:50", "13:10", "13:30", "13:50", "14:10", "14:30", "14:50", "15:10", "15:30", "15:50", "16:10", "16:30", "16:50", "17:10", "17:30", "17:50", "18:10", "18:30", "18:50", "19:10", "19:30", "19:50", "20:10", "20:30", "20:50", "21:15", "21:35", "21:55", "22:15", "22:45", "23:15"],
        "group": "sunshine"
    }
};

// Utility functions
function getHongKongTime() {
    const now = new Date();
    const hongKongTime = new Date(now.getTime() + (8 * 60 * 60 * 1000) + (now.getTimezoneOffset() * 60 * 1000));
    return hongKongTime;
}

function formatTime(date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const dayNames = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const dayName = dayNames[date.getDay()];
    return `${year}年${month}月${day}日 ${dayName}`;
}

function isHoliday(date) {
    const dateStr = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    return holidayData.find(holiday => holiday.date === dateStr);
}

function isWeekend(date) {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday = 0, Saturday = 6
}

function shouldUseWeekendSchedule(date) {
    return isWeekend(date) || isHoliday(date);
}

function timeToMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
}

function minutesToTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
}

function findNextBuses(routeId, currentTime) {
    const route = scheduleData[routeId];
    const useWeekendSchedule = shouldUseWeekendSchedule(currentTime);
    const schedule = useWeekendSchedule ? route.weekend : route.weekday;
    
    const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
    
    const futureBuses = schedule
        .map(time => timeToMinutes(time))
        .filter(minutes => minutes > currentMinutes)
        .sort((a, b) => a - b);
    
    return futureBuses;
}

function calculateMinutesUntil(currentTime, busTime) {
    const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
    const busMinutes = timeToMinutes(busTime);
    return busMinutes - currentMinutes;
}

function updateDisplay() {
    const now = getHongKongTime();
    
    // Update header
    document.getElementById('currentTime').textContent = formatTime(now);
    document.getElementById('currentDate').textContent = formatDate(now);
    
    // Update holiday status
    const holidayStatusElement = document.getElementById('holidayStatus');
    const holiday = isHoliday(now);
    const isWeekendDay = isWeekend(now);
    
    if (holiday) {
        holidayStatusElement.textContent = `今日是公眾假期 (${holiday.name})`;
        holidayStatusElement.className = 'holiday-status holiday';
    } else if (isWeekendDay) {
        holidayStatusElement.textContent = '今日是週末';
        holidayStatusElement.className = 'holiday-status holiday';
    } else {
        holidayStatusElement.textContent = '今日是工作日';
        holidayStatusElement.className = 'holiday-status weekday';
    }
    
    // Update route information
    Object.keys(scheduleData).forEach(routeId => {
        const nextBuses = findNextBuses(routeId, now);
        
        // Update current time for each route
        document.getElementById(`${routeId}-current`).textContent = formatTime(now);
        
        const nextElement = document.getElementById(`${routeId}-next`);
        const afterElement = document.getElementById(`${routeId}-after`);
        const minutesElement = document.getElementById(`${routeId}-minutes`);
        
        if (nextBuses.length === 0) {
            nextElement.textContent = '今日尾班車已開出';
            nextElement.className = 'no-more-buses';
            afterElement.textContent = '--';
            minutesElement.textContent = '--';
        } else {
            const nextBusTime = minutesToTime(nextBuses[0]);
            const minutesUntil = calculateMinutesUntil(now, nextBusTime);
            
            nextElement.textContent = nextBusTime;
            nextElement.className = '';
            
            if (minutesUntil <= 1) {
                minutesElement.textContent = '即將開出';
                minutesElement.className = 'route-card__minutes urgent';
            } else if (minutesUntil <= 5) {
                minutesElement.textContent = `${minutesUntil}分鐘後`;
                minutesElement.className = 'route-card__minutes urgent';
            } else if (minutesUntil <= 10) {
                minutesElement.textContent = `${minutesUntil}分鐘後`;
                minutesElement.className = 'route-card__minutes soon';
            } else {
                minutesElement.textContent = `${minutesUntil}分鐘後`;
                minutesElement.className = 'route-card__minutes';
            }
            
            if (nextBuses.length > 1) {
                afterElement.textContent = minutesToTime(nextBuses[1]);
            } else {
                afterElement.textContent = '--';
            }
        }
    });
    
    // Apply weekend/holiday text coloring
    const shouldShowRed = isWeekendDay || holiday;
    const textElements = document.querySelectorAll('.current-time, .current-date, .route-card__current-time span, .route-card__next span, .route-card__after span');
    
    textElements.forEach(element => {
        if (shouldShowRed) {
            element.classList.add('weekend-holiday');
            element.classList.remove('weekday-text');
        } else {
            element.classList.add('weekday-text');
            element.classList.remove('weekend-holiday');
        }
    });
}

// Initialize the application
function init() {
    // Update display immediately
    updateDisplay();
    
    // Update every minute (60 seconds)
    setInterval(updateDisplay, 60000);
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);