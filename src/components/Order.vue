<template>
  <div class="container order">
    <p class="title-type-third order__title">Оформление заказа</p>
    <p class="subtitle-type-third order__subtitle">Персональные данные</p>
    <div class="order__block_input">
      <input class="order__input" type="name" placeholder="Ваше имя*" />
      <input class="order__input" type="surname" placeholder="Ваша фамилия*" />
    </div>
    <div class="order__block_input">
      <input class="order__input" type="email" placeholder="Ваш e-mail*" />
      <input class="order__input" type="phone" placeholder="Ваш телефон*" />
    </div>
    <p class="subtitle-type-third order__text">Способ доставки:</p>
    <!-- <div>
            <div>
                <p class="subtitle-type-third order__text">По Украине:</p>
                <input  value="pickup" type="radio">
                <label for="pickup">Самовывоз - вул. Большая Васильковская 14(м. Льва Толстого)</label>
                <input value="np" type="radio">
                <label for="pickup">Новая Почта</label>
                <button id="btn">Show Selected Value</button>
            </div>
        </div> -->
    <form id="myForm">
      <div class="order__legend">
        <div class="order__label">
          <legend class="subtitle-type-third order__text">По Украине:</legend>
          <label>
            <input type="radio" name="radioName" value="Новая Почта" /> Новая
            Почта
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="radioName"
              value="Самовывоз - вул. Большая Васильковская 14(м. Льва Толстого)"
            />
            Самовывоз - вул. Большая Васильковская 14(м. Льва Толстого)
          </label>
        </div>

        <div class="order__label">
          <legend class="subtitle-type-third order__text">
            Международная доставка:
          </legend>
          <label>
            <input
              type="radio"
              name="radioName"
              value="Украпочта / 1-3 недели / 30$"
            />
            Украпочта / 1-3 недели / 30$ </label
          ><br />

          <label>
            <input
              type="radio"
              name="radioName"
              value="DHL / 3-7 дней / 60$"
            />DHL / 3-7 дней / 60$
          </label>
        </div>
      </div>
    </form>
    <p class="subtitle-type-third order__subtitle">Адрес доставки:</p>
    <div class="order__block_input">
      <input class="order__input" type="text" placeholder="Город*" />
      <input class="order__input" type="text" placeholder="Отделение почты*" />
    </div>

    <form id="myForm">
      <div class="order__legend">
        <div class="order__label">
          <legend class="subtitle-type-third order__text">
            Вы можете оплатить покупку одним из ниже перечисленных способов:
          </legend>
          <label>
            <input
              type="radio"
              name="radioName"
              value="Полная предоплата через Приват 24"
            />
            Полная предоплата через Приват 24
          </label><br>

          <label>
            <input
              type="radio"
              name="radioName"
              value="Денежным переводом  Visa/MasterCard"
            />
            Денежным переводом Visa/MasterCard
          </label><br>
          <label>
            <input
              type="radio"
              name="radioName"
              value="Наложенным платежом в отделении Новой Почты"
            />
            Наложенным платежом в отделении Новой Почты
          </label>
        </div>
      </div>
    </form>
    <p class="subtitle-type-third order__subtitle">
      Использование бонусного счёта:
    </p>
    <div class="order__block_input">
      <input
        class="order__input"
        type="text"
        placeholder="Сумма списания бонусов*"
      />
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  props: {},
  mounted() {
    // $('#myForm input').on('change', function() {
    //     $( ".order__select" ).html($('input[name=radioName]:checked', '#myForm').val());
    // });
  },
};
</script>