// Initalize AOS 
AOS.init();

// Initalize Counter
function count($this) {
    var current = parseInt($this.html(), 10);
    current = current + 1;
    $this.html(++current);
    if (current > $this.data('count')) {
        $this.html($this.data('count'));
    } else {
        setTimeout(function() {
            count($this)
        }, 30);
    }
}

$(".stat-count").each(function() {
    $(this).data('count', parseInt($(this).html(), 10));
    $(this).html('0');
    count($(this));
});

// Start Sub Menu
let barsBtn = document.querySelector(".bars-btn"),
    closebtn = document.querySelector(".close-btn"),
    subMenu = document.querySelector(".sub-menu");

barsBtn.addEventListener("click", function() {
    subMenu.classList.toggle("hidden");
    barsBtn.classList.toggle("hidden");
    closebtn.classList.toggle("hidden");
});

closebtn.addEventListener("click", function() {
    subMenu.classList.toggle("hidden");
    barsBtn.classList.toggle("hidden");
    closebtn.classList.toggle("hidden");
});
// End Sub Menu