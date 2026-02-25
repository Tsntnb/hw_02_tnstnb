<?php 
$page_title = 'Saturnarium - Серверы';
include 'header.php'; 
?>

    <!-- main -->
    <main id="content" class="main-content">
        <div class="container">
            <div class="content-sections">
                <section class="server-types panel">
                    <div class="centered-content">
                        <h2 style="text-align: center;">Выберите сервер:</h2>
                        <div class="badges-container">
                            <span class="badge first" onclick="showServerInfo('survival')" id="survival-badge">Выживание</span>
                            <span class="badge second" onclick="showServerInfo('vanilla')" id="vanilla-badge">Ванилла</span>
                            <span class="badge third disabled" id="rpg-badge">RPG</span>
                        </div>
                    </div>
                    
                    <div id="server-info-container">
                        <!-- Ванилла сервер -->
                        <div id="vanilla-info" class="server-info-content">
                            <h3>Ванилла</h3>
                            <p>Ванилла - мир, в котором дружба и взаимопомощь незаменимы!</p>
                            <p>Режим не имеет плагинов, в которых у вас будет супермощные вещи, сферы или что-то имбое. Только ванилла - только хардкор.</p>
                            <p> Общайтесь вживую и помогайте другу в беде! Доброжелательные игроки и админы помогут освоиться любому новичку в этом сложном мире. Исследуй, строй, добывай!</p>
                            <ul class="custom-list">
                                <li>Новейшая версия</li>
                                <li>Голосовой чат Plasmavoice</li>
                                <li>Бесплатный вход и поддержка</li>
                                <li>Без сторонних плагинов</li>
                            </ul>
                            
                            <!-- Галерея для Ваниллы -->
                            <div class="gallery-container">
                                <div class="gallery-header">
                                    <h4>Скриншоты сервера</h4>
                                </div>
                                <div class="gallery">
                                    <button class="gallery-btn prev-btn" onclick="changeSlide('vanilla', -1)">‹</button>
                                    <div class="gallery-slide-container">
                                        <img src="" alt="Скриншот Ванилла" class="gallery-image" id="vanilla-current-image">
                                    </div>
                                    <button class="gallery-btn next-btn" onclick="changeSlide('vanilla', 1)">›</button>
                                </div>
                                <div class="gallery-indicators" id="vanilla-indicators">
                                </div>
                            </div>

                        </div>
                        
                        <!-- Выживание сервер -->
                        <div id="survival-info" class="server-info-content">
                            <h3>Выживание</h3>
                            <p>Сбалансированный мир выживания с уникальной генерацией и динамичной атмосферой. Исследуйте вулканы, горы и пещеры, стройте, развивайтесь и взаимодействуйте с другими игроками в комфортной среде.</p>
                            <p>Мир сгенерирован по другому! Местами вы можете находить кратеры вулканов, высокие горы, длинные пещеры и шахты. Чтобы жить с комфортом - понадобится терраформинг!</p>
                            <p>Находите друзей, работайте в шахтах и зарабатывайте деньги, участвуйте в клановых войнах! Действуйте, экспериментируйте, веселитесь и наслаждайтесь игрой у нас!</p>
                            <ul class="custom-list">
                                <li>ПВП-арена, магазин, кузнец и система работ</li>
                                <li>Рейтинги и топы игроков</li>
                                <li>Система привилегий</li>
                                <li>Защита построек: приваты, варпы, сетхомы</li>
                            </ul>
                            
                            <!-- Галерея для Выживания -->
                            <div class="gallery-container">
                                <div class="gallery-header">
                                    <h4>Скриншоты сервера</h4>
                                </div>
                                <div class="gallery">
                                    <button class="gallery-btn prev-btn" onclick="changeSlide('survival', -1)">‹</button>
                                    <div class="gallery-slide-container">
                                        <img src="" alt="Скриншот Выживание" class="gallery-image" id="survival-current-image">
                                    </div>
                                    <button class="gallery-btn next-btn" onclick="changeSlide('survival', 1)">›</button>
                                </div>
                                <div class="gallery-indicators" id="survival-indicators">
                                </div>
                            </div>

                        </div>
                        
                        <!-- RPG сервер -->
                        <div id="rpg-info" class="server-info-content">
                            <h3>RPG</h3>
                            <p>rpg</p>
                            <ul class="custom-list">
                                <li>rpg</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <script src="js/about.js" defer></script>
    </main>

<?php include 'footer.php'; ?>