<?php
include 'device.php';
$module = 'music';
$title = '音樂';
$script_name = str_replace('.php', '', $_SERVER['SCRIPT_NAME']);
$script_name = str_replace('/', '', $script_name);
include '../view.m/layout.php';
