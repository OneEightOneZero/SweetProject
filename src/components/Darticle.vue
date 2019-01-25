<template>
  <article id="content">
    <div id="slider" style="visibility: visible;">
      <div class="swipe-wrap" style="width: 640px;">
        <div
          data-index="0"
          style="width: 320px; left: 0px; transition-duration: 300ms; transform: translate(-320px, 0px) translateZ(0px);"
        >
          <a href="#">
            <img src="http://www.sweet30.com/yyadmin/um/php/upload/20180612/15287823529313.jpg" alt>
          </a>
        </div>

        <div
          data-index="1"
          style="width: 320px; left: -320px; transition-duration: 300ms; transform: translate(0px, 0px) translateZ(0px);"
        >
          <a href="#">
            <img src="http://www.sweet30.com/yyadmin/um/php/upload/20180612/15287823417831.jpg" alt>
          </a>
        </div>
      </div>
      <!--icon-->
      <div id="position">
        <a href="#" class></a>
        <a href="#" class></a>
        <a href="#" class></a>
      </div>
    </div>
    <div style="padding:0px;" class="indent">
      <div class="detail_title">诞辰</div>
      <p class="detail_text"></p>
      <div class="detail_price">
        <s>
          <span class="font_18 font_brown">￥</span>
          <span class="font_18 font_brown" id="haha1">218</span>
        </s>

        <p>
          会员优惠价：
          <span class="font_18 font_brown">￥</span>
          <span class="font_18 font_brown" id="haha">188.0</span>
        </p>
      </div>

      <input type="hidden" id="hahaz" value="188.0">
      <input type="hidden" id="wid" value>

      <ul class="select">
        <li class="select-list">
          <dl id="select1">
            <dt></dt>

            <dd class="select-all selected">
              <a href="javascript:void(0)" onclick="gaijia1('188.0','1.5','218')">1.5磅</a>
            </dd>

            <dd>
              <a href="javascript:void(0)" onclick="gaijia1('278.0','2.5','318')">2.5磅</a>
            </dd>
          </dl>
        </li>
      </ul>
      <input type="hidden" id="ceshibang89" value="1.5">
      <div class="add_chose">
        <a class="reduce" @click="reduce" href="javascript:void(0)"></a>
        <input
          type="text"
          name="qty_item_1"
          v-model="num"
          
          id="qty_item_1"
          onkeyup="setAmount.modify('#qty_item_1')"
          class="form5 left"
        >
        <a class="add" onclick="setAmount.add('#qty_item_1')" href="javascript:void(0)"></a>
        <div class="clear"></div>
      </div>
      <button class="button4" type="button" @click="tologin">立即购买</button>
      <button class="button4 peru" type="button" @click="tologin">加入购物车</button>

      <br>
      <br>

      <div style="width:320px;height: 150px;" id="sxcsz">
        <img
          src="http://www.sweet30.com/yyadmin/um/php/upload/20180113/15158219437157.jpg"
          style="float: left;width:150px;height: 130px;"
        >

        <ul class="details-options fl-left">
          <li class="details-options-size">
            <i></i>约6英寸
          </li>
          <li class="details-options-unmber">
            <i></i>适合3-5人分享
          </li>
          <li class="details-options-laid">
            <i></i>含5套餐具
          </li>
          <li class="details-options-time">
            <i></i>需提前3-6小时预订
          </li>
        </ul>
      </div>

      <div class="detail_title2">详细参数</div>
      <div class="parameter_title">
        优质原材料
        <span class="en">Best Ingredient</span>
      </div>

      <ul class="ingredient_list">
        <li>澳洲淡奶油
          <br>
          <img
            src="http://www.sweet30.com/yyadmin/um/php/upload/20180609/15285142291392.jpg"
            width="16"
            height="12"
          >
        </li>
        <li>韩国幼砂糖
          <br>
          <img
            src="http://www.sweet30.com/yyadmin/um/php/upload/20180609/15285142341293.jpg"
            width="16"
            height="12"
          >
        </li>
      </ul>

      <div class="clear"></div>

      <dl class="ingredient_list2"></dl>

      <div class="clear"></div>
      <div class="detail_pic"></div>
      <div class="detail_title2 t2">温馨提示</div>

      <div style="width:100%;">
        <!--<dl class="reminder_list">-->
        <dl
          class="prompt_list"
          style="margin: 0px; white-space: normal; padding: 0px; font-family: 微软雅黑; font-size: 14px; line-height: normal;"
        >
          <dt
            style="line-height: 21px; margin: 0px 30px 0px 0px; padding: 0px; float: left; height: 21px; width: 22px; text-align: center; background-image: url(&quot;http://www.sweet30.com/css/img/prompt_list_bg.png&quot;); background-position: 0% 0%; background-repeat: no-repeat;"
          >1&nbsp;&nbsp; &nbsp;</dt>
          <dd
            style="line-height: 21px; margin: 0px 0px 30px; padding: 0px; float: left; color: rgb(113, 53, 0);"
          >免费配送范围：大连市内四区-南至旅顺南路河口村-西至前黄线金川南路-北至新水泥路/岚岭路/南关岭路/姚家路/后盐- 东至前盐桥以内（包括金地艺境小区，福佳新城小区）。&nbsp;&nbsp; &nbsp;</dd>
        </dl>
        <p
          style="margin-top: 0px; margin-bottom: 10px; white-space: normal; padding: 0px; font-family: 微软雅黑; font-size: 14px; line-height: normal;"
        >
          <br
            class="clear"
            style="margin: 0px; padding: 0px; font-size: 0px; clear: both; line-height: 0px; height: 1px;"
          >
        </p>
        <dl
          class="prompt_list"
          style="margin: 0px; white-space: normal; padding: 0px; font-family: 微软雅黑; font-size: 14px; line-height: normal;"
        >
          <dt
            style="line-height: 21px; margin: 0px 30px 0px 0px; padding: 0px; float: left; height: 21px; width: 22px; text-align: center; background-image: url(&quot;http://www.sweet30.com/css/img/prompt_list_bg.png&quot;); background-position: 0% 0%; background-repeat: no-repeat;"
          >2&nbsp;&nbsp; &nbsp;</dt>
          <dd
            style="line-height: 21px; margin: 0px 0px 30px; padding: 0px; float: left; color: rgb(113, 53, 0);"
          >3.5磅蛋糕请提前24小时预订，蛋糕在收到后2-3小时内食用味道最佳。&nbsp;&nbsp; &nbsp;</dd>
        </dl>
        <p
          style="margin-top: 0px; margin-bottom: 10px; white-space: normal; padding: 0px; font-family: 微软雅黑; font-size: 14px; line-height: normal;"
        >
          <br
            class="clear"
            style="margin: 0px; padding: 0px; font-size: 0px; clear: both; line-height: 0px; height: 1px;"
          >
        </p>
        <dl
          class="prompt_list"
          style="margin: 0px; white-space: normal; padding: 0px; font-family: 微软雅黑; font-size: 14px; line-height: normal;"
        >
          <dt
            style="line-height: 21px; margin: 0px 30px 0px 0px; padding: 0px; float: left; height: 21px; width: 22px; text-align: center; background-image: url(&quot;http://www.sweet30.com/css/img/prompt_list_bg.png&quot;); background-position: 0% 0%; background-repeat: no-repeat;"
          >3&nbsp;&nbsp; &nbsp;</dt>
          <dd
            style="line-height: 21px; margin: 0px 0px 30px; padding: 0px; float: left; color: rgb(113, 53, 0);"
          >如对上述食材有过敏经历者，请选择其它款蛋糕。&nbsp;&nbsp; &nbsp;</dd>
        </dl>
        <p
          style="margin-top: 0px; margin-bottom: 10px; white-space: normal; padding: 0px; font-family: 微软雅黑; font-size: 14px; line-height: normal;"
        >
          <br
            class="clear"
            style="margin: 0px; padding: 0px; font-size: 0px; clear: both; line-height: 0px; height: 1px;"
          >
        </p>
        <dl
          class="prompt_list"
          style="margin: 0px; white-space: normal; padding: 0px; font-family: 微软雅黑; font-size: 14px; line-height: normal;"
        >
          <dl>
            <dt
              style="line-height: 21px; margin: 0px 30px 0px 0px; padding: 0px; float: left; height: 21px; width: 22px; text-align: center; background-image: url(&quot;http://www.sweet30.com/css/img/prompt_list_bg.png&quot;); background-position: 0% 0%; background-repeat: no-repeat;"
            >4&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;</dt>
            <dd
              style="line-height: 21px; margin: 0px 0px 30px; padding: 0px; float: left; color: rgb(113, 53, 0);"
            >
              蛋糕规格及免费配送餐具：
              <br style="margin: 0px; padding: 0px;">
              <span style="line-height: 21px;"></span>
              <span style="line-height: 21px;">1.5磅：直径约15*13.5（厘米），适合3-5人食用免费配送5套餐具</span>
              <br style="line-height: 21px; margin: 0px; padding: 0px;">
              <span style="line-height: 21px;">2.5磅：直径约20*15.5（厘米），适合5-8人食用免费配送10套餐具</span>
            </dd>
            <div>
              <span style="line-height: 21px;">
                <br>
              </span>
            </div>
          </dl>
        </dl>
        <p>
          <br>
        </p>
        <!--</dl>-->
      </div>

      <div class="clear"></div>
    </div>
  </article>
</template>
<script>
// 引入jQuery库
import $ from 'jquery'

let num = $("#qty_item_1").value

export default {
  methods:{
    data(){
      return 1
    },
    reduce(){
      return num--
    },
    tologin(){
      this.$router.push({ name: "login" })
    //  alert("请先登录")?this.$router.push({ name: "login" }):this.$router.push({ name: "darticle" })
      }
    }
};
</script>
 <style scoped>
.fl-left {
  margin-left: 10px;
  float: left;
  width: 140px;
  height: 130px;
}
.details-options li {
  margin-bottom: 10px;
  text-align: left;
}
.details-options li i {
  display: inline-block;
  width: 25px;
  height: 25px;
  vertical-align: middle;
  background-image: url(../../public/icon.png);
  background-size: 310px 120px;
  background-repeat: no-repeat;
}
.details-options li.details-options-size i {
  background-position: -210px -5px;
}
.details-options li.details-options-unmber i {
  background-position: -235px -5px;
}
.details-options li.details-options-laid i {
  background-position: -260px -5px;
}
.details-options li.details-options-time i {
  background-position: -285px -5px;
}
</style>
 


  //       function gaijia(x, y) {
  //         $("#haha").html(x * $("#qty_item_1").val());
  //         $("#hahaz").val(x);
  //         $("#wid").val(y);
  //         $("#ceshibang89").val(y);
  //       }

  //       function gaijia1(x, y, z) {
  //         $("#haha").html(x * $("#qty_item_1").val());
  //         $("#haha1").html(z);
  //         $("#hahaz").val(x);
  //         $("#wid").val(y);
  //         $("#ceshibang89").val(y);

  //         $.post(
  //           "yyadmin/qtpchuli.php",
  //           {
  //             erjifl: "zheshihuanshuxing",
  //             spbs: y,
  //             spxz: 1
  //           },
  //           function(data, status) {
  //             //alert(data);

  //             $("#sxcsz").html(data);
  //           }
  //         );
  //       }