function startTime()
{
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var tod = "AM";
  m = checkTime(m);
  s = checkTime(s);
  if (h === 12)
  {
    tod = "PM";
  }
  if (h >= 13)
  {
    h = h - 12
    tod = "PM";
  }
  document.getElementById('txt').innerHTML = h + ":" + m + " " + tod + " EST";
  var t = setTimeout(startTime, 500);
}
function checkTime(i)
{
  if (i < 10) {i = "0" + i}
  return i;
}