$(function() {
    function renderBooks(dataArr, opts) {
        if (dataArr && dataArr.length) {
            var bookItemTpl = Handlebars.compile($("#book-item-tpl").html());
            var bookItemHtml = bookItemTpl({
                items: dataArr
            });
            if (opts.currentPage === 1) {
                $("#bookContainer").html(bookItemHtml);
            } else {
                $("#bookContainer").append(bookItemHtml);
            }

            // 点击标题
            // $(".book-item-container .title-link").click(function(event) {
            //     loadMainView(this.href);
            // });

            // 点击作者        
            // $(".book-item-container .author").click(function(event) {
            //     loadMainView("user/userAll.jsp?userId=" + $(this).find(".author-link").attr("user_id"));
            // });
        }
    }
    // 渲染书籍分类菜单
    function renderCategoryMenus(param) {
        $.ajax({
            url: 'getCategoryByPid.action',
            data: {
                pId: '7'
            }
        }).done(function(serverData, textStatus, jqXHR) {
            var data = eval("(" + jqXHR.responseText + ")");
            if (data && data.length) {

                var categoryMenus = Handlebars.compile($("#category-menu-item-tpl").html());
                var categoryMenusHtml = categoryMenus({
                    items: data
                });
                $("#book-category-menu .dropdown-menu").append(categoryMenusHtml);
                $("#book-category-menu .dropdown-menu a").click(function(event) {
                    param.termPath = $(this).attr("term_path");
                    $("#book-category-btn").html($(this).text());
                    $("#loadMoreBtn").autoLoader("setParam", param);
                    $("#loadMoreBtn").autoLoader("reset");
                });
            }
        }).fail(function() {});
    }

    // 注册排序按钮
    function registerSortBtn(param) {
        var btnClick = function(event) {
            var btn = $(this),
                sortKey = btn.attr("sort_key"),
                downArrow = btn.find(".glyphicon-arrow-down"),
                upArrow = btn.find(".glyphicon-arrow-up");
            if (param[sortKey] === '1') {
                param[sortKey] = '0';
                upArrow.show();
                downArrow.hide();
            } else {
                param[sortKey] = '1';
                downArrow.show();
                upArrow.hide();
            }

            $("#loadMoreBtn").autoLoader("setParam", param);
            $("#loadMoreBtn").autoLoader("reset");
        };

        $("#book-sort-btn-group button").click(btnClick);
    }

    // 渲染新书推荐
    function renderNewBookIntro() {
        $.ajax({
            url: 'getBookAndAuthorByStatus.action',
            data: {
                status: '9',
                bookMaterial: '1',
                start: '0',
                limit: '15'
            }
        }).done(function(serverData, textStatus, jqXHR) {
            var data = eval("(" + jqXHR.responseText + ")");
            if (data && data.length) {
                var newBookIntroBarHtml = commonPanelTpl({
                    id: "newBookIntroContainer",
                    title: "新书预告"
                });
                $("#bookSiderBar").append(newBookIntroBarHtml);

                var header = data.splice(0, 1)[0];
                var bookIntroBar = Handlebars.compile($("#new-book-intro").html());
                var bookIntroHtml = bookIntroBar({
                    header: header,
                    items: data
                });
                $("#newBookIntroContainer .data-panel-content").append(bookIntroHtml);
            }
        }).fail(function() {});
    }
    renderNewBookIntro();

    // 默认排序设置全是降序
    var param = {
        length: '300',
        termPath: '/1/7',
        pubTime: '1',
        origPrice: '1',
        collectTime: '1'
    };

    renderCategoryMenus(param);
    registerSortBtn(param);

    $("#loadMoreBtn").autoLoader("init", {
        url: 'getBookByCategoryOnOrder.action',
        param: param,
        resetHandler: function() {
            $("#bookContainer").html("");
        },
        successHandler: function(data, opts) {
            renderBooks(data, opts);
        }
    });
});