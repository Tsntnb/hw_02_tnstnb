<?php 
$page_title = 'Saturnarium - Файлы для серверов';
include 'header.php'; 
?>
    
    <!-- main -->
    <main id="content" class="main-content">
        <div class="container">
            <div class="content-sections">
                <section class="hero">
                    <div class="hero-content">
                        <h1>Файлы для скачивания</h1>
                        <p>Здесь вы можете скачать необходимые файлы для игры на наших серверах</p>
                    </div>
                </section>
                
                <section class="panel">
                    <h2>Мод для голосовой связи</h2>
                    <div class="files-list">
                        <div class="file-item card">
                            <div class="card-content">
                                <h3>Fabric Api</h3>
                                <p>Модуль для работы модов на Fabric</p>
                                <p><strong>Размер:</strong> 2.2 MB</p>
                                <p><strong>Версия:</strong> 0.138.4</p>
                                <a href="files/FabricAPI.jar" class="btn" download="">Скачать</a>
                            </div>
                        </div>
                        
                        <div class="file-item card">
                            <div class="card-content">
                                <h3>PlasmoVoice Fabric</h3>
                                <p>Мод голосовой связи для Fabric</p>
                                <p><strong>Размер:</strong> 12.1 MB</p>
                                <p><strong>Версия:</strong> 2.1.7</p>
                                <a href="files/PlasmoVoiceFabric.jar" class="btn" download="">Скачать</a>
                            </div>
                        </div>
                        
                        <div class="file-item card">
                            <div class="card-content">
                                <h3>PlasmoVoice NeoForge</h3>
                                <p>Мод голосовой связи для NeoForge</p>
                                <p><strong>Размер:</strong> 12.3 MB</p>
                                <p><strong>Версия:</strong> 2.1.7</p>
                                <a href="files/PlasmoVoiceNeoForge.jar" class="btn" download="">Скачать</a>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section class="panel">
                    <h2>Дополнительная информация</h2>
                    <div class="text-content">
                        <p>Для того, чтобы пользоваться модом PlasmoVoice, у вас должны быть установлены либо Fabric, либо NeoForge.</p>
                        
                        <h3>Для работы на Fabric, нужно:</h3>
                        <ol class="text-inform">
                            <li>Скачать файл Fabric Api (чтобы работали моды на Fabric).</li>
                            <li>Скачать сам мод PlasmoVoice Fabric.</li>
                            <li>Файлы нужно закинуть в место, где находится у вас игра, папка mods.</li>
                            <li>В главном меню проверьте, что данные моды подключены.</li>
                            <li>В самой игре можно нажать по умолчанию на V и настроить мод под себя.</li>
                        </ol>
                        
                        <h3 class="h3-inform">Для работы на NeoForge, нужно:</h3>
                        <ol class="text-inform">
                            <li>Cкачать мод PlasmoVoice NeoForge.</li>
                            <li>Файл нужно закинуть в место, где находится у вас игра, папка mods.</li>
                            <li>В главном меню проверьте, что данный мод подключен.</li>
                            <li>В самой игре можно нажать по умолчанию на V и настроить мод под себя.</li>
                        </ol>
                    </div>
                </section>
            </div>
        </div>
    </main>
    
<?php include 'footer.php'; ?>