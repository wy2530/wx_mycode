// pages/body/body.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  /**
   * 
   */


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  toTestPage: function(e){
    let testId = e.currentTarget.dataset['testid'];
    console.log(testId);
    wx.navigateTo({
       // 跳转到答题页面，传入试题
       url: '../test/test?testId='+testId 
    })
  }
})