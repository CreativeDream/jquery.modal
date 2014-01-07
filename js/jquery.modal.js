/*!
 * jQuery Modal
 * Copyright (c) 2014 CreativeDream
 * Website http://creativedream.net/plugins
 * Version: 1.0 (07-01-2014)
 * Requires: jQuery v1.7.1 or later 
*/
function modal(e) {
    return $.cModal(e)
}(function (e) {
    e.cModal = function (t) {
        var n = {
            type: "default",
            title: "title",
            text: null,
            buttons: [{
                text: "OK",
                val: true,
                onClick: function (e) {
                    return true
                }
            }],
            center: true,
            autoclose: false,
            callback: null,
            onShow: null,
            closeClick: true,
            theme: "default",
            background: "rgba(0,0,0,0.5)",
            zIndex: 1050,
            buttonText: {
                ok: "OK",
                yes: "Yes",
                no: "No",
                cancel: "Cancel"
            },
            template: '<div class="modal-box"><div class="modal-title"><a class="modal-close-btn"></a></div><div class="modal-text"></div><div class="modal-buttons"></div></div>',
            _classes: {
                box: ".modal-box",
                title: ".modal-title",
                content: ".modal-text",
                buttons: ".modal-buttons",
                closebtn: ".modal-close-btn"
            }
        }, t = e.extend({}, n, t),
            r, i = e("<div id='modal-window' />").hide();
        mBox = t._classes.box, template = i.append(t.template), that = {
            init: function () {
                e("#modal-window").remove();
                i.css({
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    "z-index": t.zIndex,
                    overflow: "auto"
                });
                that._modalShow();
                that._modalConent();
                t.onShow != null ? t.onShow(template) : null;
                i.on("click", "a.modal-btn", function (t) {
                    that._modalBtn(e(this))
                }).on("click", t._classes.closebtn, function (e) {
                    that._modalHide()
                }).click(function (e) {
                    if (t.closeClick) {
                        if (e.target.id == "modal-window") {
                            that._modalHide()
                        }
                    }
                });
                e(window).keyup(function (e) {
                    if (e.keyCode == 13) {
                        that._modalBtn(i.find(t._classes.buttons + " a.modal-btn:first-child"))
                    }
                    if (e.keyCode == 27) {
                        that._modalHide()
                    }
                })
            },
            _modalShow: function () {
                e("body").css("overflow", "hidden").append(template)
            },
            _modalHide: function (n) {
                r = typeof r == "undefined" ? false : r;
                if (!n) {
                    i.fadeOut(200, function () {
                        t.callback != null ? t.callback(r) : null;
                        e(this).remove();
                        e("body").css("overflow", "auto")
                    });
                    topPercent = 100 * parseFloat(e(mBox).css("top")) / parseFloat(e(mBox).parent().css("height"));
                    e(mBox).animate({
                        top: topPercent + 5 + "%"
                    }, "fast")
                } else {
                    setTimeout(function () {
                        i.fadeOut(300, function () {
                            t.callback != null ? t.callback(r) : null;
                            e(this).remove();
                            e("body").css("overflow", "auto")
                        });
                        topPercent = 100 * parseFloat(e(mBox).css("top")) / parseFloat(e(mBox).parent().css("height"));
                        e(mBox).animate({
                            top: topPercent + 5 + "%"
                        }, "fast")
                    }, n)

                }
            },
            _modalConent: function () {
                _title = t._classes.title;
                _content = t._classes.content;
                _buttons = t._classes.buttons;
                _buttonsText = t.buttonText;
                _types = ["alert", "confirm", "prompt"];
                if (t.theme && t.theme != null && t.theme != "default") {
                    e(mBox).addClass("modal-theme-" + t.theme)
                }
                if (t.background && t.background != null) {
                    i.css("background-color", t.background)
                }
                if (t.title || t.title != null) {
                    e(_title).prepend(t.title);
                    if (e.inArray(t.type, _types) == -1) {
                        e(_title).addClass(t.type)
                    }
                } else {
                    e(_title).remove()
                }
                t.type == "prompt" ? t.text += '<input type="text" name="modal-prompt-input" class="modal-prompt-input" />' : "";
                e(_content).html(t.text);
                if (t.buttons || t.buttons != null) {
                    buttons = "";
                    switch (t.type) {
                    case "alert":
                        buttons = '<a class="modal-btn">' + _buttonsText.ok + "</a>";
                        break;
                    case "confirm":
                        buttons = '<a class="modal-btn">' + _buttonsText.yes + '</a><a class="modal-btn cancel">' + _buttonsText.no + "</a>";
                        break;
                    case "prompt":
                        buttons = '<a class="modal-btn">' + _buttonsText.ok + '</a><a class="modal-btn cancel">' + _buttonsText.cancel + "</a>";
                        break;
                    default:
                        if (t.buttons.length > 0 && e.isArray(t.buttons)) {
                            e.each(t.buttons, function (e, t) {
                                addClass = t["addClass"] && typeof t["addClass"] != "undefined" ? " " + t["addClass"] : "";
                                buttons += '<a class="modal-btn' + addClass + '">' + t["text"] + "</a>"
                            })
                        } else {
                            buttons += '<a class="modal-btn">' + _buttonsText.ok + "</a>"
                        }
                    }
                    e(_buttons).html(buttons)
                } else {
                    e(_buttons).remove()
                }
                i.fadeIn(200);
                that._position();
                if (t.autoclose) {
                    time = t.buttons || t.buttons != null ? e(_content).text().length * 32 : 900;
                    that._modalHide(time < 900 ? 900 : time)
                }
            },
            _position: function () {
                if (t.center) {
                    data = {
                        top: 50,
                        left: 50,
                        marginTop: -e(mBox).outerHeight() / 2,
                        marginLeft: -e(mBox).outerWidth() / 2
                    };
                    if (e(window).height() < e(mBox).outerHeight()) {
                        data.top = 1;
                        data.marginTop = 0
                    }
                    e(mBox).css({
                        top: data.top - 5 + "%",
                        left: data.left + "%",
                        "margin-top": data.marginTop,
                        "margin-left": data.marginLeft
                    }).animate({
                        top: data.top + "%"
                    }, "fast")
                } else {
                    data = {
                        top: 10,
                        left: 50,
                        marginTop: 0,
                        marginLeft: -e(mBox).outerWidth() / 2
                    };
                    e(mBox).css({
                        top: data.top - 5 + "%",
                        left: data.left + "%",
                        "margin-top": data.marginTop,
                        "margin-left": data.marginLeft
                    }).animate({
                        top: data.top + "%"
                    }, "fast")
                }
            },
            _modalBtn: function (n) {
                var s = false,
                    o = t.type,
                    u = n.index(),
                    a = t.buttons[u];
                if (e.inArray(o, ["alert", "confirm", "prompt"]) > -1) {
                    s = u == 0 ? true : false;
                    if (o == "prompt") {
                        s = s && i.find("input.modal-prompt-input").size() > 0 && i.find("input.modal-prompt-input").val().length != 0 ? i.find("input.modal-prompt-input").val() : false
                    }
                    that._modalHide()
                } else {
                    s = a && a["val"] ? a["val"] : true;
                    if (!a["onClick"] || a["onClick"]({
                        val: s,
                        bObj: n,
                        bOpts: a,
                        modal: template
                    })) {
                        that._modalHide()
                    }
                }
                r = s
            }
        };
        that.init();
        return true
    }
})(jQuery)
