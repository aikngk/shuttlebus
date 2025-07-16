// Bus schedule data and configuration
const busSchedules = {
    "route1": {
        "name": "帝琴灣 → 沙田",
        "weekdays": ["06:15", "06:30", "06:40", "07:00", "07:10", "07:20", "07:35", "07:45", "07:55", "08:10", "08:20", "08:30", "08:45", "09:00", "09:20", "09:40", "10:00", "10:20", "10:40", "11:00", "11:20", "11:40", "12:00", "12:20", "12:40", "13:00", "13:30", "14:00", "14:30", "15:00", "15:20", "15:40", "16:00", "16:15", "16:30", "16:45", "17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45", "20:00", "20:20", "20:40", "21:00", "21:20", "21:40", "22:00", "22:20", "22:40"],
        "weekends": ["06:15", "06:35", "07:00", "07:20", "07:40", "08:00", "08:15", "08:30", "08:45", "09:00", "09:20", "09:40", "10:00", "10:20", "10:40", "11:00", "11:20", "11:40", "12:00", "12:20", "12:40", "13:00", "13:20", "13:40", "14:00", "14:20", "14:40", "15:00", "15:20", "15:40", "16:00", "16:15", "16:30", "16:45", "17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45", "20:00", "20:20", "20:40", "21:00", "21:20", "21:40", "22:00", "22:30"]
    },
    "route2": {
        "name": "沙田 → 帝琴灣",
        "weekdays": ["06:35", "06:50", "07:00", "07:15", "07:25", "07:35", "07:50", "08:00", "08:10", "08:25", "08:35", "08:45", "09:00", "09:15", "09:35", "09:55", "10:15", "10:35", "10:55", "11:15", "11:35", "11:55", "12:15", "12:35", "12:55", "13:15", "13:45", "14:15", "14:45", "15:15", "15:35", "15:55", "16:15", "16:30", "16:45", "17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45", "20:00", "20:15", "20:35", "20:55", "21:15", "21:35", "21:55", "22:15", "22:35", "22:55"],
        "weekends": ["06:35", "06:55", "07:15", "07:35", "07:55", "08:15", "08:30", "08:45", "09:00", "09:15", "09:35", "09:55", "10:15", "10:35", "10:55", "11:15", "11:35", "11:55", "12:15", "12:35", "12:55", "13:15", "13:35", "13:55", "14:15", "14:35", "14:55", "15:15", "15:35", "15:55", "16:15", "16:30", "16:45", "17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45", "20:00", "20:15", "20:35", "20:55", "21:15", "21:35", "21:55", "22:15", "22:45"]
    },
    "route3": {
        "name": "帝琴灣 → 馬鞍山",
        "weekdays": ["06:15", "06:30", "06:40", "07:00", "07:15", "07:20", "07:30", "07:40", "07:50", "08:00", "08:10", "08:20", "08:30", "08:40", "08:50", "09:00", "09:20", "09:40", "10:00", "10:20", "10:40", "11:00", "11:20", "11:40", "12:00", "12:20", "12:40", "13:00", "13:20", "13:40", "14:00", "14:20", "14:40", "15:00", "15:20", "15:40", "16:00", "16:20", "16:40", "17:00", "17:20", "17:40", "18:00", "18:20", "18:40", "19:00", "19:20", "19:40", "20:00", "20:20", "20:40", "21:00", "21:20", "21:40", "22:00", "22:20", "22:40"],
        "weekends": ["06:15", "06:35", "07:00", "07:20", "07:40", "08:00", "08:20", "08:40", "09:00", "09:20", "09:40", "10:00", "10:20", "10:40", "11:00", "11:20", "11:40", "12:00", "12:20", "12:40", "13:00", "13:20", "13:40", "14:00", "14:20", "14:40", "15:00", "15:20", "15:40", "16:00", "16:20", "16:40", "17:00", "17:20", "17:40", "18:00", "18:20", "18:40", "19:00", "19:20", "19:40", "20:00", "20:20", "20:40", "21:00", "21:20", "21:40", "22:00", "22:30"]
    },
    "route4": {
        "name": "馬鞍山 → 帝琴灣",
        "weekdays": ["07:10", "07:22", "07:27", "07:37", "07:47", "07:57", "08:07", "08:17", "08:27", "08:37", "08:47", "08:57", "09:10", "09:30", "09:50", "10:10", "10:30", "10:50", "11:10", "11:30", "11:50", "12:10", "12:30", "12:50", "13:10", "13:30", "13:50", "14:10", "14:30", "14:50", "15:10", "15:30", "15:50", "16:10", "16:30", "16:50", "17:10", "17:30", "17:50", "18:10", "18:30", "18:50", "19:10", "19:30", "19:50", "20:10", "20:30", "20:50", "21:15", "21:35", "21:55", "22:15", "22:45", "23:15"],
        "weekends": ["07:10", "07:30", "07:50", "08:10", "08:30", "08:50", "09:10", "09:30", "09:50", "10:10", "10:30", "10:50", "11:10", "11:30", "11:50", "12:10", "12:30", "12:50", "13:10", "13:30", "13:50", "14:10", "14:30", "14:50", "15:10", "15:30", "15:50", "16:10", "16:30", "16:50", "17:10", "17:30", "17:50", "18:10", "18:30", "18:50", "19:10", "19:30", "19:50", "20:10", "20:30", "20:50", "21:15", "21:35", "21:55", "22:15", "22:45", "23:00"]
    }
};

const hongKongHolidays2025 = [
    "2025-01-01", "2025-01-29", "2025-01-30", "2025-01-31", "2025-04-04", 
    "2025-04-18", "2025-04-19", "2025-04-21", "2025-05-01", "2025-05-05", 
    "2025-05-31", "2025-07-01", "2025-10-01", "2025-10-07", "2025-10-29", 
    "2025-12-25", "2025-12-26"
];

const labels = {
    "mainTitle": "帝琴灣穿梭巴士實時資訊",
    "currentTime": "現在時間",
    "nextBus": "下一班車",
    "publicHoliday": "公眾假期",
    "weekday": "平日",
    "weekend": "週末",
    "holidayStatus": "假期狀態",
    "normalDay": "平日",
    "today": "今天",
    "tomorrow": "明天",
    "scheduleType": "時間表類型"
};

// Utility functions
function getHongKongTime() {
    return new Date().toLocaleString("en-CA", {
        timeZone: "Asia/Hong_Kong",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    });
}

function getHongKongDate() {
    return new Date().toLocaleDateString("en-CA", {
        timeZone: "Asia/Hong_Kong",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });
}

function isHongKongHoliday(date) {
    const dateStr = date.toLocaleDateString("en-CA", {
        timeZone: "Asia/Hong_Kong",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });
    return hongKongHolidays2025.includes(dateStr);
}

function isWeekend(date) {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday = 0, Saturday = 6
}

function isWeekdaySchedule(date) {
    return !isWeekend(date) && !isHongKongHoliday(date);
}

function parseTime(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
}

function formatTime(timeStr) {
    return timeStr;
}

function formatDateTime(dateTimeStr) {
    const [datePart, timePart] = dateTimeStr.split(', ');
    const [year, month, day] = datePart.split('-');
    const [hour, minute, second] = timePart.split(':');
    
    return `${year}年${month}月${day}日 ${hour}:${minute}:${second}`;
}

function getNextBusTime(routeId, currentTime) {
    const route = busSchedules[routeId];
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    
    const isWeekday = isWeekdaySchedule(now);
    const schedule = isWeekday ? route.weekdays : route.weekends;
    
    // Find next bus today
    for (const timeStr of schedule) {
        const busMinutes = parseTime(timeStr);
        if (busMinutes > currentMinutes) {
            return {
                time: formatTime(timeStr),
                isNextDay: false,
                scheduleType: isWeekday ? 'weekday' : 'weekend'
            };
        }
    }
    
    // No more buses today, get first bus tomorrow
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowIsWeekday = isWeekdaySchedule(tomorrow);
    const tomorrowSchedule = tomorrowIsWeekday ? route.weekdays : route.weekends;
    
    if (tomorrowSchedule.length > 0) {
        return {
            time: `明天 ${formatTime(tomorrowSchedule[0])}`,
            isNextDay: true,
            scheduleType: tomorrowIsWeekday ? 'weekday' : 'weekend'
        };
    }
    
    return {
        time: '暫無班次',
        isNextDay: false,
        scheduleType: isWeekday ? 'weekday' : 'weekend'
    };
}

function updateDisplay() {
    const now = new Date();
    const hongKongTime = getHongKongTime();
    const isHoliday = isHongKongHoliday(now);
    const isWeekday = isWeekdaySchedule(now);
    
    // Update current time
    const currentTimeElement = document.getElementById('currentTime');
    if (currentTimeElement) {
        const formattedTime = formatDateTime(hongKongTime);
        currentTimeElement.textContent = formattedTime;
        currentTimeElement.classList.add('time-update');
        setTimeout(() => currentTimeElement.classList.remove('time-update'), 300);
    }
    
    // Update holiday status
    const holidayStatusElement = document.getElementById('holidayStatus');
    if (holidayStatusElement) {
        if (isHoliday) {
            holidayStatusElement.textContent = labels.publicHoliday;
            holidayStatusElement.className = 'status-display holiday';
        } else {
            holidayStatusElement.textContent = labels.normalDay;
            holidayStatusElement.className = 'status-display normal';
        }
    }
    
    // Update bus times for each route
    ['route1', 'route2', 'route3', 'route4'].forEach((routeId, index) => {
        const routeNumber = index + 1;
        const nextBusInfo = getNextBusTime(routeId, hongKongTime);
        
        // Update next bus time
        const nextBusElement = document.getElementById(`nextBus${routeNumber}`);
        if (nextBusElement) {
            nextBusElement.textContent = nextBusInfo.time;
            nextBusElement.classList.remove('next-day', 'urgent', 'loading');
            
            if (nextBusInfo.isNextDay) {
                nextBusElement.classList.add('next-day');
            } else if (nextBusInfo.time !== '暫無班次') {
                // Check if bus is coming soon (within 10 minutes)
                const busTime = parseTime(nextBusInfo.time);
                const currentMinutes = now.getHours() * 60 + now.getMinutes();
                const timeDiff = busTime - currentMinutes;
                
                if (timeDiff <= 10 && timeDiff > 0) {
                    nextBusElement.classList.add('urgent');
                }
            }
        }
        
        // Update schedule type indicator
        const scheduleTypeElement = document.getElementById(`scheduleType${routeNumber}`);
        if (scheduleTypeElement) {
            scheduleTypeElement.textContent = nextBusInfo.scheduleType === 'weekday' ? labels.weekday : labels.weekend;
            scheduleTypeElement.className = `schedule-indicator ${nextBusInfo.scheduleType}`;
        }
    });
    
    // Update last update time
    const lastUpdateElement = document.getElementById('lastUpdate');
    if (lastUpdateElement) {
        lastUpdateElement.textContent = formatDateTime(hongKongTime);
    }
}

// Initialize the dashboard
function initializeDashboard() {
    // Remove loading classes
    document.querySelectorAll('.next-bus-time').forEach(element => {
        element.classList.remove('loading');
    });
    
    // Initial update
    updateDisplay();
    
    // Set up interval to update every second
    setInterval(updateDisplay, 1000);
}

// Error handling
function handleError(error) {
    console.error('Dashboard error:', error);
    
    // Show error message to user
    document.querySelectorAll('.next-bus-time').forEach(element => {
        element.textContent = '系統錯誤';
        element.classList.add('loading');
    });
}

// Start the dashboard when page loads
document.addEventListener('DOMContentLoaded', function() {
    try {
        initializeDashboard();
    } catch (error) {
        handleError(error);
    }
});

// Handle page visibility changes (optimize when tab is not visible)
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Page is hidden, could reduce update frequency
        console.log('Dashboard hidden');
    } else {
        // Page is visible, ensure immediate update
        console.log('Dashboard visible');
        updateDisplay();
    }
});

// Add some visual feedback for user interactions
document.querySelectorAll('.route-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-2px)';
    });
});

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getNextBusTime,
        isHongKongHoliday,
        isWeekdaySchedule,
        parseTime,
        formatTime
    };
}