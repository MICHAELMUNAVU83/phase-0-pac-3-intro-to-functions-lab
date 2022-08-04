function shout(text) {
    return text.toUpperCase();
  }
  function whisper(text) {
    return text.toLowerCase();
  }
  function logWhisper(text) {
    console.log(text.toLowerCase());
  }
  function logShout(text) {
    console.log(text.toUpperCase());
  }
  function sayHiToHeadphonedRoommate(text) {
    switch (text) {
      case text.toUpperCase():
        return "YES INDEED!";
        break;
      case text.toLowerCase():
        return "I can't hear you!";
        break;
      default:
        return "I would love to!";
    }
  }
  
  module.exports = {
    shout,
    whisper,
    logWhisper,
    logShout,
    sayHiToHeadphonedRoommate,
};