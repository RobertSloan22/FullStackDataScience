import React, { useEffect, useState } from 'react';

function BatteryInfo() {
  const [batteryInfo, setBatteryInfo] = useState({
    charging: null,
    level: null,
    chargingTime: null,
    dischargingTime: null
  });

  useEffect(() => {
    navigator.getBattery().then((battery) => {
      function updateAllBatteryInfo() {
        setBatteryInfo({
          charging: battery.charging,
          level: battery.level * 100,
          chargingTime: battery.chargingTime,
          dischargingTime: battery.dischargingTime
        });
      }
      updateAllBatteryInfo();

      battery.addEventListener("chargingchange", updateAllBatteryInfo);
      battery.addEventListener("levelchange", updateAllBatteryInfo);
      battery.addEventListener("chargingtimechange", updateAllBatteryInfo);
      battery.addEventListener("dischargingtimechange", updateAllBatteryInfo);

      // Cleanup function to remove event listeners when the component unmounts
      return () => {
        battery.removeEventListener("chargingchange", updateAllBatteryInfo);
        battery.removeEventListener("levelchange", updateAllBatteryInfo);
        battery.removeEventListener("chargingtimechange", updateAllBatteryInfo);
        battery.removeEventListener("dischargingtimechange", updateAllBatteryInfo);
      };
    });
  }, []);  // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className='battery-info'>
      <p>Battery charging? {batteryInfo.charging ? "Yes" : "No"}</p>
      <p>Battery level: {batteryInfo.level}%</p>
 
    </div>
  );
}

export default BatteryInfo;