var wxTimer = function (initObj) {
  initObj = initObj || {};
  this.wxTimerSecond = initObj.wxTimerSecond;
  this.complete = initObj.complete;	//结束任务
  this.name = initObj.name;	//当前计时器在计时器数组对象中的名字
  this.intervarID; //计时ID
}
 
wxTimer.prototype = {
  //开始
  start: function (self) {
    var that = this;
    //开始倒计时
    var second = this.wxTimerSecond;
    function begin() {
      // 秒数
      second--;
      // 天数位
      var day = Math.floor(second / 3600 / 24);
      var dayStr = day.toString();
      if (dayStr.length == 1) dayStr = '0' + dayStr;
 
      // 小时位
      var hr = Math.floor((second - day * 3600 * 24) / 3600);
      var hrStr = hr.toString();
      if (hrStr.length == 1) hrStr = '0' + hrStr;
 
      // 分钟位
      var min = Math.floor((second - day * 3600 * 24 - hr * 3600) / 60);
      var minStr = min.toString();
      if (minStr.length == 1) minStr = '0' + minStr;
 
      // 秒位
      var sec = second - day * 3600 * 24 - hr * 3600 - min * 60;
      var secStr = sec.toString();
      if (secStr.length == 1) secStr = '0' + secStr;
 
 

      //可以添加dayStr来显示天数
      var tmpTimeStr = [hrStr, minStr, secStr].join(':');
      var wxTimerSecond = second;
      var wxTimerList = self.data.wxTimerList;
 
      //更新计时器数组
      wxTimerList[that.name] = {
        wxTimer: tmpTimeStr,
        wxTimerSecond: wxTimerSecond,
      }
 
      self.setData({
        wxTimerList: wxTimerList
      });
 
      //结束执行函数
      if (wxTimerSecond <= 0) {
        if (that.complete) {
          that.complete();
        }
        that.stop();
      }
    }
    begin();
    this.intervarID = setInterval(begin, 1000);
  },
  //结束
  stop: function () {
    clearInterval(this.intervarID);
  },
}
 
module.exports = wxTimer;