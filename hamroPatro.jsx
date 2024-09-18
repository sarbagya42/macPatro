// Refresh frequency in milliseconds (every 1 hour)
export const refreshFrequency = 3600000;

// Command to fetch data from Hamro Patro's website
export const command = 'curl -s https://calendar.bloggernepal.com/api/today' ;

// CSS styling for the widget
export const className = `
  top: 20px;
  left: 20px;
  padding: 15px;
  background-image:url('./nepal.png');
  background-size:69px;
  background-repeat:no-repeat;
  background-position:top;
  font-family: Arial;
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  width: 250px;
`;


const today=new Date();
const dayIndex=today.getDay();

 const nepaliWeeksDays=[
      "आइतवार",
      "सोमवार",
      "मगलवार",
      "बुधवार",
      "बिहिवार",
      "शुक्रवार",
      "शनिवार"
    ];

let nepaliToDay=nepaliWeeksDays[dayIndex];

//Data Parser
function nepaliDate(data){
  const json=JSON.parse(data)
  const dayArray=json.res.days;
  const todayExistence=dayArray.find(day=>day.tag==="today")

  if(todayExistence){
    return `${todayExistence.bs}`
  }
}

function monthParser(data){
  const json=JSON.parse(data);
  return json.res.name;
}

function yearParser(data){
  const json=JSON.parse(data);
  return json.res.year;
}



// Render the widget
export const render = ({ output }) => {
  const todayDate=nepaliDate(output)
  const nepaliMonth=monthParser(output)
  const nepaliYear=yearParser(output)
  
  return (
    <div>
      <h3>Mac Patro</h3>
      <h2>{nepaliMonth+" "+todayDate + ", " + nepaliYear + ", " + nepaliToDay} </h2>
    </div>
  );
};

