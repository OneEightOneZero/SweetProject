jQuery(function ($) {
    //实例对象调用源性对象里面的方法：传入对象，对象包含imgs的路径（数组存放）
    $('.box').xCarousel({
        width: 320, height: 320,
        type: 'fade',
        imgs: ['img/g1.jpg', 'img/g2.jpg', 'img/g3.jpg', 'img/g4.jpg', 'img/g5.jpg']
    });
});
//1.安全使用$,且让函数内部能使用$。函数执行完将this返回。this为（jq对象，例如该案例this为$('.box'))
(function ($) {
    $.fn.xCarousel = function (options) {
        let defaults = {
            width: 800,
            height: 320,
            index: 0,
            duration: 1000,
            type: 'vertical',//horizontal,fade
            imgs: []//保存图片路径
        }
        let opt = Object.assign({}, defaults, options);
        opt.len = opt.imgs.length;
        let $ul
        let lastIndex = opt.index
        //2.初始化方法
        let init = () => {
            // 2.2应用插件样式
            this.addClass('xcarousel');
            this.width(opt.width);
            this.height(opt.height);
            //2.1生成元素，追加到this对象里面
            $ul = $('<ul/>');
            let $res = $.map(opt.imgs, function (item) {
                let $li = $('<li/>');
                let $img = $('<img/>');
                $img.attr('src', item).appendTo($li);
                return $li;
            });
            $ul.append($res);
            $ul.appendTo(this);
            //2.4 水平滚动必须设置ul的宽度、及类名
            if (opt.type === 'horizontal') {
                $ul.addClass('horizontal');
                $ul.width(opt.width * opt.len);
            }
            //2.5 淡入淡出必须设置必须设置ul的宽高、及类名
            else if (opt.type === 'fade') {
                $ul.addClass('fade');
                $ul.css({
                    width: opt.width,
                    height: opt.height
                });
                //一开始，除了当前索引以外的其他所有li的透明度设成0
                $ul.children('li').eq(opt.index).siblings('li').css('opacity', 0);
            }
            //2.3.一开始执行move，移入停止定时器，移出执行move（）
            move();
            this.on('mouseenter', () => {
                clearInterval(this.timer);
            }).on('mouseleave', () => {
                move();
            })
        }
        //3.move方法、show方法
        let move = () => {
            this.timer = setInterval(() => {
                opt.index++;
                show();
            }, opt.duration);
        };
        let show = function () {
            if (opt.index > opt.len - 1) {
                opt.index = 0;
            } else if (opt.index < 0) {
                opt.index = opt.len - 1
            }
            let obj = {};
            //当opt类型为垂直，切换top值。opt.type为水平轮播，切换left值。用对象存储，作为animate参数
            if (opt.type === 'vertical') {
                obj.top = -opt.height * opt.index;
                $ul.animate(obj)
            } else if (opt.type === 'horizontal') {
                obj.left = -opt.width * opt.index;
                $ul.animate(obj)
            } else if (opt.type === 'fade') {
                //eq()获取当前索引对应的li，透明度变成1。
                $ul.children('li').eq(opt.index).animate({ opacity: 1 }, function () {
                    lastIndex = opt.index;
                });
                //上一个索引的li，透明度变成0。执行完成后，将当前索引作为上一次索引值存储起来
                $ul.children('li').eq(lastIndex).animate({ opacity: 0 }, function () {
                    lastIndex = opt.index;
                });

            }
        }
        //执行init方法
        init();
        return this
    }
})(jQuery) 