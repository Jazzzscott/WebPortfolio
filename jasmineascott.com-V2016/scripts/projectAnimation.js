  

  jQuery(".timeline-item").hover(function () {
                jQuery(".timeline-item").removeClass("active");
                jQuery(this).toggleClass("active");
                jQuery(this).prev(".timeline-item").toggleClass("close");
                jQuery(this).next(".timeline-item").toggleClass("close");
            });