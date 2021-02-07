body {
    margin: 0;
    padding: 0;
    background-image: url(/img/background/background-0.jpg);
    background-position: center;
    background-repeat: repeat-y;
    background-size: 100%;
    color:white;
}

/* LINKS ------------------------------------------------------------------------------------------*/

a {
    color: white;
    text-decoration: none;
}

/* FONTS ------------------------------------------------------------------------------------------*/

@font-face {
    font-family: primary;
    src: url(/font/crimson-text-regular.ttf)
}

@font-face {
    font-family: secondary;
    src: url(/font/playfair-display-variable.ttf)
}

/* HEADER -----------------------------------------------------------------------------------------*/

.header {
    display: grid;
    grid-template-areas: 
        "logo . calendar map phone bars";
    grid-template-columns: 40% auto 50px 50px 50px 50px;
    align-items: center;
    justify-items: right;
    background-color: rgba(150, 50, 50, 0.9);
    padding: 15px 15px;
}

.home {
    grid-area: logo;
    justify-self: start;
}

.logo {
    height: 50px;
}

.nav {
    display: none;
    font-family: primary;
    font-size: 18px;
    letter-spacing: 0.5pt;
    font-weight: bold;
}

.nav:hover {
    text-shadow: 2px 2px rgb(39, 39, 39);
}

.nav-mill {
    grid-area: mill;
}

.nav-menu {
    grid-area: menu;
}

.nav-cabin {
    grid-area: cabin;
}

.nav-lodgings {
    grid-area: lodgings;
}

.nav-attractions {
    grid-area: attractions;
}

.header .calendar {
    grid-area: calendar;
    align-items: center;
    justify-items: center;
}

.header .calendar img {
    height: 25px;
}

.header .map {
    grid-area: map;
}

.header .map img {
    height: 25px;
}

.header .phone {
    grid-area: phone;
}

.header .phone img {
    height: 25px;
}

.bars {
    grid-area: bars;
}

.bars img {
    height: 25px;
}

.page-header {
    display: grid;
    align-items: center;
    justify-items: center;
    font-family: primary;
    padding: 15px;
    background: rgba(0, 0, 0, 0.4);
}

/* SIDENAV ----------------------------------------------------------------------------------------*/

.sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.90);
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.5s;
    z-index: 99;
    font-family: primary;
}

.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: white;
    display: block;
    transition: 0.5s;
}

.sidenav a:hover {
    color: rgba(150, 50, 50);
}

.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}

#main {
    transition: margin-right .5s;
}


/* ------------------------------------------------------------------------------------------------*/
/* HOME PAGE -------------------------------------------------------------------------------START--*/
/* ------------------------------------------------------------------------------------------------*/



/* SLIDESHOW --------------------------------------------------------------------------------------*/

.galleryContainer{
    width: 100%;
    height: 300px;
    display: grid;
    margin: auto;
    user-select: none;
    box-sizing: border-box;
}

.galleryContainer .slideShowContainer{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: gainsboro;
    position: relative;
}

.galleryContainer .slideShowContainer .imageHolder{
    width: 100%;
    height: auto;
    position: absolute;
    opacity: 0;
}

.galleryContainer .slideShowContainer .imageHolder img{
    width: 100%;
    height: auto;
}

.galleryContainer .slideShowContainer .leftArrow,.galleryContainer .slideShowContainer .rightArrow{
    width: 50px;
    background: #00000036;
    position: absolute;
    left: 0;
    z-index: 1;
    transition: background 0.5s;
    height: 60px;
    top: 50%;
    transform: translateY(-50%);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

.galleryContainer .slideShowContainer .rightArrow{
    left: auto;
    right: 0;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

.galleryContainer .slideShowContainer .leftArrow:hover,.galleryContainer .slideShowContainer .rightArrow:hover{
    background: #000000a8;
    cursor: pointer;
}

.galleryContainer .arrow{
    display: inline-block;
    border: 3px solid white;
    width: 10px;
    height: 10px;
    border-left: none;
    border-bottom: none;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

.galleryContainer .arrow.arrowLeft{
    transform: rotateZ(-135deg);
}

.galleryContainer .arrow.arrowRight{
    transform: rotateZ(45deg);
}

.galleryContainer .moveLeftCurrentSlide{
    animation-name: moveLeftCurrent;
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-fill-mode:forwards;

}

.galleryContainer .moveLeftNextSlide{
    animation-name: moveLeftNext;
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-fill-mode:forwards;
}

@keyframes moveLeftCurrent {
    from {margin-left: 0;opacity: 1;}
    to {margin-left: -100%;opacity: 1;}
}

@keyframes moveLeftNext {
    from {margin-left: 100%;opacity: 1;}
    to {margin-left: 0%;opacity: 1;}
}

.galleryContainer .moveRightCurrentSlide{
    animation-name: moveRightCurrent;
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-fill-mode:forwards;
}
.galleryContainer .moveRightPrevSlide{
    animation-name: moveRightPrev;
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-fill-mode:forwards;
}

@keyframes moveRightCurrent {
    from {margin-left: 0;opacity: 1;}
    to {margin-left: 100%;opacity: 1;}
}

@keyframes moveRightPrev {
    from {margin-left: -100%;opacity: 1;}
    to {margin-left: 0%;opacity: 1;}
}

/* BOOKING ----------------------------------------------------------------------------------------*/

.booking-large {
    display: grid;
    align-items: center;
    justify-items: center;
    padding: 25px 25px 35px 25px;
    background:rgba(0, 0, 0, 0.4);
}

.booking-small {
    display: none;
    align-items: center;
    justify-items: center;
    padding: 10px;
    background:rgba(0, 0, 0, 0.4);
}

.booking-small a {
    font-family: primary;
    background-color: rgba(150, 50, 50);
    color: white;
    padding: 10px 15px;
    border: none;
    font-weight: bold;
    font-size: 13px;
    width: 200px;
    text-align: center;
    margin: 10px;
}

.booking-small a:hover {
    cursor: pointer;
    background-color: rgba(150, 50, 50, 0.8);
}

.booking-bottom {
    margin-top: 20px;
}

.booking-script {
    white-space: nowrap;
}

/* HOME -------------------------------------------------------------------------------------------*/

.home-container {
    display: grid;
    align-items: center;
    justify-items: center;
    width: 100%;
    margin-top: 20px;
}

.home-container img {
    width: 95%;
}

.home-details {
    display: grid;
    align-items: center;
    justify-items: center;
    width: 95%;
    background-color: rgba(150, 50, 50, 0.9);
}

.home-details h1 {
    font-family: primary;
    font-size: 22px;
    margin: 15px 0 5px 0;
    white-space: nowrap;
}

.home-details h2 {
    font-family: primary;
    font-size: 22px;
    margin: 15px 0 5px 0;
    white-space: nowrap;
}

.home-details h3 {
    font-family: secondary;
    font-size: 14px;
    margin: 0;
    text-align: center;
    white-space: nowrap;
}

.home-details button {
    font-family: primary;
    background-color: white;
    color: rgba(150, 50, 50);
    padding: 10px 15px;
    border: none;
    margin: 20px 0 20px 0;
    border-radius: 10px;
    font-weight: bold;
}

.home-details button:hover {
    cursor: pointer;
    opacity: 0.9;
}

.home-historic {
    background-color: rgba(212, 190, 180, 0.9);
    color: rgba(64, 45, 37);
}

.date {
    font-size: 16px;
    white-space: nowrap;
}

.home-historic .history {
    margin: 25px 20px 0px 20px;
    text-align: justify;
}

.home-historic button {
    background-color:  rgba(64, 45, 37);
    color: rgb(221, 209, 203);
}

.home-attraction {
    background-color: rgba(64, 45, 37, 0.9);
    color: rgba(221, 209, 203);
}

.home-attraction .attractions {
    margin: 25px 20px 0px 20px;
    text-align: justify;

}

.home-attraction button {
    background-color:  rgba(212, 190, 180);
    color: rgb(64, 45, 37);
}


/* ------------------------------------------------------------------------------------------------*/
/* HOME PAGE ---------------------------------------------------------------------------------END--*/
/* ------------------------------------------------------------------------------------------------*/





/* ------------------------------------------------------------------------------------------------*/
/* THE MILL PAGE ---------------------------------------------------------------------------START--*/
/* ------------------------------------------------------------------------------------------------*/

.mill-history-container {
    display: grid;
    align-items: center;
    justify-items: center;
    width: 100%;
    margin-top: 20px;
}

.mill-history-container img {
    width: 95%;
}

.mill-history-details {
    display: grid;
    align-items: center;
    justify-items: center;
    width: 95%;
    background-color: rgba(212, 190, 180, 0.9);
    color: rgba(64, 45, 37);
    padding: 0 0 20px 0;
}

.mill-history-details h1 {
    font-family: primary;
    font-size: 22px;
    margin: 15px 0 5px 0;
}

.mill-history-details h2 {
    font-family: primary;
    font-size: 22px;
    margin: 15px 0 5px 0;
}

.mill-history-details p {
    font-family: secondary;
    font-size: 14px;
    margin: 0;
}

.mill-history-details .date {
    font-size: 16px;
}

.mill-history-details .history {
    margin: 15px 20px 0px 20px;
    text-align: justify;
}

.historic-photo-container {
    display: grid;
    align-items: center;
    justify-items: center;
    width: 100%;
    margin-top: 20px;
}

.historic-photo-container img {
    width: 95%;
}

.historic-photo-details {
    width: 95%;
    background-color: rgba(212, 190, 180, 0.9);
    color: rgba(64, 45, 37);
}

.historic-photo-details .historic-photo-text {
    margin: 10px 20px 10px 20px;
    font-family: secondary;
    font-size: 12px;
    text-align: center;
}

.historic-photo-1 {
    grid-area: history-photo1;
}

.historic-photo-2 {
    grid-area: history-photo2;
}

.historic-photo-3 {
    grid-area: history-photo3;
}

.historic-photo-4 {
    grid-area: history-photo4;
}

.mill-today-container {
    display: grid;
    align-items: center;
    justify-items: center;
    width: 100%;
    margin-top: 20px;
}

.mill-today-container img {
    width: 95%;
}

.mill-today-details {
    display: grid;
    align-items: center;
    justify-items: center;
    width: 95%;
    background-color: rgba(212, 190, 180, 0.9);
    color: rgba(64, 45, 37);
    padding: 0 0 20px 0;
}

.mill-today-details h1 {
    font-family: primary;
    font-size: 22px;
    margin: 15px 0 5px 0;
}

.mill-today-details h2 {
    font-family: primary;
    font-size: 22px;
    margin: 15px 0 5px 0;
}

.mill-today-details p {
    font-family: secondary;
    font-size: 14px;
    margin: 0;
}

.mill-today-details .date {
    font-size: 16px;
}

.mill-today-details .mill-today {
    margin: 15px 20px 0px 20px;
    text-align: justify;
}

.mill-photo-container {
    display: grid;
    align-items: center;
    justify-items: center;
    width: 100%;
    margin-top: 20px;
}

.mill-photo-container img {
    width: 95%;
}

.mill-photo-details {
    width: 95%;
    background-color: rgba(212, 190, 180, 0.9);
    color: rgba(64, 45, 37);
}

.mill-photo-details .mill-photo-text {
    margin: 10px 20px 10px 20px;
    font-family: secondary;
    font-size: 12px;
    text-align: center;
}

.mill-photo-1 {
    grid-area: mill-photo1;
}

.mill-photo-2 {
    grid-area: mill-photo2;
}

.mill-photo-3 {
    grid-area: mill-photo3;
}

.marl-creek-container {
    display: grid;
    align-items: center;
    justify-items: center;
    width: 100%;
    margin-top: 20px;
}

.marl-creek-container img {
    width: 95%;
}

.marl-creek-details {
    display: grid;
    align-items: center;
    justify-items: center;
    width: 95%;
    background-color: rgba(212, 190, 180, 0.9);
    color: rgba(64, 45, 37);
    padding: 0 0 20px 0;
}

.marl-creek-details h1 {
    font-family: primary;
    font-size: 22px;
    margin: 15px 0 5px 0;
}

.marl-creek-details h2 {
    font-family: primary;
    font-size: 22px;
    margin: 15px 0 5px 0;
}

.marl-creek-details p {
    font-family: secondary;
    font-size: 14px;
    margin: 0;
}

.marl-creek-details .marl-creek-text {
    margin: 15px 20px 0px 20px;
    text-align: justify;
}

.mill-store-container {
    display: grid;
    align-items: center;
    justify-items: center;
    width: 100%;
    margin-top: 20px;
}

.mill-store-container img {
    width: 95%;
}

.mill-store-details {
    display: grid;
    align-items: center;
    justify-items: center;
    width: 95%;
    background-color: rgba(212, 190, 180, 0.9);
    color: rgba(64, 45, 37);
    padding: 0 0 20px 0;
}

.mill-store-details h1 {
    font-family: primary;
    font-size: 22px;
    margin: 15px 0 5px 0;
}

.mill-store-details h2 {
    font-family: primary;
    font-size: 22px;
    margin: 15px 0 5px 0;
}

.mill-store-details p {
    font-family: secondary;
    font-size: 14px;
    margin: 0;
}

.mill-store-details .date {
    font-size: 16px;
}

.mill-store-details .mill-store {
    margin: 15px 20px 0px 20px;
    text-align: justify;
}

.mill-store-photo-container {
    display: grid;
    align-items: center;
    justify-items: center;
    width: 100%;
    margin-top: 20px;
}

.mill-store-photo-container img {
    width: 95%;
}

.mill-store-photo-details {
    width: 95%;
    background-color: rgba(212, 190, 180, 0.9);
    color: rgba(64, 45, 37);
}

.mill-photo-details .mill-photo-text {
    margin: 10px 20px 10px 20px;
    font-family: secondary;
    font-size: 12px;
    text-align: center;
}


/* ------------------------------------------------------------------------------------------------*/
/* THE MILL PAGE -----------------------------------------------------------------------------END--*/
/* ------------------------------------------------------------------------------------------------*/





/* ------------------------------------------------------------------------------------------------*/
/* LODGINGS PAGE ---------------------------------------------------------------------------START--*/
/* ------------------------------------------------------------------------------------------------*/

.lodging-container {
    display: grid;
    grid-template-areas: 
    'cabin'
    'paddock'
    'granary'
    'wheat-bin'
    'corn-bin';
    align-items: center;
    justify-items: center;
    width: 100%;
    margin: 5px 0 20px 0;
}

.rooms {
    display: grid;
    align-items: center;
    justify-items: center;
}

.rooms-cabin {
    grid-area: cabin;
}

.rooms-paddock {
    grid-area: paddock;
}

.rooms-granary {
    grid-area: granary;
}

.rooms-wheat-bin {
    grid-area: wheat-bin;
}

.rooms-corn-bin {
    grid-area: corn-bin;
}

.lodging-container .room {
    width: 95%;
    margin: 20px 0 0 0;
}

.lodging-info {
    display: grid;
    align-items: center;
    justify-items: center;
    width: 95%;
    background-color: rgba(212, 190, 180, 0.9);
    color: rgba(64, 45, 37);
}

.lodging-name {
    font-family: primary;
    font-size: 22px;
    margin: 15px 0 5px 0;
}

.lodging-description {
    font-family: secondary;
    font-size: 14px;
    margin: 15px 20px 20px 20px;
    text-align: justify;
}

.lodging-details {
    display: grid;
    grid-template-columns: 60px 10px auto 60px 10px auto;
    grid-gap: 8px 0;
    align-items: center;
    justify-items: center;
    width: 95%;
    background-color: rgba(233, 226, 222, 0.9);
    padding: 15px 0 15px 0;
    color: rgba(64, 45, 37);
    font-family: primary;
    font-size: 16px;
    white-space: nowrap;
}

.lodging-details img {
    height: 30px;
    width: 30px;
}

.cabin-details {
    grid-template-areas:
        'occupancy-i . occupancy fireplace-i . fireplace'
        'bed-i . bed coffee-i . coffee'
        'sofa-i . sofa fridge-i . fridge'
        'jacuzzi-i . jacuzzi tv-i . tv'
        'shower-i . shower wifi-i . wifi';
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
}

.paddock-details {
    grid-template-areas:
        'occupancy-i . occupancy fireplace-i . fireplace'
        'bed-i . bed coffee-i . coffee'
        'sofa-i . sofa tv-i . tv'
        'tub-i . tub wifi-i . wifi';
    grid-template-rows: 1fr 1fr 1fr 1fr;
}

.granary-details {
    grid-template-areas:
        'occupancy-i . occupancy coffee-i . coffee'
        'bed-i . bed tv-i . tv'
        'sofa-i . sofa wifi-i . wifi'
        'shower-i . shower . . .';
    grid-template-rows: 1fr 1fr 1fr 1fr;
}

.wheat-bin-details {
    grid-template-areas:
        'occupancy-i . occupancy coffee-i . coffee'
        'bed-i . bed tv-i . tv'
        'sofa-i . sofa wifi-i . wifi'
        'shower-i . shower . . .';
    grid-template-rows: 1fr 1fr 1fr 1fr;
}

.corn-bin-details {
    grid-template-areas:
        'occupancy-i . occupancy coffee-i . coffee'
        'bed-i . bed tv-i . tv'
        'shower-i . shower wifi-i . wifi';
    grid-template-rows: 1fr 1fr 1fr;
}

.occupancy-i {
    grid-area: occupancy-i;
    display: grid;
    align-items: center;
}

.occupancy {
    grid-area: occupancy;
    justify-self: left;
}

.bed-i {
    grid-area: bed-i;
    display: grid;
    align-items: center;
}

.bed {
    grid-area: bed;
    justify-self: left;
    align-self: center;
}

.sofa-i {
    grid-area: sofa-i;
    display: grid;
    align-items: center;
}

.sofa {
    grid-area: sofa;
    justify-self: left;
    align-self: center;
}

.jacuzzi-i {
    grid-area: jacuzzi-i;
    display: grid;
    align-items: center;
}

.jacuzzi {
    grid-area: jacuzzi;
    justify-self: left;
    align-self: center;
}

.shower-i {
    grid-area: shower-i;
    display: grid;
    align-items: center;
}

.shower {
    grid-area: shower;
    justify-self: left;
    align-self: center;
}

.fireplace-i {
    grid-area: fireplace-i;
    display: grid;
    align-items: center;
}

.fireplace {
    grid-area: fireplace;
    justify-self: left;
    align-self: center;
}

.coffee-i {
    grid-area: coffee-i;
    display: grid;
    align-items: center;
}

.coffee {
    grid-area: coffee;
    justify-self: left;
    align-self: center;
}

.fridge-i {
    grid-area: fridge-i;
    display: grid;
    align-items: center;
}

.fridge {
    grid-area: fridge;
    justify-self: left;
    align-self: center;
}

.tv-i {
    grid-area: tv-i;
    display: grid;
    align-items: center;
}

.tv {
    grid-area: tv;
    justify-self: left;
    align-self: center;
}

.wifi-i {
    grid-area: wifi-i;
    display: grid;
    align-items: center;
}

.wifi {
    grid-area: wifi;
    justify-self: left;
    align-self: center;
}

.tub-i {
    grid-area: tub-i;
    display: grid;
    align-items: center;
}

.tub {
    grid-area: tub;
    justify-self: left;
    align-self: center;
}

.shower-i {
    grid-area: shower-i;
    display: grid;
    align-items: center;
}

.shower {
    grid-area: shower;
    justify-self: left;
    align-self: center;
}

.lodging-booking {
    display: grid;
    grid-template-areas: 
        'pricing book'
        'pricing book';
        grid-template-rows: 60px 20px;
    align-items: center;
    justify-items: center;
    width: 95%;
    background-color: rgba(64, 45, 37, 0.9);
    padding: 10px 0 10px 0;
}

.lodging-pricing {
    grid-area: pricing;
    display: grid;
    grid-template-areas: 
     'weekday weekend'
     'weekday-price weekend-price';
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 0 20px;
    align-items: center;
    justify-items: center;
    justify-self: left;
    margin: 0 0 0 20px;
}

.weekday {
    grid-area: weekday;
    font-size: 11px;
    letter-spacing: 1.5px; 
}

.weekend {
    grid-area: weekend;
    font-size: 11px;
    letter-spacing: 1.5px;
}

.weekday-price {
    grid-area: weekday-price;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 3px;
}

.weekend-price {
    grid-area: weekend-price;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 3px;
}

.price-disclaimer {
    grid-area: disclaimer;
    font-size: 10px;
    align-self: start;
    justify-self: right;
    margin: 0 35px 0 0;
}

.book-lodging {
    grid-area: book;
    justify-self: right;
    margin: 0 20px 0 0;
}

.book-lodging button {
    font-family: primary;

    background-color: rgba(150, 50, 50);
    color: white;
    padding: 10px 15px;
    border: none;
    margin: 20px 0 20px 0;
    border-radius: 10px;
    font-weight: bold;
}

.book-lodging button:hover {
    cursor: pointer;
    opacity: 0.9;
}


/* ------------------------------------------------------------------------------------------------*/
/* LODGINGS PAGE ---------------------------------------------------------------------------END----*/
/* ------------------------------------------------------------------------------------------------*/





/* ------------------------------------------------------------------------------------------------*/
/* ATTRACTIONS PAGE ------------------------------------------------------------------------START--*/
/* ------------------------------------------------------------------------------------------------*/

.attractions-page-container {
    display: grid;
    grid-template-areas:
    'waterfalls'
    'hiking-trails'
    'natural-wonders'
    'kayaking';
    align-items: center;
    justify-items: center;
}

.waterfalls {
    grid-area: waterfalls;
}

.hiking-trails {
    grid-area: hiking-trails;
}

.natural-wonders {
    grid-area: natural-wonders;
}

.kayaking {
    grid-area: kayaking;
}

.attractions-container {
    display: grid;
    align-items: center;
    justify-items: center;
    width: 100%;
    margin: 5px 0 0 0;
}

.attractions-container img {
    width: 95%;
    margin: 20px 0 0 0;
}

.attractions-info {
    display: grid;
    align-items: center;
    justify-items: center;
    width: 95%;
    background-color: rgba(64, 45, 37, 0.9);
    color: rgba(221, 209, 203);
}

.attractions-name {
    font-family: primary;
    font-size: 22px;
    margin: 15px 0 5px 0;
}

.attractions-description {
    font-family: secondary;
    font-size: 14px;
    margin: 15px 20px 20px 20px;
    text-align: justify;
}

.attracions-details-container {
    display: grid;
    grid-template-areas:
        'attractions-content attraction-buttons';
        grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    width: 95%;
    background-color: rgba(64, 45, 37, 0.9);
}

.attractions-details {
    display: grid;
    width: 100%;
    align-items: center;
    justify-items: center;
    color: rgba(221, 209, 203);
    font-family: primary;
    font-size: 16px;
    padding: 15px 0;
}


.waterfalls-details {
    grid-area: attractions-content;
    grid-template-areas:
        'crabtree'
        'saint-marys'
        'white-rock'
        'wigwam'
        'shamokin';
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px 0;
    align-items: center;
    justify-items: center;
}

.trails-details {
    grid-template-areas: attractions-content;
    grid-template-areas:
        'priest-wilderness'
        'spy-rock-trail'
        'mount-pleasant-trail'
        'slacks-trail'
        'three-ridges-trail';
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px 0;
    align-items: center;
    justify-items: center;
}

.kayaks-details {
    grid-template-areas: attractions-content;
    grid-template-areas:
        'wilderness-canoe-co'
        'twin-rivers-outfitters'
        'shenandoah-river-adventures'
        'james-river-adventures'
        'james-river-rafting';
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px 0;
    align-items: center;
    justify-items: center;
}

.blueridge-pkwy-details {
    grid-template-areas: attractions-content;
    grid-template-areas:
        'northbound'
        'spy-mountain-overlook'
        'fork-mountain-overlook'
        'twenty-min-cliff-overlook'
        'three-ridges-overlook'
        'ravens-roost-overlook'
        'southbound'
        'boston-knob-overlook'
        'irish-creek-valley-overlook'
        'whites-gap-overlook'
        'humphreys-gap-overlook'
        'house-mountain-overlook';
    grid-template-rows: 30px 1fr 1fr 1fr 1fr 1fr 30px 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px 0;
    align-items: center;
    justify-items: center;
}

.natural-wonders-details {
    grid-template-areas: attractions-content;
    grid-template-areas:
        'natural-bridge'
        'natural-chimneys'
        'natural-bridge-caverns'
        'grand-caverns'
        'luray-caverns';
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px 0;
    align-items: center;
    justify-items: center;
}

.waterfall-details {
    display: grid;
    grid-template-areas:
    'attraction drive-i drive hike-i hike photos directions';
    grid-template-columns: 150px 20px 50px 10px 50px 40px 40px;
    grid-template-rows: 30px;
    grid-gap: 0 10px;
    width: 100%;
}

.trail-details {
    display: grid;
    grid-template-areas:
    'attraction drive-i drive hike-i hike photos directions';
    grid-template-columns: 150px 20px 50px 10px 50px 40px 40px;
    grid-template-rows: 30px;
    grid-gap: 0 10px;
    width: 100%;
}

.kayak-details {
    display: grid;
    grid-template-areas:
    'attraction drive-i drive photos directions';
    grid-template-columns: 235px 20px 50px 40px 40px;
    grid-template-rows: 30px;
    grid-gap: 0 10px;
    width: 100%;
}

.blueridge-details {
    display: grid;
    grid-template-areas:
    'attraction drive-i drive photos directions';
    grid-template-columns: 235px 20px 50px 40px 40px;
    grid-template-rows: 30px;
    grid-gap: 0 10px;
    width: 100%;
}

.natural-wonder-details {
    display: grid;
    grid-template-areas:
    'attraction drive-i drive photos directions';
    grid-template-columns: 235px 20px 50px 40px 40px;
    grid-template-rows: 30px;
    grid-gap: 0 10px;
    width: 100%;
}

.waterfall-details img {
    margin: 0;
}

.trail-details img {
    margin: 0;
}

.kayak-details img {
    margin: 0;
}

.blueridge-details img {
    margin: 0;
}

.natural-wonder-details img {
    margin: 0;
}

.crabtree-falls {
    grid-area: crabtree;
}

.saint-marys-falls {
    grid-area: saint-marys;
}

.white-rock-falls {
    grid-area: white-rock;
}

.wigwam-falls {
    grid-area: wigwam;
}

.shamokin-falls {
    grid-area: shamokin;
}

.spy-rock-trail {
    grid-area: spy-rock-trail;
}

.mount-pleasant-trail {
    grid-area: mount-pleasant-trail;
}

.slacks-trail {
    grid-area: slacks-trail;
}

.three-ridges-trail {
    grid-area: three-ridges-trail;
}

.wilderness-canoe-co {
    grid-area: wilderness-canoe-co;
}

.twin-rivers-outfitters {
    grid-area: twin-rivers-outfitters;
}

.shenandoah-river-adventures {
    grid-area: shenandoah-river-adventures;
}

.james-river-adventures {
    grid-area: james-river-adventures;
}

.james-river-rafting {
    grid-area: james-river-rafting;
}

.big-sky-mountain {
    grid-area: big-sky-mountain;
}

.spy-mountain-overlook {
    grid-area: spy-mountain-overlook;
}

.fork-mountain-overlook {
    grid-area: fork-mountain-overlook;
}

.twenty-min-cliff-overlook {
    grid-area: twenty-min-cliff-overlook;
}

.three-ridges-overlook {
    grid-area: three-ridges-overlook;
}

.ravens-roost-overlook {
    grid-area: ravens-roost-overlook;
}

.boston-knob-overlook {
    grid-area: boston-knob-overlook;
}

.irish-creek-valley-overlook {
    grid-area: irish-creek-valley-overlook;
}

.whites-gap-overlook {
    grid-area: whites-gap-overlook;
}

.humphreys-gap-overlook {
    grid-area: humphreys-gap-overlook;
}

.house-mountain-overlook {
    grid-area: house-mountain-overlook;
}

.blueridge-north {
    grid-area: northbound;
}

.blueridge-south {
    grid-area: southbound;
}

.natural-bridge {
    grid-area: natural-bridge;
}

.natural-chimneys {
    grid-area: natural-chimneys;
}

.natural-bridge-caverns {
    grid-area: natural-bridge-caverns;
}

.luray-caverns {
    grid-area: luray-caverns;
}








.attraction {
    grid-area: attraction;
    margin: 0 0 0 20px;
    font-weight: bold;
    justify-self: left;
}

.drive-i {
    grid-area: drive-i;
}

.drive {
    grid-area: drive;
    font-size: 14px;
}

.hike-i {
    grid-area: hike-i;
}

.hike {
    grid-area: hike;
    font-size: 14px;
}

.photos {
    grid-area: photos;
    justify-self: right;
    margin: 0 20px 0 0;
}

.directions {
    grid-area: directions;
    justify-self: right;
    margin: 0 30px 0 0;
}

.drive-i img {
    width: 18px;
    height: 10;
}

.hike-i img {
    width: 10px;
    height: 15px;
}

.photos img {
    width: 20px;
    height: 15px;
}

.photos img:hover {
    cursor: pointer;
    opacity: 0.8;
}

.directions img {
    width: 15px;
    height: 20px;
}

.directions img:hover {
    cursor: pointer;
    opacity: 0.8;
}

.website img {
    width: 20px;
    height: 20px;
}

.website img:hover {
    cursor: pointer;
    opacity: 0.8;
}

.attraction-details-buttons {
    grid-area: attraction-buttons;
    display: grid;
    justify-items: center;
}

.more-attractions {
    display: grid;
    align-items: bottom;
    justify-items: center;
}

.more-attractions a {
    display: none;
    grid-area: more-attractions;
    font-family: primary;
    background-color: white;
    color: rgba(64, 45, 37);
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    font-size: 13px;
    width: 130px;
    text-align: center;
    margin: 10px;
}

.more-attractions a:hover {
    cursor: pointer;
    background-color: rgba(256, 256, 256, 0.8);
}

.view-lodgings a {
    display: none;
    grid-area: view-lodgings;
    font-family: primary;
    background-color: rgba(212, 190, 180);
    color: rgba(64, 45, 37);
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    font-size: 13px;
    width: 130px;
    text-align: center;
    margin: 10px;
}

.view-lodgings a:hover {
    cursor: pointer;
    background-color: rgba(212, 190, 180, 0.8);
}

.book-now a {
    display: none;
    grid-area: book-now;
    font-family: primary;
    background-color: rgba(150, 50, 50);
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    font-size: 13px;
    width: 130px;
    text-align: center;
    margin: 10px;
}

.book-now a:hover {
    cursor: pointer;
    background-color: rgba(150, 50, 50, 0.8);
}





















/* ------------------------------------------------------------------------------------------------*/
/* ATTRACTIONS PAGE --------------------------------------------------------------------------END--*/
/* ------------------------------------------------------------------------------------------------*/





/* FOOTER -----------------------------------------------------------------------------------------*/

footer {
    display: grid;
    grid-template-areas:
        "left logo right"
        "info info info"
        "middle middle middle"
        "links links links"
        "bottom bottom bottom"
        "sub sub sub";
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    background-color: rgba(150, 50, 50, 0.9);
    padding: 15px 15px;
}

.footer-left {
    grid-area: left;
    width: 100%;
    color: white;
}

.footer-logo {
    grid-area: logo;
    height: 50px;
}

.footer-right {
    grid-area: right;
    width: 100%;
    color: white;
}

.footer-info {
    grid-area: info;
    display: grid;
    grid-template-areas:
        "contact other";
    grid-template-columns: 200px auto;
    justify-self: left;
    align-items: center;
    width: 100%;
    font-size: 14px;
    height: 150px;
}

.contact-info {
    grid-area: contact;
    display: grid;
    grid-template-areas:
        "phone number"
        "map address"
        "mail email";
    grid-template-columns: 35px 155px;
    grid-template-rows: 40px 40px 40px;
    justify-self: left;
    align-items: center;
}

.footer-phone {
    grid-area: phone;
    display: grid;
    align-items: center;
}

.footer-phone img {
    height: 20px;
}

.footer-number {
    grid-area: number;
}

.footer-map {
    grid-area: map;
    display: grid;
    align-items: center;
}

.footer-map img {
    height: 20px;
}

.footer-address {
    grid-area: address;
}

.footer-mail {
    grid-area: mail;
    display: grid;
    align-items: center;
}

.footer-mail img {
    height: 14px;
}

.footer-email {
    grid-area: email;
}

.other-info {
    grid-area: other;
    display: grid;
    grid-template-areas: 
        'operation'
        'social';
    grid-template-rows: auto 60px;
    justify-items: right;
    align-items: center;
    justify-self: right;
    align-self: end;
}

.operation {
    grid-area: operation;
    display: grid;
    grid-template-areas:
        "days"
        "hours"
        "."
        "in"
        "out";
    grid-template-rows: 1fr 1fr 10px 1fr 1fr;
    justify-items: right;
    justify-self: right;
}

.days {
    grid-area: days;
}

.hours {
    grid-area: hours;
}

.check-in {
    grid-area: in;
}

.check-out {
    grid-area: out;
}

.social {
    grid-area: social;
    display: grid;
    grid-template-areas:
        'facebook instagram google';
    grid-template-columns: 40px 40px 40px;
    justify-items: right;
}

.facebook {
    grid-area: facebook;
}

.facebook img {
    height: 25px;
}

.instagram {
    grid-area: instagram;
}

.instagram img {
    height: 25px;
}

.google {
    grid-area: google;
}

.google img {
    height: 25px;
}

.footer-middle {
    grid-area: middle;
    width: 100%;
    color: white;
    margin: 15px 0;
}

.footer-nav {
    grid-area: links;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    width: 100%;
}

.footer-nav a {
    font-size: 12px;
}

.footer-bottom {
    grid-area: bottom;
    width: 100%;
    color: white;
    margin: 15px 0;
}

.sub-footer {
    grid-area: sub;
    display: grid;
    justify-items: center;
    width: 100%;
    font-size: 10px;
}

.sub-footer a {
    text-decoration: underline;
}

.sketch {
    display: none;
    grid-area: sketch;
    align-self: center;
    justify-self: center;
}








/* <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 */
/* <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 */
/* <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 */


.valentine-container {
    display: grid;
    grid-template-areas: 
        'img text'
        'img included-h'
        'img included'
    ;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 20% 1fr;
    align-items: center;
    justify-items: center;
    width: 100%;
    background-color: rgb(0, 0, 0, 0.7);
    margin: 50px 0 0 0;
}

.valentine-img {
    grid-area: img;
}

.valentine-img img {
    width: 100%;
}

.valentine-text {
    grid-area: text;
    align-self: start;
    display: grid;
    grid-template-areas: 
        'head'
        'details';
    text-align: center;
    margin-top: 10px;
    padding: 0 50px 0 50px;
}

.valentine-header {
    grid-area: head;
    font-family: primary;
    letter-spacing: 0.7pt;
    font-size: 32px;
}

.valentine-details {
    grid-area: details;
    font-family: secondary;
    font-size: 18px;
}

.valentine-included {
    grid-area: included;
    align-self: start;
    display: grid;
    grid-template-areas: 
        'stay-i stay . wine-i wine'
        'dinner-i dinner . choco-i choco'
        'breakf-i breakf . flower-i flower'
    ;
    grid-gap: 15px 25px;
    align-items: center;
    font-size: 17px;


}

.valentine-included img {
    width: 35px;
    height: 35px;
}

.included-head {
    grid-area: included-h;
    font-family: primary;
    letter-spacing: 0.7pt;
    font-size: 17px;
    margin-bottom: 25px;
}

.stay-i {
    grid-area: stay-i;
}

.stay {
    grid-area: stay;
}

.wine-i {
    grid-area: wine-i;
}

.wine {
    grid-area: wine;
}

.dinner-i {
    grid-area: dinner-i;
}

.dinner {
    grid-area: dinner;
}

.breakf-i {
    grid-area: breakf-i;
}

.breakf {
    grid-area: breakf;
}

.choco-i {
    grid-area: choco-i;
}

.choco {
    grid-area: choco;
}

.flower-i {
    grid-area: flower-i;
}

.flower {
    grid-area: flower;
}



.valentine-booking {
    display: grid;
    grid-template-areas: 
        'price date book';
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    height: 125px;
    background-color: rgba(64, 45, 37, 0.9);
}

.valentine-price {
    grid-area: price;
    display: grid;
    grid-template-areas:
        'suite-t suite-p . cabin-t cabin-p'
    ;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    align-items: center;
    justify-items: center;
    text-align: center;
}

.v-suite-text {
    grid-area: suite-t;
    font-size: 24px;
    font-family: secondary;
}

.v-suite-price {
    grid-area: suite-p;
    font-size: 24px;
    background-color:rgba(0, 0, 0, 0.30);
    padding: 15px 30px;
}

.v-cabin-text {
    grid-area: cabin-t;
    font-size: 24px;
    font-family: secondary;
}

.v-cabin-price {
    grid-area: cabin-p;
    font-size: 24px;
    background-color:rgba(0, 0, 0, 0.30);
    padding: 15px 30px;
}

.valentine-date {
    grid-area: date;
    display: grid;
    grid-template-areas:
        'limit'
        'date'
    ;
    align-items: center;
    justify-items: center;
    grid-template-rows: 30% 70%;
    grid-gap: 7px;
}

.v-limited {
    grid-area: limit;
    font-size: 16px;

}

.v-dates {
    grid-area: date;
    font-size: 22px;
}

.valentine-book {
    grid-area: book;
    display: grid;
    grid-template-areas:
        'button'
        'phone'
    ;
    grid-template-rows: 80% 20%;
    align-items: center;
    justify-items: center;
}

.valentine-book a {
    font-family: primary;
    background-color: rgba(150, 50, 50);
    color: white;
    padding: 12px 25px;
    border: none;
    text-align: center;
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 7px;
}

.valentine-book a:hover {
    cursor: pointer;
    background-color: rgba(150, 50, 50, 0.8);
}

.v-phone {
    font-family: primary;
    font-size: 14px;
}
















/* MEDIA QUERIES ----------------------------------------------------------------------------------*/

@media screen and (max-width: 1050px) {
    
    .valentine-container {
        display: grid;
        grid-template-areas: 
            'img'
            'text'
            'included-h'
            'included';
        grid-template-columns: 100%;
        grid-template-rows: none;
        padding-bottom: 25px;
    }

    .valentine-text {
        padding: 0 30px 0 30px;
    }

    .valentine-header {
        font-size: 26px;
    }

    .valentine-details {
        font-size: 15px;
        text-align: justify;
    
    }

    .included-head {
        font-size: 17px;
        margin: 50px 0 25px 0;
        text-align: center;
    }

    .valentine-included {
        font-size: 15px;
        margin-bottom: 15px;
        grid-template-areas: 
            'stay-i stay . wine-i wine'
            'dinner-i dinner . choco-i choco'
            'breakf-i breakf . flower-i flower'
        ;
        grid-gap: 15px 25px;
        align-items: center;
    }
    
    .valentine-included img {
        width: 30px;
        height: 30px;
    }

    .valentine-booking {
        display: grid;
        grid-template-areas:
            'price'
            'date'
            'book'
        ;
        grid-template-columns: none;
        grid-template-rows: none;
        justify-items: center;
        height: 270px;
    }

    .valentine-price {
        display: grid;
        grid-template-areas:
        'suite-t suite-p cabin-t cabin-p';
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: none;
        grid-gap: none;
        padding: 25px 0 40px 0;
        margin: 0 20px 0 0;
    }
    .v-suite-text {
        font-size: 18px;
        padding: 0;
        
    }
    .v-suite-price {
        font-size: 18px;
        padding: 10px 25px;
    }
    .v-cabin-text {
        font-size: 18px;
        padding: 0;
    }
    .v-cabin-price {
        font-size: 18px;
        padding: 10px 25px;
    }

    .valentine-date {
        display: grid;
        grid-template-areas:
            'limit'
            'date'
        ;
        align-items: center;
        justify-items: center;
        grid-template-rows: 30% 70%;
        grid-gap: 5px;
    }

    .v-limited {
        font-size: 14px;
    
    }
    .v-dates {
        font-size: 18px;
    }

    .valentine-book {
        grid-template-rows: 80% 20%;
        align-items: center;
        justify-items: center;
        margin: 25px 0 25px 0;
    }

    .v-phone {
        font-size: 13px;
        letter-spacing: 0.5pt;
    }

}















.food-hero {
    display: grid;
    align-items: center;
    justify-items: center;
    width: 100%;
    margin: 0;
    padding: 0;
}

.food-hero img {
    width: 100%;
}

.open-hours {
    display: grid;
    align-items: center;
    justify-items: center;
    width: 100%;
    height: 80px;
    background: rgba(0, 0, 0, 0.4);
}

.open-hours h2 {
    font-family: primary;
    text-align: center;
    letter-spacing: 0.5pt;
}





















































































































































































































































































































/* BREAKFAST ----------------------------------------------------------------------------------------- */

.breakfast-menu {
    display: grid;
    grid-template-areas: 
        'title'
        'hours'
        'entrees'
        'sides'
        'juices'
    ;
    width: 100%;
    background-color:rgba(255, 255, 255, 0.9);
    margin: 0;
    padding: 15px 0 15px 0;
    font-family: primary;
    color: black;
}

.breakfast-menu h3 {
    grid-area: title;
    font-size: 15pt;
    color:rgba(150, 50, 50);
    text-align: center;
}

.brkeakfast-entrees {
    grid-area: entrees;

}

.breakfast-sides {
    grid-area: sides;
    align-items: center;
    justify-items: center;
    padding: 0 100px 0 100px;
}

.menu-section {
    grid-area: section;
    font-family: primary;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1.5px;
    text-align: center;
    color: black;
    margin: 15px 0 30px 0;
}

.menu-hours {
    grid-area: hours;
    font-size: 12pt;
    color:rgba(150, 50, 50);
    text-align: center;
    margin: 0 0 30px 0;
}

.menu-item {
    grid-area: item;
    font-family: primary;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.5px;
    text-align: center;
    color: black;
}

.menu-description {
    grid-area: descr;
    font-family: primary;
    font-size: 14px;
    letter-spacing: 0.5px;
    text-align: center;
    color: black;
    margin: 10px 0 30px 0;
    padding: 0 25px 0 25px;
}

.breakfast-sides {
    display: grid;
    grid-template-areas: 
        'section'
        'side-1'
        'side-2'
        'side-3'
        'side-4'
        'side-5'
        'side-6'
        'side-7'
    ;
    grid-template-rows: 100px 30px 30px 30px 30px 30px 30px 30px;
    justify-self: center;
    font-size: 15px;
}

.breakfast-sides .menu-section {
    grid-area: section;
}

.side {
    display: grid;
    grid-template-areas: 
        'item price'
    ;
    grid-template-columns: 250px 10px;
    justify-self: center;

}

.side-item {
    grid-area: item;
}

.side-price {
    grid-area: price;
    font-weight: bold;
}

.side-1 {
    grid-area: side-1;
}

.side-2 {
    grid-area: side-2;
}

.side-3 {
    grid-area: side-3;
}

.side-4 {
    grid-area: side-4;
}

.side-5 {
    grid-area: side-5;
}

.side-6 {
    grid-area: side-6;
}

.side-7 {
    grid-area: side-7;
}

.breakfast-juices {
    display: grid;
    grid-template-areas: 
        'section'
        'juice-1'
        'juice-2'
        'juice-3'
    ;
    justify-items: center;
    justify-self: center;
    margin: 30px 0 0 0;
}

.juice-1 {
    grid-area: juice-1;
}

.juice-2 {
    grid-area: juice-2;
}

.juice-3 {
    grid-area: juice-3;
}

.breakfast-drinks {
    display: grid;
    grid-template-areas: 
        'section'
        'drink-1'
        'drink-2'
        'drink-3'
        'drink-4'
    ;
    grid-template-rows: 80px 50px 50px 50px 50px;
    justify-items: center;
    justify-self: center;
    font-size: 15px;
}

.drink {
    display: grid;
    grid-template-areas: 
        'item price'
    ;
    grid-template-columns: 300px 10px;
    justify-self: center;
}

.drink-1 {
    grid-area: drink-1;
}

.drink-2 {
    grid-area: drink-2;
}

.drink-3{
    grid-area: drink-3;
}

.drink-4 {
    grid-area: drink-4;
}

.lunch-menu {
    display: grid;
    grid-template-areas: 
        'title'
        'hours'
        'soup'
        'salads'
        'specials'
        'burgers'
        'sandwiches'
    ;
    margin: 50px 0 0 0;
    background-color:rgba(255, 255, 255, 0.9);
    margin: 50px 0 0 0;
    padding: 15px 0 15px 0;
    font-family: primary;
    color: black;
    justify-items: center;
}

.lunch-menu h3 {
    grid-area: title;
    font-size: 15pt;
    color:rgba(150, 50, 50);
    text-align: center;
}

.lunch-soup {
    display: grid;
    grid-template-areas: 
        'section'
        'soup-1'
    ;
    justify-items: center;
    justify-self: center;
}

.soup-1 {
    grid-area: soup-1;
}

.lunch-salads {
    display: grid;
    grid-template-areas: 
        'section'
        'salad-1'
        'salad-2'
        'salad-3'
    ;
    justify-items: center;
    justify-self: center;
}

.salad-1 {
    grid-area: salad-1;
}

.salad-2 {
    grid-area: salad-2;
}

.salad-3 {
    grid-area: salad-3;
}

.dinner-menu {
    display: grid;
    grid-template-areas: 
        'title'
        'hours'
        'soup'
        'salads'
        'entrees'
        'desserts'
    ;
    margin: 50px 0 0 0;
    background-color:rgba(255, 255, 255, 0.9);
    margin: 50px 0 0 0;
    padding: 15px 0 15px 0;
    font-family: primary;
    color: black;
    justify-items: center;
}

.dinner-menu h3 {
    grid-area: title;
    font-size: 15pt;
    color:rgba(150, 50, 50);
    text-align: center;
}

.dinner-soup {
    display: grid;
    grid-template-areas: 
        'section'
        'soup-1'
    ;
    justify-items: center;
    justify-self: center;
}

.soup-1 {
    grid-area: soup-1;
}

.dinner-apps {
    margin: 0 0 10px 0;
    font-size: 15px;
}

.app {
    text-align: center;
    margin: 0 0 20px 0;
    padding: 0 20px;
}

.dinner-desserts {
    margin: 0 0 20px 0;
    font-size: 15px;
}

.brunch-menu {
    display: grid;
    grid-template-areas: 
        'title'
        'hours'
        'soup'
        'salads'
        'specials'
        'burgers'
        'sandwiches'
    ;
    margin: 50px 0 0 0;
    background-color:rgba(255, 255, 255, 0.9);
    margin: 50px 0 0 0;
    padding: 15px 0 30px 0;
    font-family: primary;
    color: black;
    justify-items: center;
}

.brunch-menu h3 {
    color:rgba(150, 50, 50)
}

.brunch-sides {
    display: grid;
    grid-template-areas: 
        'section'
        'side-1'
        'side-2'
        'side-3'
        'side-4'
        'side-5'
        'side-6'
        'side-7'
        'side-8'
    ;
    grid-template-rows: 75px 30px 30px 30px 30px 30px 30px 30px 30px;
    justify-self: center;
    font-size: 15px;
}

.brunch-sides .menu-section {
    grid-area: section;
}

.brunch-juices {
    display: grid;
    grid-template-areas: 
        'section'
        'juice-1'
        'juice-2'
        'juice-3'
        'juice-4'
    ;
    grid-template-rows: 75px 30px 30px 30px 30px;
    justify-self: center;
    font-size: 15px;
}

.juice {
    display: grid;
    grid-template-areas: 
        'item price'
    ;
    grid-template-columns: 250px 10px;
    justify-self: center;

}

.brunch-drinks {
    display: grid;
    grid-template-areas: 
        'section'
        'drink-1'
        'drink-2'
        'drink-3'
        'drink-4'
    ;
    grid-template-rows: 80px 30px 30px 30px 30px;
    justify-items: center;
    justify-self: center;
    font-size: 15px;
}

.drink-price {
    font-weight: bold;
}












































































































































































































































































































































@media screen and (max-width: 480px) {
    .galleryContainer {
        height: 290px;
    }

    .booking-large {
        display: none;
    }

    .booking-small {
        display: grid;
    }
}

@media screen and (max-width: 464px) {
    .galleryContainer {
        height: 284px;
    }
}

@media screen and (max-width: 455px) {
    .galleryContainer {
        height: 278px;
    }
}

@media screen and (max-width: 445px) {
    .galleryContainer {
        height: 272px;
    }

    .valentine-included {
        font-size: 14px;
        grid-template-areas: 
            'stay-i stay wine-i wine'
            'dinner-i dinner choco-i choco'
            'breakf-i breakf flower-i flower'
        ;
    }
}

@media screen and (max-width: 435px) {
    .galleryContainer {
        height: 265px;
    }
}

@media screen and (max-width: 425px) {
    .galleryContainer {
        height: 259px;
    }
}

@media screen and (max-width: 415px) {
    .galleryContainer {
        height: 253px;
    }
}

@media screen and (max-width: 414px) {
    .valentine-header{ 
        font-size: 25px;
    }
    .valentine-details{ 
        font-size: 14px;
    }
}

@media screen and (max-width: 405px) {
    .galleryContainer {
        height: 247px;
    }
}

@media screen and (max-width: 401px) {
    .valentine-header{ 
        font-size: 23px;
    }
    
    .valentine-included img {
        width: 30px;
        height: 30px;
    }
}

@media screen and (max-width: 395px) {
    .galleryContainer {
        height: 240px;
    }
}

@media screen and (max-width: 385px) {
    .galleryContainer {
        height: 234px;
    }
}

@media screen and (max-width: 377px) {
    .valentine-header { 
        font-size: 22px;
    }
    .valentine-details {
        font-size: 14px;
    }
}

@media screen and (max-width: 375px) {
    .galleryContainer {
        height: 228px;
    }
}

@media screen and (max-width: 365px) {
    .galleryContainer {
        height: 222px;
    }
}

@media screen and (max-width: 364px) {
    .valentine-header{ 
        font-size: 21px;
    }
}

@media screen and (max-width: 355px) {
    .galleryContainer {
        height: 215px;
    }
}

@media screen and (max-width: 351px) {
    .valentine-header{ 
        font-size: 20px;
    }
    .valentine-details {
        font-size: 13px;
    }
}

@media screen and (max-width: 345px) {
    .galleryContainer {
        height: 209px;
    }
}

@media screen and (max-width: 339px) {
    .valentine-header{ 
        font-size: 19px;
    }
}

@media screen and (max-width: 335px) {
    .galleryContainer {
        height: 203px;
    }
}

@media screen and (max-width: 327px) {
    .valentine-header{ 
        font-size: 18px;
    }
}

@media screen and (max-width: 325px) {
    .galleryContainer {
        height: 197px;
    }
}

@media screen and (max-width: 430px) { /*---------------------------------------------------------*/

    .header {
        grid-template-areas: 
            "logo . calendar map phone bars";
        grid-template-columns: 40% auto 46px 46px 46px 46px;
    }
    
    .header .calendar img {
        height: 23px;
    }
    
    .header .map img {
        height: 23px;
    }
    
    .header .phone img {
        height: 23px;
    }
    
    .bars img {
        height: 23px;
    }

    .lodging-details {
        grid-template-columns: 60px 0px auto 60px 0px auto;
        font-size: 15px;
    }

}

@media screen and (max-width: 414px) { /*---------------------------------------------------------*/
    .page-header {
        font-size: 15px;
    }
}

@media screen and (max-width: 412px) { /*---------------------------------------------------------*/

}

@media screen and (max-width: 400px) { /*---------------------------------------------------------*/
    
    .logo {
        height: 47px;
    }

    .page-header {
        font-size: 14px;
    }

    .lodging-details {
        grid-template-columns: 50px 0px auto 50px 0px auto;
    }

    .lodging-details img {
        height: 25px;
        width: 25px;
    }
    
    .price-disclaimer {
        margin: 0 25px 0 0;
    }
    
    .book-lodging button {
        font-size: 12px;
    }

}

@media screen and (max-width: 390px) { /*---------------------------------------------------------*/

    .logo {
        height: 45px;
    }

}

@media screen and (max-width: 380px) { /*---------------------------------------------------------*/
    
    .logo {
        height: 43px;
    }

    .lodging-pricing {
        grid-gap: 0 15px;
    }
    
    .weekday {
        letter-spacing: 1px; 
    }
    
    .weekend {
        letter-spacing: 1px;
    }
    
    .weekday-price {
        font-size: 20px;
        letter-spacing: 3px;
    }

}

@media screen and (max-width: 375px) { /*---------------------------------------------------------*/

    .page-header {
        font-size: 13px;
    }

}

@media screen and (max-width: 370px) { /*---------------------------------------------------------*/

    .logo {
        height: 41px;
    }

    .home-attraction .date {
        font-size: 15px;
    }

    .lodging-details {
        font-size: 14px;
    }

    .lodging-pricing {
        margin: 0 0 0 15px;
    }

    .book-lodging {
        margin: 0 15px 0 0;
    }

    .price-disclaimer {
        margin: 0 20px 0 0;
    }
    
    .lodging-description {
        font-size: 13px;
        margin: 15px 15px 20px 15px;
    }
}


@media screen and (max-width: 360px) { /*---------------------------------------------------------*/

    .logo {
        height: 40px;
    }

    .header {
        grid-template-areas: 
            "logo . calendar map phone bars";
        grid-template-columns: 40% auto 45px 45px 45px 45px;
    }
    
    .header .calendar img {
        height: 22px;
    }
    
    .header .map img {
        height: 22px;
    }
    
    .header .phone img {
        height: 22px;
    }
    
    .bars img {
        height: 22px;
    }

    .lodging-details {
        grid-template-columns: 40px 0px auto 40px 0px auto;
    }

    .lodging-details img {
        height: 20px;
        width: 20px;
    }
}

@media screen and (max-width: 350px) { /*---------------------------------------------------------*/

    .header {
        grid-template-areas: 
            "logo . calendar map phone bars";
        grid-template-columns: 40% auto 42px 42px 42px 42px;
    }
    
    .header .calendar img {
        height: 21px;
    }
    
    .header .map img {
        height: 21px;
    }
    
    .header .phone img {
        height: 21px;
    }
    
    .bars img {
        height: 21px;
    }

    .page-header {
        font-size: 12px;
    }

    .home-attraction .date {
        font-size: 14px;
    }

    .footer-info {
        font-size: 12px;
        grid-template-columns: 150px auto;
    }

    .contact-info {
        grid-template-columns: 35px 135px;

    }

    .social {
        grid-template-columns: 30px 30px 30px;
    }

    .facebook img {
        height: 20px;
    }
    
    .instagram img {
        height: 20px;
    }
    
    .google img {
        height: 20px;
    }

    .weekday {
        font-size: 10px;
        letter-spacing: 0.5px; 
    }
    
    .weekend {
        font-size: 10px;
        letter-spacing: 0.5px;
    }
    
    .weekday-price {
        letter-spacing: 2px;
    }
    
    .weekend-price {
        letter-spacing: 2px;
    }

}

@media screen and (max-width: 340px) { /*---------------------------------------------------------*/

    .header {
        grid-template-areas: 
            "logo . calendar map phone bars";
        grid-template-columns: 40% auto 40px 40px 40px 40px;
    }

    .logo {
        height: 38px;
    }
    
    .header .calendar img {
        height: 20px;
    }
    
    .header .map img {
        height: 20px;
    }
    
    .header .phone img {
        height: 20px;
    }
    
    .bars img {
        height: 20px;
    }

    .weekday {
        font-size: 9px;
    }
    
    .weekend {
        font-size: 9px;
    }
}


@media screen and (max-width: 330px) {
    .lodging-details {
        grid-template-columns: 40px 0px auto 40px 0px auto;
        font-size: 13px;
    }

    .lodging-details img {
        height: 20px;
        width: 20px;
    }

    .book-lodging button {
        padding: 10px 13px;
    }

    .price-disclaimer {
        margin: 0 19px 0 0;
    }
}

@media screen and (max-width: 320px) { /*---------------------------------------------------------*/

    .header {
        grid-template-areas: 
            "logo . calendar map phone bars";
        grid-template-columns: 40% auto 38px 38px 38px 38px;
    }

    .logo {
        height: 37px;
    }
    
    .header .calendar img {
        height: 19px;
    }
    
    .header .map img {
        height: 19px;
    }
    
    .header .phone img {
        height: 19px;
    }
    
    .bars img {
        height: 19px;
    }
}

@media screen and (min-width: 600px) { /*---------------------------------------------------------*/

    .galleryContainer{
        height: 375px;
    }

    .home-historic .history {
        margin: 15px 25px 0px 25px;
    }

    .home-attractions .attractions {
        margin: 25px 25px 0px 25px;
    }

    footer {
        padding: 15px 20px;
    }

}

@media screen and (min-width: 650px) {
    .galleryContainer {
        height: 406px;
    }
}

@media screen and (min-width: 700px) { /*---------------------------------------------------------*/

.galleryContainer{
    height: 437px;
}

.home-historic .history {
    margin: 25px 30px 0px 30px;
}

.home-attractions .attractions {
    margin: 25px 30px 0px 30px;
}

footer {
    padding: 15px 25px;
}

.more-attractions a {
    display: grid;
}

.view-lodgings a {
    display: grid;
}

.book-now a {
    display: grid;
}

@media screen and (min-width: 750px) {
    .galleryContainer {
        height: 468px;
    }
}

@media screen and (min-width: 800px) { /*---------------------------------------------------------*/

    .galleryContainer {
        height: 500px;
    }

    .home-historic .history {
        margin: 25px 35px 0px 35px;
    }

    .home-attractions .attractions {
        margin: 25px 35px 0px 35px;
    }

    .footer-info {
        grid-template-areas:
            "contact sketch other";
        grid-template-columns: 200px 1fr 200px;
        height: 175px;
    }

    .sketch {
        display: grid;
        width: 250px;
    }

}

@media screen and (min-width: 850px) {
    .galleryContainer {
        height: 531px;
    }
}

@media screen and (min-width: 900px) { /*---------------------------------------------------------*/
 
    .galleryContainer{
        height: 562px;
    }

    .home-historic .history {
        margin: 25px 40px 0px 40px;
    }

    .home-attractions .attractions {
        margin: 25px 40px 0px 40px;
    }

    .footer-info {
        height: 175px;
    }

    .sketch {
        width: 250px;
    }

    .mill-container {
        display: grid;
        grid-template-areas:
        'mill-history history-photo1'
        'history-photo2 history-photo3'
        'mill-today mill-photo1'
        'mill-today mill-photo2'
        'marl-creek mill-store'
        ;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        grid-gap: 0;
        padding: 0;
        margin: 0;
    }

    .mill-history-container {
        grid-area: mill-history;
        width: 100%;
    }

    .mill-today-container {
        grid-area: mill-today;
    }

    .marl-creek-container {
        grid-area: marl-creek;
    }

    .mill-history-container img {
        align-self: flex-end;
    }

    .mill-history-details {
        align-self: flex-start;
    }

    .historic-photo-container img {
        align-self: flex-end;
    }

    .historic-photo-details {
        align-self: flex-start;
    }

    .mill-today-container img {
        align-self: flex-end;
    }

    .mill-today-details {
        align-self: flex-start;
    }

    .mill-store-container {
        grid-area: mill-store;
    }

    .lodging-container {
        grid-template-areas: 
        'cabin paddock'
        'granary wheat-bin'
        'corn-bin .';
        grid-template-columns: 1fr 1fr;
        width: 100%;
    }

    .paddock-details {
        grid-template-areas:
            'occupancy-i . occupancy fireplace-i . fireplace'
            'bed-i . bed coffee-i . coffee'
            'sofa-i . sofa tv-i . tv'
            'tub-i . tub wifi-i . wifi'
            '. . .';
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    }

    .attractions-page-container {
        grid-template-areas:
        'waterfalls hiking-trails'
        'natural-wonders kayaking';
        grid-template-columns: 1fr 1fr;
    }

    .more-attractions a {
        display: none;
    }

    .view-lodgings a {
        display: none;
    }

    .book-now a {
        display: none;
    }
}

@media screen and (min-width: 950px) {
    .galleryContainer {
        height: 593px;
    }
}

@media screen and (min-width: 1000px) { 
    .galleryContainer {
        height: 625px;
    }
}

@media screen and (min-width: 1050px) { 
    .galleryContainer {
        height: 656px;
    }

    .valentine-header {
        font-size: 29px;
    }

    .valentine-details {
        font-size: 14px;
    }
    .valentine-included {
        font-size: 14px;
    }
    
    .valentine-included img {
        width: 30px;
        height: 30px;
    }

    .valentine-booking {
        grid-template-areas: 
            'price date book';
        grid-template-columns: 1fr 1fr 1fr;
    }

    .valentine-price {
        grid-template-columns: 1fr 1fr 10px 1fr 1fr;
        align-self: center;
    }

    .valentine-date {
        align-self: center;
    }

    .valentine-book {
        align-self: center;
    }

    .v-suite-text {
        font-size: 18px;
    }
    .v-suite-price {
        font-size: 18px;
        padding: 10px 25px;
    }
    .v-cabin-text {
        font-size: 18px;
    }
    .v-cabin-price {
        font-size: 18px;
        padding: 10px 25px;
    }

    .v-limited {
        font-size: 14;
    
    }
    .v-dates {
        font-size: 18px;
    }
}

@media screen and (min-width: 1100px) { 
    .galleryContainer {
        height: 687px;
    }

    .breakfast-entrees {
        padding: 0 300px 0 300px;
    }
}

@media screen and (min-width: 1150px) { 
    .galleryContainer {
        height: 718px;
    }

    .valentine-header {
        font-size: 32px;
    }

    .valentine-details {
        font-size: 14px;
    }
    .valentine-included {
        font-size: 14px;
    }
    
    .valentine-included img {
        width: 30px;
        height: 30px;
    }

    .valentine-booking {
        grid-template-areas: 
            'price date book';
        grid-template-columns: 1fr 1fr 1fr;
    }

    .valentine-price {
        grid-template-columns: 1fr 1fr 10px 1fr 1fr;
        align-self: center;
    }

    .valentine-date {
        align-self: center;
    }

    .valentine-book {
        align-self: center;
    }

    .v-suite-text {
        font-size: 18px;
    }
    .v-suite-price {
        font-size: 18px;
        padding: 10px 25px;
    }
    .v-cabin-text {
        font-size: 18px;
    }
    .v-cabin-price {
        font-size: 18px;
        padding: 10px 25px;
    }

    .v-limited {
        font-size: 14;
    
    }
    .v-dates {
        font-size: 18px;
    }
}

@media screen and (min-width: 1200px) { 
    .galleryContainer {
        height: 750px;
    }

}

@media screen and (min-width: 1250px) { 
    .galleryContainer {
        height: 781px;
    }
    .valentine-details {
        font-size: 15px;
    }
    .valentine-included {
        font-size: 15px;
    }
    
    .valentine-included img {
        width: 35px;
        height: 35px;
    }

    .valentine-booking {
        grid-template-areas: 
            'price date book';
        grid-template-columns: 1fr 1fr 1fr;
    }

    .valentine-price {
        grid-template-columns: 1fr 1fr 15px 1fr 1fr;
        align-self: center;
    }

    .valentine-date {
        align-self: center;
    }

    .valentine-book {
        align-self: center;
    }

    .v-suite-text {
        font-size: 20px;
    }
    .v-suite-price {
        font-size: 20px;
        padding: 10px 25px;
    }
    .v-cabin-text {
        font-size: 20px;
    }
    .v-cabin-price {
        font-size: 20px;
        padding: 10px 25px;
    }

    .v-limited {
        font-size: 15px;
    
    }
    .v-dates {
        font-size: 20px;
    }
}

@media screen and (min-width: 1280px) { /*--------------------------------------------------------*/

    .header {
        grid-template-areas: 
            "logo . mill menu cabin lodgings attractions . calendar map phone .";
        grid-template-columns: 40% auto 100px 100px 100px 140px 175px 50px 50px 50px 50px 10px;
    }

    .bars {
        display: none;
    }

    .nav {
        display: grid;

    }

    .home {
        display: grid;
        grid-template-areas: 
        'cabin lodgings'
        'history attractions';
        grid-template-columns: 1fr 1fr;
    }

    .home-cabin {
        grid-area: cabin;
    }

    .home-lodgings {
        grid-area: lodgings;
    }

    .home-history {
        grid-area: history;
    }

    .home-attractions {
        grid-area: attractions;
    }
}


@media screen and (min-width: 1300px) { 
    .galleryContainer {
        height: 800px;
    }

    .valentine-details {
        font-size: 16px;
    }

    .valentine-included {
        font-size: 16px;
    }
    
    .valentine-included img {
        width: 35px;
        height: 35px;
    }

    .valentine-price {
        grid-template-columns: 1fr 1fr auto 1fr 1fr;
    }

    .v-suite-text {
        font-size: 24px;
    }
    .v-suite-price {
        font-size: 24px;
        padding: 15px 30px;
    }
    .v-cabin-text {
        font-size: 24px;
    }
    .v-cabin-price {
        font-size: 24px;
        padding: 15px 30px;
    }
}


@media screen and (min-width: 1350px) { /*--------------------------------------------------------*/
    .more-attractions a {
        display: grid;
    }

    .view-lodgings a {
        display: grid;
    }

    .book-now a {
        display: grid;
    }

    .valentine-details {
        font-size: 17px;
    }
}

@media screen and (min-width: 1350px) {
    .valentine-details {
        font-size: 18px;
    }
}

@media screen and (max-width: 1500px) {
    .included-head {
        display: none;
    }

    .valentine-container {
        grid-template-areas: 
            'img text'
            'img included'
        ;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }

    .valentine-included {
        grid-area: included;
        align-self: center;
    }
}
