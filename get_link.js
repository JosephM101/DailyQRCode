// *****************************************************************************
// *****************************************************************************
// *****************************************************************************
// *****************************************************************************
// *****************************************************************************

// Enable debugging
var debug = true;
var dbg_prefix = "GET_LINK";
function print_dbg(msg) {
    if (debug) {
        var s = (this.use_prefix ? "[" + dbg_prefix + "]: " : "") + msg;
        console.log(s);
    }
}

/*
  __  __          _____ _   _ 
 |  \/  |   /\   |_   _| \ | |
 | \  / |  /  \    | | |  \| |
 | |\/| | / /\ \   | | | . ` |
 | |  | |/ ____ \ _| |_| |\  |
 |_|  |_/_/    \_\_____|_| \_|
 
*/

var startDate = new Date(2022, 6, 13); // Project started on 6/13/2022; we'll use that as our reference for getting a new link

var daysSinceStart = Math.floor((new Date() - startDate) / (1000 * 60 * 60 * 24)); // Calculate the number of days since the project started
daysSinceStart = daysSinceStart < 0 ? daysSinceStart * -1 : daysSinceStart; // Make sure it's positive
print_dbg("Days since start: " + daysSinceStart);

var numLinks = urls.length; // Get number of links

/*
 * If the number of days since the project started is greater than the number of links (range), conform the value back to the range
 * For example, if there are 13 links, and it's been 15 days since the project started, the value should return 2.
*/

var index = 0;
if (daysSinceStart > numLinks) {
    var timesSurpassed = Math.floor(daysSinceStart / numLinks); // Divide number of days since the project started by the number of links in the array to get the number of times the list was "repeated"
    print_dbg("Times surpassed: " + timesSurpassed); // Print the value for debugging purposes
    // Get the remainder of the days since the project started divided by the number of links
    index = daysSinceStart % numLinks;
} else {
    index = daysSinceStart;
}

print_dbg(index); // Print index value

var url = urls[index]; // Set the link to the index value
print_dbg("URL: " + url); // Print our URL