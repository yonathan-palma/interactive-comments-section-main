
export default function fromNow(date) {
    var seconds = Math.floor((new Date() - date) / 1000);
    var years = Math.floor(seconds / 31536000);
    var months = Math.floor(seconds / 2592000);
    var days = Math.floor(seconds / 86400);
  
    if (days > 548) {
      return years + ' years ago';
    }
    if (days >= 320 && days <= 547) {
      return '1 year ago';
    }
    if (days >= 45 && days <= 319) {
      return months + ' months ago';
    }
    if (days >= 26 && days <= 45) {
      return '1 month ago';
    }
  
    var hours = Math.floor(seconds / 3600);
  
    if (hours >= 36 && days <= 25) {
      return days + ' days ago';
    }
    if (hours >= 22 && hours <= 35) {
      return '1 day ago';
    }
    
    var minutes = Math.floor(seconds / 60);
  
    if (minutes >= 90 && hours <= 21) {
      return hours + ' hours ago';
    }
    if (minutes >= 45 && minutes <= 89) {
      return '1 hour ago';
    }
    if (seconds >= 90 && minutes <= 44) {
      return minutes + ' minutes ago';
    }
    if (seconds >= 45 && seconds <= 89) {
      return '1 minute ago';
    }
    if (seconds >= 0 && seconds <= 45) {
      return '1 few seconds ago';
    }

    return date;
}