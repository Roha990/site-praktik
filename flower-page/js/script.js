function paydelivery(){
    document.querySelector('.change').innerHTML = ' <div class="col-md-9 paydelivery"> <div class="pink_text">Способы оплаты:</div> <ul> <li>БАНКОВСКОЙ КАРТОЙ ПРИ ОФОРМЛЕНИИ ЗАКАЗА ЧЕРЕЗ САЙТ</li> <li>НАЛИЧНЫМИ ИЛИ БАНКОВСКОЙ КАРТОЙ ПРИ САМОВЫВОЗЕ</li> <li>НАЛИЧНЫМИ ПРИ ДОСТАВКЕ КУРЬЕРОМ</li> <li>КРИПТОВАЛЮТОЙ ОНЛАЙН</li> </ul> <div class="pink_text">стоимость доставки:</div> <ul> <li><span class="bold_text">Бесплатно</span> – при заказе на сумму от 90 рублей</li> <li><span class="bold_text">10 рублей</span> – при заказе на сумму менее 90 рублей</li> <li>Возможность, сроки и стоимость доставки за пределы МКАД, доставки в ночное <br> время, праздники <span class="blue_text">оговариваются с менеджером</span></li> <li>Так же вы можете забрать ваш заказ самостоятельно по адресу: <br> <span class="blue_text">г. Минск, ул. Тимирязева д. 67, комн. 112 ежедневно с 10.00 до 21.00</span></li> </ul> <div class="pink_text">стоимость доставки:</div> <p>Доставка осуществляется по городу Минску в пределах МКАД <span class="blue_text">в любой день с 09.00 до 22.00</span>. <br> Доставка в ночное время осуществляется по договоренности с оператором</p> </div>'
}
function feedback(){
    document.querySelector('.change').innerHTML = ' <div class="col-md-6"> <div class="form_text form_fb"> Отзывов пока нет </div> <div class="form_blue_text">Будьте первым, кто оставил отзыв на “Рубиновые искры”</div> <div class="form_text">Ваш адрес email не будет опубликован. Обязательные поля помечены *</div> <div class="form_text form_text_rank">Ваша оценка:</div> <img src="img/promo/stars.png" alt="stars"> <div> <form action=""> <div class="form_text form_fby">Ваш отзыв*</div> <textarea placeholder="Введите комментарий" class="question_input_text question_input_text_comment"></textarea> <div class="form_text">Имя*</div> <input type="text" placeholder="Введите ваше имя" class="question_input_text"> <div class="form_text">E-mail*</div> <input type="text" placeholder="Введите вашу почту" class="question_input_text"> <input type="submit" value="ОТПРАВИТЬ" class="question_input_btn"> </form> <div class="question_politic">Нажимая на кнопку «Отправить», я даю свое согласие на обработку <br> персональных данных, в соответствии с <a href="#"> Политикой конфиденциальности</a></div> </div> </div>'
}
