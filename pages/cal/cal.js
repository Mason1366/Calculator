Page({

  /**
   * 页面的初始数据
   */
  data: {
    id1: "back",
    id2: "clear",
    id3: "negative",
    id4: "+",
    id5: "1",
    id6: "2",
    id7: "3",
    id8: "-",
    id9: "4",
    id10: "5",
    id11: "6",
    id12: "×",
    id13: "7",
    id14: "8",
    id15: "9",
    id16: "÷",
    id17: ".",
    id18: "0",
    id19: "history",
    id20: "=",
    screenData: "0",
    lastIsOperator:false,
    arr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  click:function(event){
    var id = event.target.id
    var data = this.data.screenData
    if(id==this.data.id1){//退格
      if (data.length == 1) { 
        this.setData({ screenData: '0' })
        return }
      data = data.substring(0, data.length-1)
    }
    else if (id == this.data.id2){//清屏
      this.setData({ screenData: '0' })
      console.log(id)
      return 
    }
    else if (id == this.data.id3) {//负
      if (data.substring(0, 1) == "-") { data = data.substring(1) }
      else if (data!="0") data = "-" + data
    }
    else if (id == this.data.id20){//=
     if(isNaN(lastWord)){return}
     if (parseFloat(data) == data) { return }
    }
    else if (id == this.data.id4 || id == this.data.id8 || id == this.data.id12 || id == this.data.id16){
      if (this.data.lastIsOperator) { return }
      else {data = data + id}
    } 
    else if (data == "0") { data = id}
    else {data= data + id}
    var lastWord = data.substring(data.length - 1, data.length)
    if (lastWord == this.data.id4 || lastWord == this.data.id8 || lastWord == this.data.id12 || lastWord == this.data.id16 ) {
    this.setData({ lastIsOperator: true })}
    else {this.setData({ lastIsOperator:false })}
    this.setData({screenData: data})
  }
})
