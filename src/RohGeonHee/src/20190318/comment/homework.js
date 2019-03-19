
var add = document.getElementById('btn_write');
var linkList = document.getElementById('list_num');
var listBody = document.getElementById('list_tbody');
var btnDepthComment = document.getElementById('btn_depth');

var listWrite = document.getElementById('list_write');
var listTitle = document.getElementById('list_title');
var listTime = document.getElementById('list_time');

var listInfo = document.getElementById('info_box_notice');

var depthName = document.getElementById('info_list_name');
var depthInfo = document.getElementById('info_list_comment');
var depthTime = document.getElementById('info_list_time');

var listCount = document.getElementById('list_count');

add.addEventListener("click" , function () {

    var sendName = document.getElementById('name_input').value;
    listWrite = sendName;

    var sendTitle = document.getElementById('title_input').value;
    listTitle = sendTitle;

    var now = new Date();
    listTime = now.toString();

    var sendInfo = document.getElementById('comment_textarea').value;
    listInfo = sendInfo;

    var test = document.createElement('tr')
    test.id = "list_num";
    test.innerHTML = `

        <td>
            <div>
                <a id="list_title">${listTitle}</a>
            </div>
        </td>
        <td>
            <div id="list_time">${listTime}</div>
        </td>
        <td>
            <div id="list_write">${listWrite}</div>
        </td>
    `;

    var test2 = document.getElementById('info_box_notice')
    test2.innerHTML = listInfo;

    listBody.appendChild(test);
})

linkList.addEventListener("click", function() {
    alert("aa");
    var openInfo = document.getElementById('info_box')
    openInfo.style.display = "block";
});

btnDepthComment.addEventListener("click", function() {
    var sendName = document.getElementById('name_input');
    depthName.innerHTML = sendName.value;

    var now = new Date();
    depthTime.innerHTML = now.toString();

    var depthCommnet = document.getElementById('depth_comment_input').value;
    depthInfo.innerHTML = depthCommnet;
});

$( document ).ready( function() {
    $( add ).click( function() {
        var n = $( 'tr' ).length - 2;
        $( listCount ).after( '[' + n + ']' );
        var n = '';
    } );
} );



//
// var now = new Date();
// document.write(now.toString());
