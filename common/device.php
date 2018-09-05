<?php  //定義那些User Agent String屬於手機瀏覽
function check_mobile(){
    $regex_match="/(nokia|iphone|android|motorola|^mot\-|softbank|foma|docomo|kddi|up\.browser|up\.link|";
    $regex_match.="htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|";
    $regex_match.="blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam\-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|";
    $regex_match.="symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte\-|longcos|pantech|gionee|^sie\-|portalmmm|";
    $regex_match.="jig\s browser|hiptop|^ucweb|^benq|haier|^lct|opera\s*mobi|opera\*mini|320x320|240x320|176x220";
    $regex_match.=")/i";
    return preg_match($regex_match, strtolower($_SERVER['HTTP_USER_AGENT']));
} ?>
<?php if( check_mobile() ) { ?>
 哈囉，你現在正在使用手機瀏覽喔!!
<?php echo $_SERVER['HTTP_USER_AGENT']; ?>
<?php echo $_SERVER['REQUEST_URI']; ?>

<?php }else{ ?>
    目前是桌機喔
    <?php echo $_SERVER['HTTP_USER_AGENT']; ?>
    <?php echo $_SERVER['REQUEST_URI']; ?>
<?php } ?>

<?php const MOBILE_HOSTNAME = 'm.beatuan.com';
    echo MOBILE_HOSTNAME;
?>