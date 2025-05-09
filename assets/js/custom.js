document.addEventListener("DOMContentLoaded", function() {
    var isEnglish = window.location.pathname.startsWith('/en/');
    var navTitles = document.querySelectorAll('.md-nav__title');
    var navItems = document.querySelectorAll('nav li');

    // 合并中英文导航项，并标记它们的显示状态
    var navMap = new Map([
        ...['套件资料', '软件配置', '基础使用', '应用功能', '更多内容'].map(item => [item, !isEnglish]),
        ...['项目主页', '使用指引', '硬件组装', '快速上手', '常见问题', '教学课程', '参考资料', '更多套件', '社区交流', '关于我们'].map(item => [item, !isEnglish]),
        ...['Kit Information', 'Software Configuration', 'Basic Usage', 'Application Features', 'More Content'].map(item => [item, isEnglish]),
        ...['Project Home', 'User Guide', 'Hardware Assembly', 'Quick Start', 'FAQ', 'Teaching Courses', 'Reference Materials', 'More Kits', 'Community Exchange', 'About Us'].map(item => [item, isEnglish])
    ]);

    // 封装设置元素显示状态的函数
    function setElementVisibility(items) {
        items.forEach(function(item) {
            var textContent = item.textContent.trim();
            if (navMap.has(textContent)) {
                item.closest('li').style.display = navMap.get(textContent) ? '' : 'none';
            }
        });
    }

    var siteNameElement = document.querySelector('.md-header__title');
    if (siteNameElement) {
        var isEnglish = window.location.pathname.startsWith('/en/');
        siteNameElement.textContent = isEnglish ? 'OriginBot Open Source Kit' : 'OriginBot智能机器人开源套件';
    }
    var siteNameElement_ = document.querySelector('.md-nav__title');
    if (siteNameElement_) {
        var isEnglish = window.location.pathname.startsWith('/en/');
        siteNameElement_.textContent = isEnglish ? 'OriginBot Open Source Kit' : 'OriginBot智能机器人开源套件';
    }

    // 设置导航项的显示状态
    setElementVisibility(navTitles);
    setElementVisibility(navItems);
});