// Part I: Manipulating the DOM
// REFERENCE WEEK 2 MEETING NOTES


// Step 1: Select the div with id part1 and append an h2 element
// with the text "We're learning D3!"


// Step 2: Select the part1 div again and append a div with the id dynamic-content


// Step 3: Select the div you just created (using its id!) and append a
// paragraph with some text of your choice (you can also style this if you want!)



// ====================================
// Part II: Binding data
// REFERENCE WEEK 2 MEETING NOTES

var schools = [
    { name: "Harvard", signups: 4695, region: "Northeast" },
    { name: "UW Madison", signups: 4232, region: "Midwest" },
    { name: "WashU", signups: 3880, region: "Midwest" },
    { name: "Brown", signups: 2603, region: "Northeast" },
    { name: "UChicago", signups: 2088, region: "Midwest" },
    { name: "UW", signups: 2042, region: "West" }
];

// Step 1: Select the div with id part2 and append a new SVG element. Set its attribute 'width' to 500px and
// 'height' to 200px.

// var svg2 =


// Step 2: Append a new SVG circle for every object in the schools array. Use selectAll(), data(), and enter()


// Step 3: For each circle, dynamically set the following attributes:
//   - Position ('cx' and 'cy'): Set the x/y coordinates and make sure that the circles don’t overlap each other.
//          One way to do this is by setting the x coordinate as a function of the index (function (data, index) { ... })
//   - Radius ('r'); large sandwiches should be twice as big as small ones
//   - Colors ('fill'): use one color for cheap products < 7.00 USD and one for more expensive products
//   - Border ('stroke'): Add a border to every circle



// ====================================
// PART III: Loading data
// REFERENCE WEEK 2 MEETING NOTES

// Step 1: Prepare the data - each value of the CSV file is stored as a string, but we want numerical values to be
// numbers. Update this row conversion function to specify how the values in each row of the CSV should be typed.
var rowConverter = function (d) {
    return d;
};

// This loads the CSV file "cities.csv".
d3.csv("data/cities.csv", rowConverter,function (data) {
    // console.log(data);
    handledata(data);
});

var europeanUnion = ["Austria", "Belgium", "Bulgaria", "Croatia",
    "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France",
    "Germany", "Greece", "Hungary", "Ireland", "Italy", "Latvia", "Lithuania",
    "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania",
    "Slovakia", "Slovenia", "Spain", "Sweden", "United Kingdom"];

function handledata() {
    // Step 2: Filter the dataset to only include cities that are part of the EU using data.filter()


    // Step 3: Select the div with id part3 and append a new SVG element. Set its width to 700px and height to 550px.

    // var svg3 =


    // Step 3: Draw an SVG circle for each city in the filtered dataset
    //   - All the elements (drawing area + circles) should be added dynamically with D3
    //   - Use the x/y coordinates from the dataset to position the circles


    // Step 4: Change the radius of the circle to be data-dependent
    //   - The radius should be 4px for cities with population less than one million
    //   - The radius for all other cities should be 8px


    // Step 5: Add labels with the names of the European cities
    //   - Use the SVG text element
    //   - All the elements should be the class of city-label
    //   - The labels should only be visible for cities with population greater
    //   than one million (use opacity)


    // Step 6: Styling - in the external stylesheet, style city-label with font size = 11 px and
    // text anchor = middle


}


// ====================================
// Part IV: Drawing scales and axes
// REFERENCE WEEK 3 MEETING NOTES

var regions;

// Load CSV file
d3.csv("data/wealth-health-2014.csv", function(data){

    // Uncomment these lines to analyze the dataset in the web console
    // console.log(data);
    // console.log("Countries: " + data.length);

    var preparedData = prepareData(data);

    createVisualization(preparedData);
});

var prepareData = function(data) {
    // Step 1: Prepare the data - convert numeric values to numbers and make sure the regions array
    // has the name of each region. You can use a row converter function or use data.forEach() here.

};

var createVisualization = function(data) {

    // Step 2: Append a new SVG element to the div container with id chart-area4. Make sure to translate
    // it and set width and height so that the svg has the correct margins.

    var margin = {top: 30, right: 30, bottom: 50, left: 30};
    var width = 800 - margin.left - margin.right;
    var height = 600 - margin.top - margin.bottom;

    // var svg4 =


    // Step 3: Create linear scales using the D3 scaleLinear() function
    // You will need an income scale (x-axis) and a scale function for the life expectancy (y-axis).
    // Use d3.min() and d3.max() for the input domain
    // Use the variables height and width for the output range

    // var incomeScale =
    // var lifeExpectancyScale =


    // Step 4: Test the scale functions by calling them with example values and printing the result to the web console.

    // console.log(incomeScale(5000));
    // console.log(lifeExpectancyScale(68));


    // Step 5: Map the countries to SVG circles
    // Use selectAll(), data(), enter() and append(). Instead of setting the x- and y-values directly,
    // use your scale functions to convert the data values to pixel measures


    // Step 6: Use your scales (income and life expectancy) to create D3 axis functions using axisBottom() and
    // axisLeft()

    // var xAxis =
    // var yAxis =


    // Step 7: Append the x and y axes to your scatterplot
    // Create group elements for each axis and translate them to the correct axis position. Call your axes.

    // var xAxisGroup =
    // var yAxisGroup =


    // Step 8: Refine the domain of the scales
    // Notice that some of the circles are positioned on the outer edges of the svg area. You can fix this by
    // including buffer values to widen the domain and to prevent circles and axes from overlapping


    // Step 9: Add labels for your axes. Use the svg text element, translate and rotate them to the correct position,
    // style them with text-anchor = middle, and set the correct text


    // Step 10: Add a scale function for the circle radius
    // Create a population-dependent linear scale function. The radius range should be between 4 - 30px.
    // Then use the scale function to specify a dynamic radius for your circles


    // Step 11: Color the circles (countries) depending on their regions
    // Create an ordinal scale (scaleOrdinal()) and use a D3 color scale (e.g. d3.schemeCategory20) for the range


};



// ====================================
// Part V: Updates and transitions
// REFERENCE WEEK 4 MEETING NOTES

var svg5 = d3.select("#chart-area5")
    .append("svg")
    .attr("width", 800)
    .attr("height", 200)
    .append("g");

var textLine = svg5.append("text")
    .attr("x", 20)
    .attr("y", 100)
    .text("Orders");


function updateVisualization(orders) {
    // This function is called from data-generator.js each time a coffee order is placed or processed in our coffee
    // queue simulation.

    // console.log(orders);

    var circles = svg5.selectAll("circle").data(orders);

    // Step 1: Append an svg circle for each new order in the enter() selection. Update new and existing orders
    // so that the radius varies with the price, coffee orders are brown, and tea orders are green
    // Don't forget to use .merge(circles) to select both the enter and update selections


    // Step 2: Delete elements that have been removed from orders


    // Step 3: Add a transition() of length 200ms to each of the above updates.


    // Step 4: Update the text label (textLine) with the current number of orders

}


// ====================================
// Part VI: Synthesis of everything so far!

loadData();

d3.select("#ranking-type").on("change", updateBarChart());

// This creates a 'data' property under the window object (a global JS object) to store the coffee chain data
Object.defineProperty(window, 'data', {
    // data getter
    get: function() { return _data; },
    // data setter
    set: function(value) {
        _data = value;
        // update the visualization each time the data property is set by using the equal sign (e.g. data = [])
        updateBarChart()
    }
});


// Step 1: Define an SVG drawing area with our margin conventions. Append
// the drawing area to the div with id chart-area6 and translate appropriately.

// var margin =
// var width =
// var height =
// var svg6 =


// Step 2: Create scales for the x and y axes.
// You should use scaleBand() for x and scaleLinear() for y.
// Don't set the domain yet (this will happen in updateBarChart).


// Step 3: Create axis groups for the x and y axes with the appropriate translations.
// Use the following HTML class attributes:
//   - 'x-axis' and 'axis' for the x-axis
//   - 'y-axis' and 'axis' for the y-axis
// Don't call axes yet (this will happen in updateBarChart).


function loadData() {
    d3.csv("data/coffee-house-chains.csv", function(error, csv) {

        // Step 4: Prepare the data - change numeric fields to numbers


        // Stores csv data in global variable
        data = csv;

        // updateVisualization gets automatically called within the data = csv call
        // See the definition above: Object.defineProperty(window, 'data', { ...

    });
}

// Render the coffee chain bar chart
function updateBarChart() {

    // Step 5: Get the currently selected option from the select box using D3 (use .property("value"))

    // var rankingType =


    // Step 6: Sort the coffee house chains by rankingType using data.sort(function (a,b) {...})


    // Step 7: Change the domain of the scales according to the rankingType


    // Step 8: Create axes with the updated scales, select the axis groups with ids x-axis and y-axis,
    // and call the appropriate axes


    // Step 9: Implement the bar chart to display the data corresponding to the rankingType
    // -  Use svg element 'rect' and class name 'bar' for the bars in the graph
    // -  Implement the enter-update-exit sequence for rect elements

    /* You can use this code to position the elements

        .attr("x", function(d) { return x(d.company); })
        .attr("y", function(d) { return y(d[rankingType]); })
        .attr("width", x.bandwidth())
        .attr("height", function(d) { return height - y(d[rankingType]); }) */


    // Step 10: Add transitions to the bars/rectangles of your chart


    // Step 11: Add transitions to the x and y axis
}
