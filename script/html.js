var Html = Class.create({
    initialize: function() {
        // 소개
        jQuery.ajax({
            type: "POST",
            url: "markdown.php",
            data: "type=intro",
            success: function(data) {
                jQuery('#intro-html').html(data);
            },
            error: function(e) {
                alert(e.responseText);
            }
        });

        //제품소개
        jQuery.ajax({
            type: "POST",
            url: "markdown.php",
            data: "type=product",
            success: function(data) {
                jQuery('#product-html').html(data);
            },
            error: function(e) {
                alert(e.responseText);
            }
        });

        // 시작
        jQuery.ajax({
            type: "POST",
            url: "markdown.php",
            data: "type=start",
            success: function(data) {
                jQuery('#start-html').html(data);
            },
            error: function(e) {
                alert(e.responseText);
            }
        });
		
		// AnyManager – System manager 
		jQuery.ajax({
            type: "POST",
            url: "markdown.php",
            data: "type=anymanager",
            success: function(data) {
                jQuery('#anymanager-html').html(data);
            },
            error: function(e) {
                alert(e.responseText);
            }
        });

		// 시스템 정보
		jQuery.ajax({
            type: "POST",
            url: "markdown.php",
            data: "type=systeminfo",
            success: function(data) {
                jQuery('#systeminfo-html').html(data);
            },
            error: function(e) {
                alert(e.responseText);
            }
        });
		// 볼륨 관리(LVM) 
		jQuery.ajax({
            type: "POST",
            url: "markdown.php",
            data: "type=volume",
            success: function(data) {
                jQuery('#volume-html').html(data);
            },
            error: function(e) {
                alert(e.responseText);
            }
        });

		// 네트워크 관리
		jQuery.ajax({
            type: "POST",
            url: "markdown.php",
            data: "type=network",
            success: function(data) {
                jQuery('#network-html').html(data);
            },
            error: function(e) {
                alert(e.responseText);
            }
        });

        // 계정
        jQuery.ajax({
            type: "POST",
            url: "markdown.php",
            data: "type=account",
            success: function(data) {
                jQuery('#account-html').html(data);
            },
            error: function(e) {
                alert(e.responseText);
            }
        });

        // 공유
        jQuery.ajax({
            type: "POST",
            url: "markdown.php",
            data: "type=share",
            success: function(data) {
                jQuery('#share-html').html(data);
            },
            error: function(e) {
                alert(e.responseText);
            }
        });

        // 시스템 관리
        jQuery.ajax({
            type: "POST",
            url: "markdown.php",
            data: "type=system",
            success: function(data) {
                jQuery('#system-html').html(data);
            },
            error: function(e) {
                alert(e.responseText);
            }
        });

        // 장애 대응: 공통 사항
        jQuery.ajax({
            type: "POST",
            url: "markdown.php",
            data: "type=troubleshoot_common",
            success: function(data) {
                jQuery('#troubleshoot_common-html').html(data);
            },
            error: function(e) {
                alert(e.responseText);
            }
        });

        // 장애 대응: 용어정리
        jQuery.ajax({
            type: "POST",
            url: "markdown.php",
            data: "type=troubleshoot_terminology",
            success: function(data) {
                jQuery('#troubleshoot_terminology-html').html(data);
            },
            error: function(e) {
                alert(e.responseText);
            }
        });

        if(window.location.hash == '')
        {
            document.getElementById('intro').style.display = "block";
        }

        this.contents = $('contents');
		var allElements = document.getElementsByTagName('label');
        for (var i = 0, n = allElements.length; i < n; i++) {
            if (allElements[i].clientHeight > 50) {
                allElements[i].style.fontSize = '14px';
            }
        }
        var allElements = document.getElementsByTagName('a');
        for (var i = 0, n = allElements.length; i < n; i++) {
            if (allElements[i].clientHeight > 50) {
                allElements[i].style.fontSize = '12px';
            }
        }

        jQuery('.tabs .tab-links a').on('click', function(e) {
            var currentAttrValue = jQuery(this).attr('href');
            // Show/Hide Tabs
            jQuery('.tabs ' + currentAttrValue).show().siblings().hide();

            jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

            var x = document.getElementsByClassName("content");
            for (var i = 0; i < x.length; i++) {
               x[i].style.display = "none";
               x[i].removeClassName('selected_chapter');
            }
            if(currentAttrValue == '#AdminManual')
            {
                document.getElementById('intro').style.display = "block";
                window.scroll(0, 0);
            }
            else if(currentAttrValue == '#OperationManual')
            {
                document.getElementById('troubleshoot_common').style.display = "block";
                window.scroll(0, 0);
            }
            e.preventDefault();
        });

        this.contents.on('click', 'li', this.click.bind(this));
        $('content').on('click', 'a', this.referenceClicked.bind(this));
        this.load();
        this.windowResized();
        window.onresize = this.windowResized.bind(this);

        if(typeof this.hash === 'undefined')
        {
            this.hash = '';
        }
        else
        {
            this.hash = window.location.hash;
        }

        new PeriodicalExecuter(function(pe) {
            var h = window.location.hash;
            if (h && this.hash !== h) {
                this.load();
                this.hash = h;
            }
        }.bind(this), 0.5);
    },

    load: function() {
        var a;
        var hash = decodeURIComponent(window.location.hash);
        if (hash) {
            hash = hash.substring(1);
            a = this.contents.select('a').find(function(each) {
                return each.getAttribute('href').endsWith(hash);
            });
            if (a) {
                this.showChapter(hash);
                var li = a.up('li');
                this.select(li);
                while (li) {
                    if (li.hasClassName('closed')) {
                        li.removeClassName('closed');
                        li.addClassName('opened');
                    }
                    li = li.up('li');
                }
            } else if (hash) {
                this.showChapter(hash);
            }
        } else {
            a = this.contents.down('a');
            this.showChapter(this.getHref(a));
            this.select(a.up('li'));
        }
    },

    showChapter: function(href) {
        $('content').select('.selected_chapter').each(function(each) {
            each.removeClassName('selected_chapter');
        });

        var i = href.indexOf('.');
        var chapter = $(href.substring(0, i));
        if (chapter) {
            chapter.addClassName('selected_chapter');
            i = href.indexOf('#');
            if (i !== -1) {
                var element = $(href.substring(i + 1));
                if (element) {
                    element.scrollTo();
                    this.fadeIn(element);
                }
            } else {
                window.scroll(0, 0);
            }
        }
    },

    fadeIn: function(element) {
        if(element.getOpacity() == 1)
        {
            element.setOpacity(0.1);
            var opacity = 10;
            new PeriodicalExecuter(function(pe) {
                if (opacity > 100) {
                    pe.stop();
                    element.setOpacity(1);
                } else {
                    element.setOpacity(opacity / 100);
                    opacity += 20;
                }
            }.bind(this), 0.1);
        }
    },

    windowResized: function() {
        this.contents.setStyle({
            height: document.viewport.getHeight() + 'px'
        });
    },

    click: function(event) {
        var a = event.findElement('a');
        if (a) {
            this.select(a.up('li'));
            var href = this.getHref(a);
            if(href == '#AdminManual')
            {
                document.getElementById('intro').style.display = "block";
                window.scroll(0, 0);
            }
            else if(href == '#OperationManual')
            {
                document.getElementById('troubleshoot_common').style.display = "block";
                window.scroll(0, 0);
            }
            else
            {
                document.getElementById('intro').style.display = "none";
                document.getElementById('troubleshoot_common').style.display = "none";
                window.location.hash = href;
                this.load();
            }
        }
        event.stop();
    },

    referenceClicked: function(event) {
        if (!event.findElement('#index_group')) {
            window.location.hash = this.getHref(event.findElement('a'));
            this.load();
        } else {
            $(this.getHref(event.findElement('a')).substring(1)).scrollTo();
        }
        event.stop();
    },

    select: function(item) {
        if (this.selected) {
            this.selected.removeClassName('selected');
        }
        item.addClassName('selected');
        this.selected = item;
    },

    getHref: function(a) {
        var result = a.getAttribute('href');
        var i = result.indexOf('/');
        return i === -1 ? result : result.substring(i + 1);
    }
});

document.observe('dom:loaded', function(event) {
    new Html();
    new Search();
});
