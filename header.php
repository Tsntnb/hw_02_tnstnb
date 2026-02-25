<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Официальный сайт сервера Saturnarium">
    <meta name="author" content="Saturnarium Team">
    <title><?php echo isset($page_title) ? $page_title : 'Saturnarium - Главная'; ?></title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/adaptive.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
    <script src="js/theme.js" defer></script>
    <?php if(basename($_SERVER['PHP_SELF']) == 'index.php'): ?>
    <script src="js/copyip.js" defer></script>
    <?php endif; ?>
</head>
<body>
    <!-- header -->
    <header class="header">
        <div class="container">
            <div class="header-content">
                <h1 class="logo">Saturnarium</h1>
                <nav aria-label="Основное меню">
                    <ul class="nav-menu">
                        <li><a href="index.php" class="nav-link <?php echo basename($_SERVER['PHP_SELF']) == 'index.php' ? 'active' : ''; ?>">Главная</a></li>
                        <li><a href="about.php" class="nav-link <?php echo basename($_SERVER['PHP_SELF']) == 'about.php' ? 'active' : ''; ?>">Серверы</a></li>
                        <li><a href="fileforservers.php" class="nav-link <?php echo basename($_SERVER['PHP_SELF']) == 'fileforservers.php' ? 'active' : ''; ?>">Файлы</a></li>
                        <li><a href="rules.php" class="nav-link <?php echo basename($_SERVER['PHP_SELF']) == 'rules.php' ? 'active' : ''; ?>">Правила</a></li>
                    </ul>
                </nav>
                
            </div>
        </div>
    </header>
    
    <!-- main -->
    <main id="content" class="main-content">
        <div class="container">
            <div class="content-sections">