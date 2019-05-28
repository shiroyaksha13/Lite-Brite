function main() {
    $('.select-color').on('click', function() {
        var selectedColor = $(this).attr('class');
        switch (selectedColor) {
            case "select-color cyan not-selected":
                // set color on box div
                colorClass = 'cyan';
                break;
            case "select-color yellow not-selected":
                // set color in box div
                colorClass = 'yellow';
                break;
            case "select-color magenta not-selected":
                // set color in box div
                colorClass = 'magenta';
                break;
        }
        
        $(this).removeClass('not-selected');
        $(this).siblings().addClass('not-selected');
    });
    
    var colorClass = "";
    $('.box').on('click', function() {
        $(this).toggleClass(colorClass);
    });
    
    $('.toggle-blink').on('click', function() {
        if (colorClass) {
            // the rest of the code in here
            $(this).toggleClass('opacity');
            setInterval(function() {
                // do something here repeatedly
                $('.box.cyan, .box.yellow, .box.magenta').toggleClass('blink');
            }, 300);
        }
    });
}
  
$(document).ready(main);