<?php include 'module/before_body.php';?>
<div id='slide_container'>
    <?php include 'module/header.php';?>
    <main id='<?php echo ($script_name) ? $script_name : ''; ?>'>
        <?php include 'module/' . $module . '.php';?>
    </main>
    <?php include 'module/join_mail.php';?>
    <?php include 'module/footer.php';?>
</div>
<?php include('module/slide_menu.php'); ?>
<?php include('module/after_body.php'); ?>