<template>
  <div>
    <article id="content">
      <div class="line2">
        <div class="indent">
          <input
            name="a1"
            type="text"
            class="form4 name mtb_15 inputtext"
            value="请输入手机号"
            onclick="if(value==defaultValue){value='';this.style.color='#AB977E'}"
            onblur="if(!value){value=defaultValue;this.style.color='#AB977E'}"
          >
          <input
            name="a3"
            type="password"
            class="form4 pw mtb_15 inputpassword"
            value
            onclick="if(value==defaultValue){value='';this.style.color='#AB977E'}"
            onblur="if(!value){value=defaultValue;this.style.color='#AB977E'}"
          >
          <input
            name="qa3"
            type="password"
            class="form4 pw2 mtb_15 inputpassword"
            value
            onclick="if(value==defaultValue){value='';this.style.color='#AB977E'}"
            onblur="if(!value){value=defaultValue;this.style.color='#AB977E'}"
          >
          <div class="mb_15 font_brown">
            <!--<div class="cbt" name="check"  type="checkbox" val="1"></div>
            显示密码-->
            <div class="cbt ml_15 cb_active cb" name="check" type="checkbox" val="1">
              <input type="hidden" name="check" value="1">
            </div>同意思味特—客服协议
            <span id="gwxymty" style="color:#909;"></span>
          </div>
          <input type="hidden" value="false" id="tyf">
          <button type="button" class="button3 mb_15" id="zhuceha">注 册</button>
          <div class="al_right mb_15 font_brown">已有账号现在
            <span class="font_red">
              <a href="#">登录</a>
            </span>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>