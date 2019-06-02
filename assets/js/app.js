//For reference: Running Chrome w/out CORS
//"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp

//Read in data
//This is hardcoded because google chrome has some sort of CORS error combined with a fetch error.
//Reserach suggests that it's some sort of version error between d3 4 and d3 5

var csv = URL.createObjectURL(new Blob([
    `id,state,abbr,poverty,povertyMoe,age,ageMoe,income,incomeMoe,healthcare,healthcareLow,healthcareHigh,obesity,obesityLow,obesityHigh,smokes,smokesLow,smokesHigh,-0.385218228
    1,Alabama,AL,19.3,0.5,38.6,0.2,42830,598,13.9,12.7,15.1,33.5,32.1,35,21.1,19.8,22.5,
    2,Alaska,AK,11.2,0.9,33.3,0.3,71583,1784,15,13.3,16.6,29.7,27.8,31.6,19.9,18.2,21.6,
    4,Arizona,AZ,18.2,0.4,36.9,0.1,50068,483,14.4,13.3,15.6,28.9,27.7,30.2,16.5,15.4,17.6,
    5,Arkansas,AR,18.9,0.5,37.8,0.2,41262,653,16.3,14.4,18.2,35.9,33.8,38,24.7,22.7,26.7,
    6,California,CA,16.4,0.2,36,0.1,61933,238,14.8,13.8,15.8,24.7,23.5,25.9,12.9,11.9,13.8,
    8,Colorado,CO,12,0.4,36.3,0.1,61303,487,12.8,11.9,13.6,21.3,20.4,22.2,15.7,14.8,16.6,
    9,Connecticut,CT,10.8,0.5,40.5,0.2,70048,828,8.7,7.6,9.7,26.3,24.8,27.7,15.4,14.2,16.7,
    10,Delaware,DE,12.5,0.9,39.6,0.3,59716,1674,8.7,7.4,9.9,30.7,28.6,32.7,19.9,17.9,21.8,
    11,Washington D.C.,DC,17.7,1.2,33.8,0.2,71648,1996,8.3,6.3,10.3,21.7,19.5,23.9,16.4,14.2,18.6,
    12,Florida,FL,16.5,0.3,41.6,0.1,47463,329,17.6,16.4,18.8,26.2,25,27.5,17.7,16.5,18.8,
    13,Georgia,GA,18.3,0.4,36.1,0.1,49321,543,20.9,19.3,22.5,30.5,28.9,32.1,17.4,15.9,18.8,
    15,Hawaii,HI,11.4,0.8,38.1,0.2,69592,1456,8.1,7.1,9,22.1,20.7,23.5,14.1,13,15.3,
    16,Idaho,ID,14.8,0.7,35.9,0.2,47861,1275,16.5,15,18.1,28.9,27.1,30.8,15.9,14.4,17.4,
    17,Illinois,IL,14.4,0.3,37.5,0.2,57444,429,11.9,10.5,13.3,29.3,27.6,31.1,16.5,15.1,18,
    18,Indiana,IN,15.2,0.4,37.4,0.2,49446,487,14.8,13.8,15.8,32.7,31.5,33.9,22.9,21.8,24.1,
    19,Iowa,IA,12.2,0.5,38.2,0.1,53712,761,7.7,6.8,8.6,30.9,29.6,32.3,18.5,17.3,19.7,
    20,Kansas,KS,13.6,0.5,36.2,0.1,52504,706,14.5,13.7,15.3,31.3,30.3,32.2,18.1,17.2,18.9,
    21,Kentucky,KY,19.1,0.5,38.5,0.2,42958,697,10,8.8,11.1,31.6,30.2,33.1,26.2,24.7,27.7,
    22,Louisiana,LA,19.8,0.5,36.1,0.1,44555,738,18.7,17.4,20,34.9,33.4,36.4,24,22.6,25.4,
    23,Maine,ME,14.1,0.7,44.1,0.2,49462,1112,11,10,12,28.2,26.9,29.5,19.3,18.1,20.5,
    24,Maryland,MD,10.1,0.4,38.3,0.1,73971,867,9.2,8,10.4,29.6,28.1,31.1,14.6,13.4,15.9,
    25,Massachusetts,MA,11.6,0.3,39.4,0.2,69160,957,4.6,4,5.2,23.3,22.3,24.4,14.7,13.7,15.7,
    26,Michigan,MI,16.2,0.3,39.6,0.1,49847,385,10.3,9.3,11.2,30.7,29.4,32,21.2,20,22.5,
    27,Minnesota,MN,11.5,0.4,37.8,0.1,61481,471,7.3,6.7,7.9,27.6,26.8,28.5,16.3,15.6,17,
    28,Mississippi,MS,21.5,0.6,36.7,0.2,39680,773,18.8,17,20.7,35.5,33.4,37.6,23,21,24.9,
    29,Missouri,MO,15.5,0.4,38.5,0.1,48363,567,12.9,11.6,14.3,30.2,28.6,31.9,20.6,19.2,22.1,
    30,Montana,MT,15.4,0.8,39.6,0.3,46328,1217,12.9,11.6,14.1,26.4,24.9,27.9,19.9,18.5,21.4,
    31,Nebraska,NE,12.4,0.5,36.2,0.2,52686,688,12.4,11.5,13.2,30.2,29.2,31.2,17.3,16.5,18.2,
    32,Nevada,NV,15.2,0.7,37.4,0.2,51450,683,17.1,15,19.3,27.7,25.3,30.1,17,15,19,
    33,New Hampshire,NH,9.2,0.6,42.5,0.3,66532,1297,11.4,10.1,12.7,27.4,25.8,29.1,17.5,16,19,
    34,New Jersey,NJ,11.1,0.3,39.4,0.2,71919,438,12.5,11.5,13.4,26.9,25.7,28.1,15.1,14.1,16.1,
    35,New Mexico,NM,21.3,0.9,37.2,0.2,44803,849,15.4,14.1,16.8,28.4,26.9,30,19.2,17.7,20.6,
    36,New York,NY,15.9,0.3,38.2,0.1,58878,393,12.3,11.1,13.4,27,25.6,28.4,14.4,13.3,15.5,
    37,North Carolina,NC,17.2,0.3,38.3,0.1,46556,381,16.1,15.1,17.2,29.7,28.4,31,19.1,17.9,20.3,
    38,North Dakota,ND,11.5,0.9,35.1,0.2,59029,1681,8.8,7.6,10,32.2,30.5,33.9,19.9,18.4,21.5,
    39,Ohio,OH,15.8,0.3,39.4,0.1,49308,363,10.2,9.2,11.3,32.6,31.2,34.1,21,19.7,22.3,
    40,Oklahoma,OK,16.6,0.4,36.2,0.2,47529,454,13.9,12.9,15,33,31.6,34.3,21.1,19.9,22.3,
    41,Oregon,OR,16.6,0.5,39.3,0.2,51075,490,11,9.7,12.4,27.9,26.2,29.6,17,15.5,18.4,
    42,Pennsylvania,PA,13.6,0.3,40.7,0.1,53234,420,10.1,9.2,11.1,30.2,28.9,31.4,19.9,18.8,21.1,
    44,Rhode Island,RI,14.3,0.9,39.8,0.3,54891,1488,8,6.8,9.2,27,25.4,28.6,16.3,14.8,17.7,
    45,South Carolina,SC,18,0.5,38.8,0.1,45238,507,17.1,16,18.2,32.1,30.9,33.3,21.5,20.4,22.7,
    46,South Dakota,SD,14.2,0.7,36.6,0.3,50979,1027,9.9,8.4,11.4,29.8,27.9,31.8,18.6,16.9,20.2,
    47,Tennessee,TN,18.3,0.4,38.6,0.1,44361,561,14.2,12.6,15.9,31.2,29.3,33.1,24.2,22.3,26.1,
    48,Texas,TX,17.2,0.2,34.3,0.1,53035,377,24.9,23.7,26.1,31.9,30.6,33.3,14.5,13.6,15.5,
    49,Utah,UT,11.7,0.6,30.5,0.1,60922,658,13.9,13.2,14.6,25.7,24.9,26.6,9.7,9,10.3,
    50,Vermont,VT,12.2,0.8,42.8,0.3,54166,1724,6.7,5.9,7.5,24.8,23.5,26.1,16.4,15.2,17.6,
    51,Virginia,VA,11.8,0.3,37.7,0.1,64902,624,13.1,12,14.1,28.5,27.2,29.7,19.5,18.4,20.7,
    53,Washington,WA,13.2,0.4,37.5,0.1,61366,485,10.7,9.7,11.8,27.3,26,28.5,15.3,14.3,16.4,
    54,West Virginia,WV,18.3,0.7,41.9,0.2,41059,651,10.1,9.1,11.2,35.7,34.2,37.2,26.7,25.2,28.1,
    55,Wisconsin,WI,13.2,0.4,39.2,0.2,52622,433,8.5,7.4,9.7,31.2,29.6,32.8,17.4,16,18.7,
    56,Wyoming,WY,11.2,0.9,36.6,0.4,57055,1983,15.1,13.3,16.9,29.5,27.4,31.5,19.5,17.6,21.4,`
  ]));

//Set svg height and width
var svgWidth = 640;
var svgHeight = 480;

//Set chart margins
var chartMargin ={
    top: 30,
    right: 30,
    bottom: 30,
    left: 30
    };

//Set chart dimensions
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

//Select area of chart with scatter id and append an svg to it w/ height and width
const svg = d3.select('#scatter')
    .append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight);

// //Append chart to svg via group and shift it over
// var chartGroup = svg.append('g')
//     .attr('tranform', `translate(${chartMargin.left}, ${chartMargin.top})`)

//Create lists to hold different values
const poverty = [];
const age = [];
const income = [];
const healthcare = [];
const obesity = [];
const smokes = [];

//Load data
d3.csv(csv).then(function(data) {
    console.log(data);
    console.log(data[1].poverty)
    console.log(data[1].age)
    console.log(data[1].income)
    console.log(data[1].smokes)

    //Cast each value of dataset as number and push it to a list for easier access
    data.forEach(function(data) {
        data.poverty = +data.poverty;
        poverty.push(data.poverty);
        data.age = +data.age;
        age.push(data.age);
        data.income = +data.income;
        income.push(data.income);
        data.healthcare = +data.healthcare;
        healthcare.push(data.healthcare);
        data.obesity = +data.obesity;
        obesity.push(data.obesity);
        data.smokes = +data.smokes;
        smokes.push(data.smokes);

        
    })

    //Scale chart to fit within svg
    var yScale = d3.scaleLinear()
        .domain(d3.extent(poverty))
        .range(chartHeight, 0);
    var xScale = d3.scaleLinear()
        .domain(d3.extent(obesity))
        .range(chartWidth, 0);

    //Define axes
    var yAxis = d3.axisLeft(yScale);
    var xAxis = d3.axisBottom(xScale);
    
    // //Append axes to chartgroup
    // chartGroup.append('axis')
    //     .call(yAxis);
    // chartGroup.append('axis')
    //     .attr('transform', `translate(0, ${chartHeight}`)
    //     .call(xAxis);


    //Loop through the data and append circles for each data point
    for (var i = 0; i < poverty.length; i++) {
        svg.selectAll('g')
            .enter()
            .append('circle')
            .attr('cx', poverty[i])
            .attr('cy', obesity[i])
            .attr('r', 10)
    }


})

