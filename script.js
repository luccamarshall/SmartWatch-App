
function show(clicked_id) {

    const imageId = clicked_id + '1';

    const isShowing = document.getElementById(imageId).style.display === 'block';
    
    if (isShowing) { 
        document.getElementById(imageId).style.display = 'none';
    } else {
        document.getElementById(imageId)
            .style.display = "block";

        document.getElementById(imageId)
            .style.display = "absolute";
    }
}




