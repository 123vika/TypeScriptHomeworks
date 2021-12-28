import { renderBlock } from "./lib.js";

export function renderSearchFormBlock() {
  let day = new Date();
  const dayCheckIn = day.getDate() + 1;
  const monthCheckIn = day.getMonth();
  const yearCheckIn = day.getFullYear();
  const checkInDate = `${dayCheckIn}.${monthCheckIn}.${yearCheckIn}`;

  const checkOutDate = `(${dayCheckIn + 2}.${monthCheckIn}.${yearCheckIn})`;
  console.log(checkInDate);
  console.log(checkOutDate);
  renderBlock(
    "search-form-block",
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${checkInDate}"
             min="05-11-2021" max="2025-06-30" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${checkOutDate}" min="2021-05-11" max="2025-06-30" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  );
}
// 2021-05-11    2021-05-13
