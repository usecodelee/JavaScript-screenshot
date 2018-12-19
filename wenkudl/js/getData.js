(function() {
    let url1 = window.location.href;
    let reg = /wenku.baidu.com\/view\//;
    if (reg.test(url1)) {
        let countDom = document.getElementsByClassName('page-count')[0];
        let count = countDom.innerHTML.replace(/\//, '');
        let result = '';
        //获取到10页
        document.documentElement.scrollTop = 0;
        getPageContent(1);
        //获取页面内容
        function getPageContent(index) {
            setTimeout(() => {
                //解析其中的内容
                let id = 'pageNo-' + index;
                let byiddom = document.getElementById(id);
                let ele_p = byiddom.getElementsByTagName('p');
                for (let i = 0; i < ele_p.length; i++) {
                    let flag = addlf(ele_p[i]);
                    if (flag == 1) {} else if (flag == 2) {
                        result += '\n';
                    } else if (flag == 3) {
                        result += ele_p[i].innerHTML + '\n';
                    }
                    // 换行
                    else if (flag == 1) {
                        result += ele_p[i].innerHTML;
                    }
                }
                //解析完毕以后：滚动
                document.documentElement.scrollTop = (index - 1) * 1500;
                //第二页跳转
                layer(index, count);
                if (index < count) {
                    getPageContent(index + 1);
                } else { //全部解析完毕，下载
                    // return;
                    let fileName = Date.now() + ".doc";
                    var blob = new Blob(["\uFEFF" + result], { type: "text/doc;" });
                    var downloadLink = document.createElement("a");
                    if ("download" in downloadLink) {
                        var url = URL.createObjectURL(blob);
                        downloadLink.href = url;
                        downloadLink.download = fileName;
                        downloadLink.hidden = true;
                        document.body.appendChild(downloadLink);
                        downloadLink.click();
                        document.body.removeChild(downloadLink);
                    } else {
                        if (navigator.msSaveBlob) {
                            //IE10+
                            navigator.msSaveBlob(blob, fileName);
                        }
                    }
                }
            }, 500);
        }

        function addlf(ele) {
            // console.log(ele.innerHTML);
            let attr = ele.getAttribute('style');
            let str = ele.innerHTML;
            str = str.replace(/\s*/g, "");
            let reg2 = /;false/;
            let hh = reg2.test(attr);
            if (hh && (!str)) {
                return 2;
            } else if ((!hh) && (!str)) {
                return 1;
            } else if (hh && str) {
                return 3;
            } else if (!hh && str) {} {
                return 4;
            }
        }

        // 蒙层
        function layer(index, max) {
            let Progress_bar_overlay = document.getElementById("Progress_bar_overlay");
            if (Progress_bar_overlay) {
                try {
                    Progress_bar_overlay.parentNode.removeChild(Progress_bar_overlay);
                } catch (error) {

                }

            }
            let Progress_bar_ov = document.getElementById("Progress_bar_ov");
            if (Progress_bar_ov) {
                try {
                    Progress_bar_ov.parentNode.removeChild(Progress_bar_ov);
                } catch (error) {

                }

            }
            if (index == max) {
                cancelDisMouseWheel();
                try {
                    Progress_bar_overlay.parentNode.removeChild(Progress_bar_overlay);
                    Progress_bar_ov.parentNode.removeChild(Progress_bar_ov);
                } catch (error) {

                }

                return;
            } else {
                let mchtml = `<div id="Progress_bar_overlay" style="position: fixed;z-index: 99997;top: 0;bottom: 0;left: 0;right: 0;opacity: .5;background-color: #000;"></div>`;
                let prhtml = `<div id="Progress_bar_ov" style="position: fixed;z-index: 99998;top: 50%;left: 50%;transform: translate(-50%, -50%);">
            <progress max=${max} value=${index} style="width: 500px;height: 30px;border: none;"></progress></div>`;
                let divdom = document.createElement("div");
                divdom.innerHTML = mchtml + prhtml;
                document.getElementsByTagName('body')[0].append(divdom);
                disabledMouseWheel(); //阻止滚动
            }
        }

        //阻止浏览器事件
        function disabledMouseWheel() {
            document.addEventListener('DOMMouseScroll', scrollFunc, false);
            document.addEventListener('mousewheel', scrollFunc, false);
        }
        //取消阻止浏览器事件
        function cancelDisMouseWheel() {
            document.removeEventListener('DOMMouseScroll', scrollFunc, false);
            document.removeEventListener('mousewheel', scrollFunc, false);
        }

        function scrollFunc(evt) {
            evt = evt || window.event;
            if (evt.preventDefault) {
                // Firefox  
                evt.preventDefault();
                evt.stopPropagation();
            } else {
                // IE  
                evt.cancelBubble = true;
                evt.returnValue = false;
            }
            return false;
        }
    }
})()

// style里面最后一个参数是false就要换行
//1 换行  2 删除 3 不换行

// 1. 全是ensp 没有false删除并且不换行
// 2. 全是ensp，有false 删除并且换行
// 3. str有值，有false 换行
// 4. str有值，没有false 不换行