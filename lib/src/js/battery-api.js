/**
 * API designed to give information about battery status in devices.
 * There is only one method navigator.getBattery that returns a promise.
 */

function getBatteryStatus() {

  var batteryPromise = navigator.getBattery();

  batteryPromise.then(function(battery) {

    //Properties
    console.log('Charging : ' + battery.charging);
    console.log('Level : ' + battery.level);
    console.log('Charging Time : ' + battery.chargingTime);
    console.log('Discharging Time: ' + battery.dischargingTime);

    //events
    battery.addEventListener('chargingchange', function(e) {
      console.log('chargingchange', battery.chargingchange);
    });

    battery.addEventListener('levelchange', function(e) {
      console.log('levelchange ', battery.level);
    });

    battery.addEventListener('chargingtimechange', function(e) {
      console.log('chargingtimechange ', battery.chargingTime);
    });

    battery.addEventListener('dischargingtimechange', function(e) {
      console.log('dischargingtimechange ', battery.dischargingTime);
    });


  });

}

getBatteryStatus();
