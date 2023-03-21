import React from 'react';

function Clock() {
  // Use the React.useState() hook to create a state variable for the current time
  const [time, setTime] = React.useState(new Date());

  // Use the React.useEffect() hook to update the time every second
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Format the time as a string
  const timeString = time.toLocaleTimeString();

  // Return the div element containing the clock
  return (
    <div>
      {timeString}
    </div>
  );
}

export default Clock;
