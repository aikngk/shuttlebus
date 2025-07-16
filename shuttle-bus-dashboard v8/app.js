// Hong Kong holidays for 2025
const hongKongHolidays2025 = [
    "2025-01-01", "2025-01-29", "2025-01-30", "2025-01-31",
    "2025-04-04", "2025-04-18", "2025-04-19", "2025-04-21",
    "2025-05-01", "2025-05-05", "2025-05-31", "2025-07-01",
    "2025-10-01", "2025-10-07", "2025-10-29", "2025-12-25", "2025-12-26"
];

// Bus schedules data
const busSchedules = {
    route1: {
        name_tc: "由凱弦居經凱琪居往新城市廣場",
        group: "新城市廣場路線",
        color: "blue",
        weekday: ["06:15", "06:30", "06:40", "07:00", "07:10", "07:20", "07:35", "07:45", "07:55", "08:10", "08:20", "08:30", "08:45", "09:00", "09:20", "09:40", "10:00", "10:20", "10:40", "11:00", "11:20", "11:40", "12:00", "12:20", "12:40", "13:00", "13:30", "14:00", "14:30", "15:00", "15:20", "15:40", "16:00", "16:15", "16:30", "16:45", "17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45", "20:00", "20:20", "20:40", "21:00", "21:20", "21:40", "22:00", "22:20", "22:40"],
        weekend: ["06:15", "06:35", "07:00", "07:20", "07:40", "08:00", "08:15", "08:30", "08:45", "09:00", "09:20", "09:40", "10:00", "10:20", "10:40", "11:00", "11:20", "11:40", "12:00", "12:20", "12:40", "13:00", "13:20", "13:40", "14:00", "14:20", "14:40", "15:00", "15:20", "15:40", "16:00", "16:15", "16:30", "16:45", "17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45", "20:00", "20:20", "20:40", "21:00", "21:20", "21:40", "22:10", "22:40"]
    },
    route2: {
        name_tc: "由新城市廣場經凱琪居往凱弦居",
        group: "新城市廣場路線",
        color: "blue",
        weekday: ["06:35", "06:50", "07:00", "07:15", "07:25", "07:35", "07:50", "08:00", "08:10", "08:25", "08:35", "08:45", "09:00", "09:35", "09:55", "10:15", "10:35", "10:55", "11:15", "11:35", "11:55", "12:15", "12:35", "12:55", "13:15", "13:45", "14:20", "14:45", "15:20", "15:35", "15:55", "16:15", "16:30", "16:45", "17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45", "20:00", "20:15", "20:40", "21:00", "21:20", "21:40", "22:00", "22:30", "23:00"],
        weekend: ["06:35", "06:55", "07:15", "07:35", "07:55", "08:15", "08:30", "08:45", "09:00", "09:15", "09:35", "09:55", "10:15", "10:35", "10:55", "11:15", "11:35", "11:55", "12:15", "12:35", "13:15", "13:35", "13:55", "14:15", "14:35", "14:55", "15:15", "15:35", "15:55", "16:15", "16:30", "16:45", "17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45", "20:00", "20:15", "20:35", "21:00", "21:20", "21:40", "22:00", "22:30", "23:00"]
    },
    route3: {
        name_tc: "由凱琪居經凱弦居往新港城",
        group: "新港城路線",
        color: "green",
        weekday: ["06:15", "06:30", "06:40", "07:00", "07:15", "07:20", "07:30", "07:40", "07:50", "08:00", "08:10", "08:20", "08:30", "08:40", "08:50", "09:00", "09:20", "09:40", "10:00", "10:20", "10:40", "11:00", "11:20", "11:40", "12:00", "12:20", "12:40", "13:00", "13:20", "13:40", "14:00", "14:20", "14:40", "15:00", "15:20", "15:40", "16:00", "16:20", "16:40", "17:00", "17:20", "17:40", "18:00", "18:20", "18:40", "19:00", "19:20", "19:40", "20:00", "20:20", "20:40", "21:00", "21:20", "21:40", "22:10", "22:40"],
        weekend: ["06:15", "06:35", "07:00", "07:20", "07:40", "08:00", "08:20", "08:40", "09:00", "09:20", "09:40", "10:00", "10:20", "10:40", "11:00", "11:20", "11:40", "12:00", "12:20", "12:40", "13:00", "13:20", "13:40", "14:00", "14:20", "14:40", "15:00", "15:20", "15:40", "16:00", "16:20", "16:40", "17:00", "17:20", "17:40", "18:00", "18:20", "18:40", "19:00", "19:20", "19:40", "20:00", "20:20", "20:40", "21:00", "21:20", "21:40", "22:10", "22:40"]
    },
    route4: {
        name_tc: "由新港城經凱弦居往凱琪居",
        group: "新港城路線",
        color: "green",
        weekday: ["07:10", "07:22", "07:27", "07:37", "07:47", "07:57", "08:07", "08:17", "08:27", "08:37", "08:47", "08:57", "09:10", "09:30", "09:50", "10:10", "10:30", "10:50", "11:10", "11:30", "11:50", "12:10", "12:30", "12:50", "13:10", "13:30", "13:50", "14:00", "14:30", "14:50", "15:00", "15:30", "15:50", "16:10", "16:30", "16:50", "17:10", "17:30", "17:50", "18:10", "18:30", "18:50", "19:10", "19:30", "19:50", "20:10", "20:15", "20:30", "20:55", "21:15", "21:35", "21:55", "22:15", "22:45", "23:15"],
        weekend: ["07:10", "07:30", "07:50", "08:10", "08:30", "08:50", "09:10", "09:30", "09:50", "10:10", "10:30", "10:50", "11:10", "11:30", "11:50", "12:10", "12:30", "12:50", "13:10", "13:30", "13:50", "14:10", "14:30", "14:50", "15:10", "15:30", "15:50", "16:10", "16:30", "16:50", "17:10", "17:30", "17:50", "18:10", "18:30", "18:50", "19:10", "19:30", "19:50", "20:10", "20:30", "20:50", "21:15", "21:35", "21:55", "22:15", "22:45", "23:15"]
    }
};

// Day names in Traditional Chinese
const dayNames = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

// Get current Hong Kong time
function getHongKongTime() {
    return new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Hong_Kong"}));
}

// Check if current date is a Hong Kong public holiday
function isPublicHoliday(date) {
    const dateString = date.toISOString().split('T')[0];
    return hongKongHolidays2025.includes(dateString);
}

// Check if current day should use weekend schedule
function shouldUseWeekendSchedule(date) {
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6 || isPublicHoliday(date);
}

// Convert time string to minutes since midnight
function timeToMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
}

// Convert minutes since midnight to time string
function minutesToTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
}

// Get next two bus times for a route
function getNextBusTimes(routeId, currentTime) {
    const route = busSchedules[routeId];
    const useWeekendSchedule = shouldUseWeekendSchedule(currentTime);
    const schedule = useWeekendSchedule ? route.weekend : route.weekday;
    
    const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
    
    const upcomingTimes = schedule
        .map(time => timeToMinutes(time))
        .filter(time => time > currentMinutes)
        .sort((a, b) => a - b);
    
    if (upcomingTimes.length === 0) {
        return { next: null, nextNext: null };
    } else if (upcomingTimes.length === 1) {
        return { 
            next: minutesToTime(upcomingTimes[0]), 
            nextNext: null 
        };
    } else {
        return { 
            next: minutesToTime(upcomingTimes[0]), 
            nextNext: minutesToTime(upcomingTimes[1]) 
        };
    }
}

// Update the clock display
function updateClock() {
    const now = getHongKongTime();
    
    // Update current time
    const timeString = now.toLocaleTimeString('zh-HK', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('currentTime').textContent = timeString;
    
    // Update current date
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const dayName = dayNames[now.getDay()];
    const dateString = `${year}年${month}月${date}日 ${dayName}`;
    document.getElementById('currentDate').textContent = dateString;
    
    // Update holiday status
    const holidayStatusElement = document.getElementById('holidayStatus');
    if (isPublicHoliday(now)) {
        holidayStatusElement.textContent = '今日是公眾假期';
        holidayStatusElement.className = 'holiday-status holiday-status--holiday';
    } else {
        holidayStatusElement.textContent = '今日是工作日';
        holidayStatusElement.className = 'holiday-status holiday-status--normal';
    }
}

// Update bus schedules
function updateBusSchedules() {
    const now = getHongKongTime();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    
    Object.keys(busSchedules).forEach(routeId => {
        const { next, nextNext } = getNextBusTimes(routeId, now);
        
        const nextElement = document.getElementById(`${routeId}-next`);
        const nextNextElement = document.getElementById(`${routeId}-next-next`);
        
        if (next) {
            nextElement.textContent = next;
            
            // Reset classes first
            nextElement.className = 'time-value';
            
            // Check if bus is coming soon (within 5 minutes)
            const nextMinutes = timeToMinutes(next);
            const timeDiff = nextMinutes - currentMinutes;
            
            if (timeDiff <= 5 && timeDiff > 0) {
                nextElement.classList.add('time-value--soon');
            }
        } else {
            nextElement.textContent = '今日無班次';
            nextElement.className = 'time-value time-value--no-more';
        }
        
        if (nextNext) {
            nextNextElement.textContent = nextNext;
            nextNextElement.className = 'time-value';
        } else {
            nextNextElement.textContent = '無';
            nextNextElement.className = 'time-value time-value--no-more';
        }
    });
    
    // Update last update time
    const now_string = now.toLocaleTimeString('zh-HK', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
    });
    document.getElementById('lastUpdate').textContent = now_string;
}

// Initialize the dashboard
function initDashboard() {
    // Update clock immediately and then every second
    updateClock();
    setInterval(updateClock, 1000);
    
    // Update bus schedules immediately and then every minute
    updateBusSchedules();
    setInterval(updateBusSchedules, 60000);
}

// Start the dashboard when the page loads
document.addEventListener('DOMContentLoaded', initDashboard);