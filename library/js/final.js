
function carousel_bg() {
    var bgimgs = [ 
    'body-bg-1.jpg', 'body-bg-2.jpg', 'body-bg-3.jpg',
    'body-bg-4.jpg','body-bg-5.jpg','body-bg-6.jpg', 
    'body-bg-7.jpg', 'body-bg-8.jpg','body-bg-9.jpg',
    'body-bg-10.jpg' ];
    id=Math.floor(Math.random()*bgimgs.length)
    var img = bgimgs[id];
    
    jQuery('#body').css("background-image", "url(./_wp/wp-content/themes/bones/library/images/"+img+")");

    id=Math.floor(Math.random()*bgimgs.length)

    setTimeout("carousel_bg("+id+")", 60000);
  }

jQuery(function(){
	jQuery(window).load(function() {
    	carousel_bg();
    });
});