<?php
/**
 * Конфигурационный файл для подключения к базе данных MySQL
 */

// Настройки подключения к базе данных
define('DB_HOST', 'localhost');      // Адрес сервера базы данных
define('DB_USER', 'your_username');  // Имя пользователя для подключения
define('DB_PASS', 'your_password');  // Пароль для подключения
define('DB_NAME', 'your_database');  // Имя базы данных
define('DB_PORT', 3306);             // Порт подключения (по умолчанию 3306)

// Настройки для PDO
define('DB_CHARSET', 'utf8mb4');     // Кодировка соединения

// Дополнительные настройки
define('DB_OPTIONS', [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,  // Режим обработки ошибок
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,        // Режим выборки по умолчанию
    PDO::ATTR_EMULATE_PREPARES   => false,                   // Отключение эмуляции подготовленных выражений
]);

/**
 * Функция для получения соединения с базой данных
 */
function getDBConnection() {
    try {
        $dsn = "mysql:host=" . DB_HOST . ";port=" . DB_PORT . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
        $pdo = new PDO($dsn, DB_USER, DB_PASS, DB_OPTIONS);
        return $pdo;
    } catch (PDOException $e) {
        throw new Exception("Ошибка подключения к базе данных: " . $e->getMessage());
    }
}
?>