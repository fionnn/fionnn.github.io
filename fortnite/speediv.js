var speediv = 0;
function speedivCounter()
{
  speediv++
  document.getElementById("speedivCounter").innerHTML = "you have suppressed speediv " + speediv + " times!";
  // Suppress achievements
  if (speediv >= 1000)
  {
    var achievementOne = "1,000: one thousand suppresses to speediv. thank you for your time. [x3 booster]";
    document.getElementById("speedivAchievementOne").innerHTML = achievementOne.bold();
    speediv = speediv + 2;
  }
  if (speediv >= 10000)
  {
    var achievementTwo = "10,000: ten thousand? for fucks sake [x18 booster]";
    document.getElementById("speedivAchievementTwo").innerHTML = achievementTwo.bold();
    speediv = speediv + 15;
  }
  if (speediv >= 100000)
  {
    var achievementThree = "100,000: ok you can stop suppressing him now [x50 booster]";
    document.getElementById("speedivAchievementThree").innerHTML = achievementThree.bold();
    speediv = speediv + 32;
  }
  if (speediv >= 1000000)
  {
    var achievementFour = "1,000,000: just stop, ok? you're wasting your life [x200 booster]";
    document.getElementById("speedivAchievementFour").innerHTML = achievementFour.bold();
    speediv = speediv + 150;
  }
  if (speediv >= 10000000)
  {
    var achievementFive = "10,000,000: how the fuck are you a human (maybe you're a robot, idk?) [x10,000 booster]";
    document.getElementById("speedivAchievementFive").innerHTML = achievementFive.bold();
    speediv = speediv + 9800;
  }
  if (speediv >= 100000000)
  {
    var achievementSix = "100,000,000: ok i'm out, see ya, good luck! (just stop please) [x1,000,000 booster]";
    document.getElementById("speedivAchievementSix").innerHTML = achievementSix.bold();
    speediv = speediv + 990000;
  }
}