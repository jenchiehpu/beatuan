<?php include_once('device.php');
include('../common/common.php');
$module = 'artists';
$title = '藝人';
$script_name = str_replace('.php', '', $_SERVER['SCRIPT_NAME']);
$script_name = str_replace('/', '', $script_name);
include('../view.m/layout.php');