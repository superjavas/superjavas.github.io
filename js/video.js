function myFn () {
    $(document).ready(function () {
        var insertText = "<video id=\"index-video\" autoplay=\"\" loop=\"\" muted=\"\" src=\"https://txmov2.a.yximgs.com/upic/2021/09/30/15/BMjAyMTA5MzAxNTE5MDhfMTg1ODk2MDg4N181ODA5MjQ1NDkyMV8xXzM=_b_Bef514871cf947c46c11bc54a3ed3faa9.mp4?pkey=AAWo-kOQESq9j_AMCO-BT6jTPS090PuVHWtyuSQ8cddkgMmI3V-P9uWMDY13QrPuCjtWVbch_01wRcj6Rtm5w0AkLhgVTMSceLLiRYjlWUfLDNNLX3jISKEscl9uNXUnYcM&amp;tag=1-1632986688-xpcwebprofile-0-ongrobirtl-58c917acab52d13f&amp;clientCacheKey=3xajcj9u8fubzm4_b.mp4\">\n" +
            "</video>";
        // document.getElementsByClassName("full_page").innerHTML = document.getElementsByClassName("full_page").innerHTML + insertText;
        var full_page = document.getElementsByClassName("full_page");
        if (full_page.length != 0) {
            full_page[0].innerHTML=full_page[0].innerHTML+insertText
        }
        var full_page2 = document.getElementsByClassName("full_page");
        if (full_page2.length != 0) {
            full_page2[0].style.background = "transparent";
        }
});
}
btf.isJqueryLoad(myFn)